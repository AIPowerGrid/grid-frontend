import { NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';

/** Public worker-payout transparency (proxies grid /v1/payouts/public). No auth,
 * no PII — aggregate totals + on-chain wallets/tx hashes only. */
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const res = await fetch(`${GRID_API_BASE}/v1/payouts/public`, {
      cache: 'no-store'
    });
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json({ error: 'unavailable' }, { status: 502 });
  }
}
