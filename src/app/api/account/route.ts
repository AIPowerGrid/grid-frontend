import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { GRID_API_BASE } from '@/lib/grid-api';
import { resolveGridKey } from '@/lib/grid-account';

/**
 * Grid account profile + key list for the signed-in user. The account's
 * dashboard-session key lives only in the httpOnly session JWT — these
 * proxy routes forward it server-side; it is never sent to the browser.
 */
export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET
  });
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const res = await fetch(`${GRID_API_BASE}/v1/account`, {
    headers: { apikey: key },
    cache: 'no-store'
  });
  return NextResponse.json(await res.json(), { status: res.status });
}

/**
 * Set the account's payout wallet (where worker earnings are sent). Forwards
 * the session key server-side; the grid format-checks the address.
 */
export async function POST(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET
  });
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const body = await req.json().catch(() => ({}));
  const res = await fetch(`${GRID_API_BASE}/v1/account/payout-wallet`, {
    method: 'POST',
    headers: { apikey: key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ wallet: body?.wallet ?? '' }),
    cache: 'no-store'
  });
  return NextResponse.json(await res.json(), { status: res.status });
}
