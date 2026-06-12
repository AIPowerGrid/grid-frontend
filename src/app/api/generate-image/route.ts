import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';

/**
 * Passthrough to the grid's native OpenAI-compatible image endpoint
 * (/v1/images/generations) — jobs dispatch over the v2 WS worker protocol
 * with direct-to-R2 results; no more legacy poll loop here.
 */
export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization') ?? '';
  const apikey = request.headers.get('apikey') ?? '';
  const body = await request.text();

  const upstream = await fetch(`${GRID_API_BASE}/v1/images/generations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(auth ? { Authorization: auth } : {}),
      ...(apikey ? { apikey } : {})
    },
    body
  });

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('content-type') ?? 'application/json'
    }
  });
}
