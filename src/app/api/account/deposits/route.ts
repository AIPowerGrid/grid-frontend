import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';

const CLAIM_PATH = {
  USDC: '/v1/account/deposits/claim',
  AIPG: '/v1/account/deposits/claim-aipg',
  ETH: '/v1/account/deposits/claim-eth'
} as const;

async function accountKey(req: NextRequest) {
  return resolveGridKey(await getSessionToken(req));
}

export async function GET(req: NextRequest) {
  const key = await accountKey(req);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const response = await fetch(
    `${GRID_API_BASE}/v1/account/deposits?limit=50`,
    {
      headers: { apikey: key },
      cache: 'no-store'
    }
  );
  return NextResponse.json(await response.json(), { status: response.status });
}

export async function POST(req: NextRequest) {
  const key = await accountKey(req);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const body = await req.json().catch(() => null);
  const asset = typeof body?.asset === 'string' ? body.asset.toUpperCase() : '';
  const txHash = typeof body?.tx_hash === 'string' ? body.tx_hash : '';
  if (!(asset in CLAIM_PATH) || !/^0x[0-9a-fA-F]{64}$/.test(txHash)) {
    return NextResponse.json(
      { error: 'Invalid deposit claim' },
      { status: 400 }
    );
  }
  const path = CLAIM_PATH[asset as keyof typeof CLAIM_PATH];
  const response = await fetch(`${GRID_API_BASE}${path}`, {
    method: 'POST',
    headers: { apikey: key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ tx_hash: txHash }),
    cache: 'no-store'
  });
  return NextResponse.json(await response.json(), { status: response.status });
}
