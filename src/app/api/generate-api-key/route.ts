import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import * as db from '@/lib/db';
import { headers } from 'next/headers';
import crypto from 'crypto';

// Simple in-memory rate limiting store
// In a production environment, use Redis or a similar solution
interface RateLimitEntry {
  count: number;
  timestamp: number;
}
const rateLimitStore: Record<string, RateLimitEntry> = {};

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute
const RATE_LIMIT_REGENERATE = 1; // 1 regenerate per minute

// Helper function to check and update rate limits
function checkRateLimit(id: string, isRegenerate: boolean = false): boolean {
  const now = Date.now();
  const limit = isRegenerate ? RATE_LIMIT_REGENERATE : RATE_LIMIT_MAX_REQUESTS;

  // Clean up expired entries
  Object.keys(rateLimitStore).forEach((key) => {
    if (now - rateLimitStore[key].timestamp > RATE_LIMIT_WINDOW) {
      delete rateLimitStore[key];
    }
  });

  const key = isRegenerate ? `${id}:regenerate` : id;

  if (!rateLimitStore[key]) {
    rateLimitStore[key] = { count: 1, timestamp: now };
    return true;
  }

  if (now - rateLimitStore[key].timestamp > RATE_LIMIT_WINDOW) {
    // Reset if window has passed
    rateLimitStore[key] = { count: 1, timestamp: now };
    return true;
  }

  // Check if limit exceeded
  if (rateLimitStore[key].count >= limit) {
    return false;
  }

  // Increment counter
  rateLimitStore[key].count++;
  return true;
}

// Helper function to generate a random string containing only letters (A-Z, a-z)
function generateRandomLetters(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Generate a secure API key that exactly matches Python's secrets.token_urlsafe(16)
// This is critical for Horde API compatibility - the format must be identical
function tokenUrlSafe(bytes: number = 16): string {
  // Replicate Python secrets.token_urlsafe() exactly:
  // 1. Generate random bytes
  // 2. Base64 encode using standard base64
  // 3. Replace + with - (URL-safe)
  // 4. Replace / with _ (URL-safe)
  // 5. Strip padding (=)
  return crypto
    .randomBytes(bytes)
    .toString('base64') // Standard base64 first
    .replace(/\+/g, '-') // URL-safe: + -> -
    .replace(/\//g, '_') // URL-safe: / -> _
    .replace(/=+$/, ''); // Strip padding
}

// Generate API key using the Horde-compatible format
function generateApiKey(): string {
  return tokenUrlSafe(16);
}

// Hash the API key using Horde's exact salted hash format
// Horde uses: sha256(salt + plaintext_key) where salt is PREPENDED
// This must match exactly for API key validation to work
function hashApiKey(key: string): string {
  // Horde's salt from environment variable - must match Horde's salt exactly
  const salt = process.env.GRID_SALT;
  if (!salt) {
    throw new Error(
      'GRID_SALT environment variable is required for API key hashing'
    );
  }
  // Salt is PREPENDED, not appended: sha256(salt + key)
  return crypto
    .createHash('sha256')
    .update(salt + key) // salt PREPENDED
    .digest('hex');
}

// Utility function to extract a stable OAuth ID
function getStableId(session: any): string | null {
  if (!session?.user?.id) {
    return null;
  }

  const userId = session.user.id;

  // Already a stable ID from an OAuth provider (e.g., "google_12345..." or "web3_0x...")
  if (userId.includes('_')) {
    return userId;
  }

  // Handle legacy format or other ID formats by using the whole ID
  return userId;
}

// Make sure user has the TRUSTED role and return the status
async function ensureUserIsTrusted(userId: number): Promise<boolean> {
  try {
    // Always set the TRUSTED role to TRUE for all users
    // addUserRole now uses UPSERT to handle race conditions gracefully
    await db.addUserRole(userId, 'TRUSTED', 'TRUE');

    // Verify the role was set correctly
    const roles = await db.getUserRoles(userId);

    // Special handling for boolean values from PostgreSQL
    const isTrusted = roles.some((role) => {
      if (role.user_role !== 'TRUSTED') return false;

      // Check all possible true values
      return (
        role.value === true ||
        role.value === 'true' ||
        role.value === 'TRUE' ||
        role.value === 't' ||
        role.value === 'T'
      );
    });

    return isTrusted;
  } catch (error: any) {
    // Only log unexpected errors (not duplicate key errors which are expected in race conditions)
    if (error.code !== '23505') {
      console.error(`Error ensuring trusted status for user ${userId}:`, error);
    }
    // Return false if we can't verify trusted status, but don't fail the whole request
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the user's session
    const session = await auth();

    const oauthId = getStableId(session);

    if (!oauthId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      // First, always check if user already exists in the database
      let user = await db.getUserByOAuthId(oauthId);
      let apiKey;

      // Check if we should generate a new key
      const requestData = await request.json().catch(() => ({}));
      const forceRegenerate = requestData?.regenerate === true;

      // Check rate limits
      if (!checkRateLimit(oauthId, forceRegenerate)) {
        return NextResponse.json(
          {
            error: 'Rate limit exceeded',
            message: forceRegenerate
              ? 'You can only regenerate your API key once per minute'
              : 'Too many requests, please try again later'
          },
          { status: 429 }
        );
      }

      // Generate a new API key locally (no external API scraping needed!)
      let plaintextApiKey: string;
      let hashedApiKey: string;

      if (user && user.api_key && !forceRegenerate) {
        // User exists and has an API key
        // Check if it's a hashed key (64 char hex) or plaintext (legacy)
        const existingKeyIsHashed = /^[a-f0-9]{64}$/i.test(user.api_key);

        if (existingKeyIsHashed) {
          // It's already hashed, we can't show the original
          // Return success but indicate the key is stored securely and cannot be retrieved
          const isTrusted = await ensureUserIsTrusted(user.id);
          return NextResponse.json({
            // Don't return an error - return success with a message explaining the situation
            message:
              'Your API key is stored securely and cannot be retrieved. If you need a new key, use the "Create New Key" button below.',
            keyStored: true, // Indicates key exists but can't be shown
            requiresRegeneration: false, // User can choose to regenerate
            trusted: isTrusted,
            userId: user.id,
            username: user.username
          });
        } else {
          // Legacy plaintext key - return it (for backwards compatibility)
          // Note: New keys will be hashed going forward
          const isTrusted = await ensureUserIsTrusted(user.id);
          return NextResponse.json({
            apiKey: user.api_key,
            trusted: isTrusted,
            userId: user.id,
            username: user.username
          });
        }
      }

      // If forceRegenerate is true, we skip the above check and generate a new key below

      // Generate new API key
      plaintextApiKey = generateApiKey();
      hashedApiKey = hashApiKey(plaintextApiKey);

      // Store the hashed version in the variable for DB operations
      apiKey = hashedApiKey;

      // Re-check if user exists (in case of race conditions)
      if (!user) {
        user = await db.getUserByOAuthId(oauthId);
      }

      if (user) {
        // Update existing user's API key
        user = await db.updateUserApiKey(user.id, apiKey);
      } else {
        // Create new user - THIS IS WHERE WEB3 USERS GET CREATED (same as Google/GitHub)
        const username = generateRandomLetters(8); // Generate a random username
        try {
          user = await db.createUser(username, oauthId, apiKey);
        } catch (createError: any) {
          // If creation fails due to duplicate key (race condition - another request created the user)
          if (createError.code === '23505') {
            user = await db.getUserByOAuthId(oauthId);

            // If we still don't have a user, something is seriously wrong
            if (!user) {
              console.error(
                'Duplicate key error but user not found - this should not happen'
              );
              throw createError;
            }

            // Update the API key for the now-found user
            user = await db.updateUserApiKey(user.id, apiKey);
          } else {
            console.error(
              'Error creating user:',
              createError.code,
              createError.message
            );
            throw createError;
          }
        }
      }

      // Ensure user is trusted and get the status
      const isTrusted = await ensureUserIsTrusted(user.id);
      // Return the plaintext key (only time it's exposed), store hashed in DB
      return NextResponse.json({
        apiKey: plaintextApiKey, // Return plaintext, but we stored hashed
        trusted: isTrusted,
        userId: user.id,
        username: user.username
      });
    } catch (dbError: any) {
      // Log the full database error to the server logs, but don't expose details to the client
      console.error('Database error in generate-api-key:', dbError);

      // Generic response for database errors, without exposing details
      return NextResponse.json(
        {
          error: 'Database error',
          message:
            'There was a problem connecting to the database. Please try again later.'
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error in generate-api-key:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    );
  }
}
