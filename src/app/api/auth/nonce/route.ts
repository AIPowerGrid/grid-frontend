import { NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';

/**
 * Proxy the grid API's SIWE nonce. Nonces are minted and stored server-side
 * by the API (single-use, 5-min TTL), so a signature can never be replayed —
 * the old local randomBytes nonce was never stored or checked.
 */
export async function GET() {
  try {
    const res = await fetch(`${GRID_API_BASE}/v1/accounts/wallet/nonce`, {
      method: 'POST',
      cache: 'no-store'
    });
    if (!res.ok) throw new Error(`nonce upstream ${res.status}`);
    return NextResponse.json(await res.json());
  } catch (e) {
    console.error('nonce route:', e);
    return NextResponse.json({ error: 'Nonce unavailable' }, { status: 502 });
  }
}
