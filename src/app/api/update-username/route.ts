import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import * as db from '@/lib/db';

// Utility function to extract a stable OAuth ID (same as in generate-api-key)
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

// Validate username format
function validateUsername(username: string): {
  valid: boolean;
  error?: string;
} {
  // Username length validation (3-100 characters based on swagger.json)
  if (username.length < 3) {
    return {
      valid: false,
      error: 'Username must be at least 3 characters long'
    };
  }
  if (username.length > 100) {
    return {
      valid: false,
      error: 'Username must be at most 100 characters long'
    };
  }

  // Only allow alphanumeric characters, underscores, and hyphens
  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  if (!usernameRegex.test(username)) {
    return {
      valid: false,
      error:
        'Username can only contain letters, numbers, underscores, and hyphens'
    };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    // Get the user's session
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const oauthId = getStableId(session);

    if (!oauthId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Get the current user
    const user = await db.getUserByOAuthId(oauthId);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Parse request body
    const body = await request.json().catch(() => ({}));
    const { username } = body;

    if (!username || typeof username !== 'string') {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    // Trim whitespace
    const trimmedUsername = username.trim();

    // Validate username format
    const validation = validateUsername(trimmedUsername);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Check if username is the same as current username
    if (user.username.toLowerCase() === trimmedUsername.toLowerCase()) {
      return NextResponse.json(
        { error: 'This is already your current username' },
        { status: 400 }
      );
    }

    // Check if username is available
    const isAvailable = await db.isUsernameAvailable(trimmedUsername, user.id);
    if (!isAvailable) {
      return NextResponse.json(
        { error: 'Username is already taken' },
        { status: 409 }
      );
    }

    // Update the username
    const updatedUser = await db.updateUsername(user.id, trimmedUsername);

    return NextResponse.json({
      success: true,
      username: updatedUser.username,
      message: 'Username updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating username:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    );
  }
}
