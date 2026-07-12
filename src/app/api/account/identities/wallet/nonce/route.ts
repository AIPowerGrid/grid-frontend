import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';

export async function POST(req: NextRequest) {
  const token = await getSessionToken(req);
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }

  const [accountRes, nonceRes] = await Promise.all([
    fetch(`${GRID_API_BASE}/v1/account`, {
      headers: { apikey: key },
      cache: 'no-store'
    }),
    fetch(`${GRID_API_BASE}/v1/accounts/wallet/nonce`, {
      method: 'POST',
      cache: 'no-store'
    })
  ]);
  if (!accountRes.ok) {
    return NextResponse.json(await accountRes.json(), {
      status: accountRes.status
    });
  }
  if (!nonceRes.ok) {
    return NextResponse.json(await nonceRes.json(), {
      status: nonceRes.status
    });
  }
  const account = await accountRes.json();
  const nonce = await nonceRes.json();
  return NextResponse.json({
    account_id: account.account_id,
    nonce: nonce.nonce
  });
}
