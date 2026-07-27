import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';

export async function GET(req: NextRequest) {
  const key = await resolveGridKey(await getSessionToken(req));
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const response = await fetch(`${GRID_API_BASE}/v1/account/deposits/config`, {
    headers: { apikey: key },
    cache: 'no-store'
  });
  return NextResponse.json(await response.json(), { status: response.status });
}
