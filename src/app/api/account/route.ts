import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { GRID_API_BASE } from '@/lib/grid-api';

/**
 * Grid account profile + key list for the signed-in user. The account's
 * dashboard-session key lives only in the httpOnly session JWT — these
 * proxy routes forward it server-side; it is never sent to the browser.
 */
export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET
  });
  const key = (token as any)?.gridApiKey as string | undefined;
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }
  const res = await fetch(`${GRID_API_BASE}/v1/account`, {
    headers: { apikey: key },
    cache: 'no-store'
  });
  return NextResponse.json(await res.json(), { status: res.status });
}
