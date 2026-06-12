import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';

/** Passthrough to /v1/chat/completions (streaming included). */
export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization') ?? '';
  const apikey = request.headers.get('apikey') ?? '';
  const body = await request.text();

  const upstream = await fetch(`${GRID_API_BASE}/v1/chat/completions`, {
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
      'Content-Type':
        upstream.headers.get('content-type') ?? 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
}
