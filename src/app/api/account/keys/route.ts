import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { GRID_API_BASE } from '@/lib/grid-api';
import { resolveGridKey } from '@/lib/grid-account';

/** Issue a new API key. The plaintext passes through once, never stored. */
export async function POST(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET
  });
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const body = await req.text();
  const res = await fetch(`${GRID_API_BASE}/v1/account/keys`, {
    method: 'POST',
    headers: { apikey: key, 'Content-Type': 'application/json' },
    body
  });
  return NextResponse.json(await res.json(), { status: res.status });
}
