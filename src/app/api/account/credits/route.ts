import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { resolveGridKey, getSessionToken } from '@/lib/grid-account';

/**
 * The signed-in account's spendable credits — the daily FREE allowance
 * (resets UTC midnight, AIPG-tiered) plus the purchased balance. Forwards the
 * httpOnly Core user token server-side; it is never sent to the browser.
 */
export async function GET(req: NextRequest) {
  const token = await getSessionToken(req);
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const res = await fetch(`${GRID_API_BASE}/v1/account/credits`, {
    headers: { apikey: key },
    cache: 'no-store'
  });
  return NextResponse.json(await res.json(), { status: res.status });
}
