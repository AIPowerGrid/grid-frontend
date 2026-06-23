import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { resolveGridKey, getSessionToken } from '@/lib/grid-account';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ keyId: string }> }
) {
  const token = await getSessionToken(req);
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const { keyId } = await params;
  if (!/^[a-f0-9]{4,64}$/.test(keyId)) {
    return NextResponse.json({ error: 'Bad key id' }, { status: 400 });
  }
  const res = await fetch(
    `${GRID_API_BASE}/v1/account/keys/${encodeURIComponent(keyId)}`,
    { method: 'DELETE', headers: { apikey: key } }
  );
  return NextResponse.json(await res.json(), { status: res.status });
}
