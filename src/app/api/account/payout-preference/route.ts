import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { resolveGridKey, getSessionToken } from '@/lib/grid-account';

/**
 * Set the worker's payout asset (USDC/USDS/ETH/AIPG) and/or AIPG-slice override.
 * Forwards the httpOnly Core token server-side; the grid step-up-gates this
 * (a leaked inference key can't change how you're paid).
 */
export async function POST(req: NextRequest) {
  const token = await getSessionToken(req);
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const body = await req.json().catch(() => ({}));
  const res = await fetch(`${GRID_API_BASE}/v1/account/payout-preference`, {
    method: 'POST',
    headers: { apikey: key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ asset: body?.asset, aipg_bps: body?.aipg_bps }),
    cache: 'no-store'
  });
  return NextResponse.json(await res.json(), { status: res.status });
}
