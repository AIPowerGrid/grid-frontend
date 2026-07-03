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

/** Aggregate validator evidence scorecards.
 *
 * This proxies grid /v1/validator/scorecards with the signed-in account's v2
 * key. V0 scorecards are informational only and have no routing/reward/slash
 * effect.
 */
export async function GET(req: NextRequest) {
  const token = await getSessionToken(req);
  const key = await resolveGridKey(token);
  if (!key) {
    return NextResponse.json({ error: 'No grid account' }, { status: 404 });
  }

  const url = new URL(req.url);
  const limit = boundedInt(url.searchParams.get('limit'), 100, 1, 500);
  const sinceHours = boundedInt(
    url.searchParams.get('since_hours'),
    168,
    1,
    24 * 90
  );
  const upstream = new URL('/v1/validator/scorecards', GRID_API_BASE);
  upstream.searchParams.set('limit', String(limit));
  upstream.searchParams.set('since_hours', String(sinceHours));

  const workerId = url.searchParams.get('worker_id');
  const model = url.searchParams.get('model');
  const authority = url.searchParams.get('authority');
  if (workerId) upstream.searchParams.set('worker_id', workerId.slice(0, 64));
  if (model) upstream.searchParams.set('model', model.slice(0, 255));
  if (
    authority === 'all' ||
    authority === 'preview' ||
    authority === 'authoritative'
  ) {
    upstream.searchParams.set('authority', authority);
  }

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
