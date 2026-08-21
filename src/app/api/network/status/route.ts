import { NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';

export const dynamic = 'force-dynamic';

/** Public privacy-safe network status. Core already removes identities and
 * evidence; this proxy preserves the response and keeps one browser origin. */
export async function GET() {
  try {
    const res = await fetch(`${GRID_API_BASE}/v1/status/network`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000)
    });
    const body = await res.json();
    return NextResponse.json(body, {
      status: res.status,
      headers: { 'Cache-Control': 'no-store' }
    });
  } catch {
    return NextResponse.json(
      { error: 'Network status is temporarily unavailable.' },
      { status: 502, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
