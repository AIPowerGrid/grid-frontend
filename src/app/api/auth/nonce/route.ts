import { NextResponse } from 'next/server';
import { randomBytes } from 'crypto';

export async function GET() {
  // Generate a random nonce for the challenge
  const nonce = randomBytes(32).toString('hex');

  // In a production app, you'd store this nonce with an expiration time
  // For now, we'll return it and verify it immediately

  return NextResponse.json({ nonce });
}
