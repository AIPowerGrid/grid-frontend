import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';

const ADDRESS_RE = /^0x[0-9a-fA-F]{40}$/;

export async function POST(req: NextRequest) {
  const token = await getSessionToken(req);
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const body = await req.json().catch(() => null);
  if (
    !body ||
    typeof body.message !== 'string' ||
    body.message.length > 512 ||
    typeof body.signature !== 'string' ||
    body.signature.length > 512 ||
    typeof body.address !== 'string' ||
    !ADDRESS_RE.test(body.address)
  ) {
    return NextResponse.json(
      { error: 'Invalid wallet proof' },
      { status: 400 }
    );
  }

  const res = await fetch(
    `${GRID_API_BASE}/v1/account/identities/wallet/link`,
    {
      method: 'POST',
      headers: { apikey: key, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: body.message,
        signature: body.signature,
        address: body.address
      }),
      cache: 'no-store'
    }
  );
  return NextResponse.json(await res.json(), { status: res.status });
}
