import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';

export const dynamic = 'force-dynamic';

function boundedInt(
  value: string | null,
  fallback: number,
  min: number,
  max: number
) {
  const parsed = Number.parseInt(value ?? '', 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

async function jsonOrError(res: Response) {
  const contentType = res.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    return res.json();
  }
  const text = await res.text();
  return { error: text || `Grid API returned ${res.status}` };
}

/** Assignment and quorum health for validator evidence. */
export async function GET(req: NextRequest) {
  const token = await getSessionToken(req);
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }

  const url = new URL(req.url);
  const limit = boundedInt(url.searchParams.get('limit'), 25, 1, 100);
  const upstream = new URL('/v1/validator/assignments/health', GRID_API_BASE);
  upstream.searchParams.set('limit', String(limit));

  try {
    const res = await fetch(upstream, {
      headers: { apikey: key },
      cache: 'no-store'
    });
    return NextResponse.json(await jsonOrError(res), { status: res.status });
  } catch {
    return NextResponse.json({ error: 'unavailable' }, { status: 502 });
  }
}
