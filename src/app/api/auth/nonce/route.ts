import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';

/**
 * Ask Core for the complete EIP-4361 message. Core binds it to this frontend
 * origin, the selected wallet, Base, and a single-use five-minute nonce.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (typeof body?.address !== 'string') {
      return NextResponse.json(
        { error: 'Wallet address required' },
        { status: 400 }
      );
    }
    const origin = request.nextUrl.origin;
    const res = await fetch(`${GRID_API_BASE}/v1/accounts/wallet/challenge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        address: body.address,
        domain: request.nextUrl.host,
        uri: `${origin}/`,
        chain_id: 8453
      }),
      cache: 'no-store'
    });
    const payload = await res.json();
    return NextResponse.json(payload, { status: res.status });
  } catch (e) {
    console.error('wallet challenge route:', e);
    return NextResponse.json(
      { error: 'Wallet challenge unavailable' },
      { status: 502 }
    );
  }
}
