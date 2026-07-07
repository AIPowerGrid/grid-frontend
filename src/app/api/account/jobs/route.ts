import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { resolveGridKey, getSessionToken } from '@/lib/grid-account';

/**
 * The signed-in operator's recent worker jobs — what their workers ran, the den
 * each earned, its output commitment + signed flag, and settlement epoch.
 * Forwards the session key server-side. Scoped to the account's payout wallet.
 */
export async function GET(req: NextRequest) {
  const token = await getSessionToken(req);
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const limit = req.nextUrl.searchParams.get('limit') ?? '50';
  const res = await fetch(
    `${GRID_API_BASE}/v1/account/jobs?limit=${encodeURIComponent(limit)}`,
    { headers: { apikey: key }, cache: 'no-store' }
  );
  return NextResponse.json(await res.json(), { status: res.status });
}
