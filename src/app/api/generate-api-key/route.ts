import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import * as db from '@/lib/db';
import { headers } from 'next/headers';

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

// Local function to generate the API key. Note: it's not exported.
async function fetchApiKey(): Promise<string | null> {
  try {
    // Generate a random username of 14 letters.
    const username = generateRandomLetters(14);
    const response = await fetch('https://api.aipowergrid.io/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        Origin: 'https://api.aipowergrid.io',
        Referer: 'https://api.aipowergrid.io/register'
      },
      body: `username=${username}`
    });

    const responseText = await response.text();

    // Use a regex to extract the API key (adjust if the HTML structure changes)
    const apiKeyRegex =
      /<p\s+style="background-color:\s*darkorange\s*;">\s*(.*?)\s*<\/p>/i;
    const match = responseText.match(apiKeyRegex);
    const apiKey = match?.[1];
    return apiKey || null;
  } catch (error) {
    console.error('Error fetching API key:', error);
    return null;
  }
}

// Utility function to extract a stable OAuth ID
function getStableId(session: any): string | null {
  if (!session?.user?.id) return null;

  const userId = session.user.id;

  // Already a stable ID from an OAuth provider (e.g., "google_12345...")
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
  } catch (error) {
    console.error(`Error ensuring trusted status for user ${userId}:`, error);
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

      if (user && user.api_key && !forceRegenerate) {
        // User exists and has an API key - return the existing key
        apiKey = user.api_key;

        // Ensure user is trusted and get the status
        const isTrusted = await ensureUserIsTrusted(user.id);

        return NextResponse.json({
          apiKey,
          trusted: isTrusted,
          userId: user.id,
          username: user.username
        });
      }

      // Generate a new API key if we're here
      apiKey = await fetchApiKey();

      if (!apiKey) {
        return NextResponse.json(
          { error: 'Failed to fetch API key from service' },
          { status: 500 }
        );
      }

      // Re-check if user exists (in case of race conditions)
      if (!user) {
        user = await db.getUserByOAuthId(oauthId);
      }

      if (user) {
        // Update existing user's API key
        user = await db.updateUserApiKey(user.id, apiKey);
      } else {
        // Create new user
        const username = generateRandomLetters(8); // Generate a random username
        try {
          user = await db.createUser(username, oauthId, apiKey);
        } catch (createError: any) {
          // If creation fails due to duplicate key, try to get the user again
          if (createError.code === '23505') {
            user = await db.getUserByOAuthId(oauthId);

            // If we still don't have a user, something is seriously wrong
            if (!user) {
              throw createError;
            }

            // Update the API key for the now-found user
            user = await db.updateUserApiKey(user.id, apiKey);
          } else {
            throw createError;
          }
        }
      }

      // Ensure user is trusted and get the status
      const isTrusted = await ensureUserIsTrusted(user.id);

      return NextResponse.json({
        apiKey,
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
