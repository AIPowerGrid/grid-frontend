import { NextResponse } from 'next/server';
import { gridFetch } from '@/lib/grid-api';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params;
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return NextResponse.json({ error: 'Invalid address' }, { status: 400 });
  }
  try {
    const earnings = await gridFetch(`/v1/wallets/${address}/earnings`, {
      next: { revalidate: 30 }
    });
    return NextResponse.json(earnings);
  } catch (e) {
    console.error('wallet earnings route:', e);
    return NextResponse.json(
      { error: 'Earnings unavailable' },
      { status: 502 }
    );
  }
}
