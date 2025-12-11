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

// Configuration: Should API keys be hashed before storing in database?
// Set HASH_API_KEYS=false if the API server compares plaintext keys directly (like Horde)
// Set HASH_API_KEYS=true for more security (keys cannot be retrieved if lost)
const HASH_API_KEYS = process.env.HASH_API_KEYS === 'false';

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

// Hash the API key before storing it in the database (security best practice)
function hashApiKey(key: string): string {
  return crypto.createHash('sha256').update(key).digest('hex');
}

// Prepare API key for storage based on configuration
function prepareApiKeyForStorage(plaintextKey: string): string {
  if (HASH_API_KEYS) {
    return hashApiKey(plaintextKey);
  }
  return plaintextKey;
}

// Check if a stored API key is hashed (64 char hex) or plaintext
function isKeyHashed(key: string): boolean {
  return /^[a-f0-9]{64}$/i.test(key);
}

// Utility function to extract a stable OAuth ID
function getStableId(session: any): string | null {
  if (!session?.user?.id) {
    console.log('[getStableId] No session or user.id found');
    return null;
  }

  const userId = session.user.id;
  console.log(`[getStableId] Input userId: ${userId}`);

  // Already a stable ID from an OAuth provider (e.g., "google_12345..." or "web3_0x...")
  if (userId.includes('_')) {
    console.log(`[getStableId] Found stable ID with underscore: ${userId}`);
    return userId;
  }

  // Handle legacy format or other ID formats by using the whole ID
  console.log(`[getStableId] Using whole userId (no underscore): ${userId}`);
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

    // TEMPORARY LOGGING - Remove after debugging
    console.log('=== API KEY GENERATION DEBUG ===');
    console.log('Session:', JSON.stringify(session, null, 2));
    console.log('Session user:', session?.user);
    console.log('Session user id:', session?.user?.id);

    const oauthId = getStableId(session);
    console.log('Extracted oauthId:', oauthId);

    if (!oauthId) {
      console.log('ERROR: No oauthId found');
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      // First, always check if user already exists in the database
      console.log('Looking up user with oauthId:', oauthId);
      let user = await db.getUserByOAuthId(oauthId);
      console.log(
        'User lookup result:',
        user
          ? `Found user ID: ${user.id}, username: ${user.username}`
          : 'User not found'
      );
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
        const existingKeyIsHashed = isKeyHashed(user.api_key);

        if (existingKeyIsHashed && HASH_API_KEYS) {
          // It's hashed and we're using hashed mode - can't show the original
          const isTrusted = await ensureUserIsTrusted(user.id);
          return NextResponse.json({
            message:
              'Your API key is stored securely and cannot be retrieved. If you need a new key, use the "Create New Key" button below.',
            keyStored: true,
            requiresRegeneration: false,
            trusted: isTrusted,
            userId: user.id,
            username: user.username
          });
        } else {
          // Plaintext key - return it (either we're in plaintext mode, or legacy key)
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
      console.log('Generating new API key locally...');
      plaintextApiKey = generateApiKey();
      console.log(
        `API key generated successfully (length: ${plaintextApiKey.length}, HASH_API_KEYS: ${HASH_API_KEYS})`
      );

      // Prepare the key for storage based on configuration
      // If HASH_API_KEYS=true, hash it; otherwise store plaintext
      const apiKeyForStorage = prepareApiKeyForStorage(plaintextApiKey);
      apiKey = apiKeyForStorage;

      // Re-check if user exists (in case of race conditions)
      if (!user) {
        console.log('Re-checking for user after API key fetch...');
        user = await db.getUserByOAuthId(oauthId);
        console.log(
          'Re-check result:',
          user ? `Found user ID: ${user.id}` : 'Still not found'
        );
      }

      if (user) {
        // Update existing user's API key
        console.log(`Updating existing user ${user.id} with new API key`);
        user = await db.updateUserApiKey(user.id, apiKey);
        console.log('User updated successfully');
      } else {
        // Create new user - THIS IS WHERE WEB3 USERS GET CREATED (same as Google/GitHub)
        const username = generateRandomLetters(8); // Generate a random username
        console.log(
          `[USER CREATION] Creating new user with username: ${username}, oauthId: ${oauthId}`
        );
        console.log(
          `[USER CREATION] This is the same flow for all auth providers (Web3, Google, GitHub)`
        );
        try {
          user = await db.createUser(username, oauthId, apiKey);
          console.log(
            `[USER CREATION] ✓ User created successfully! ID: ${user.id}, username: ${user.username}`
          );
        } catch (createError: any) {
          // If creation fails due to duplicate key (race condition - another request created the user)
          if (createError.code === '23505') {
            console.log(
              'User creation race condition detected, fetching existing user...'
            );
            user = await db.getUserByOAuthId(oauthId);

            // If we still don't have a user, something is seriously wrong
            if (!user) {
              console.error(
                'Duplicate key error but user not found - this should not happen'
              );
              throw createError;
            }

            // Update the API key for the now-found user
            console.log(
              `Race condition resolved: updating existing user ${user.id} with new API key`
            );
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
      console.log(`Ensuring user ${user.id} is trusted...`);
      const isTrusted = await ensureUserIsTrusted(user.id);
      console.log(`User trusted status: ${isTrusted}`);

      console.log('=== SUCCESS - Returning API key ===');
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
