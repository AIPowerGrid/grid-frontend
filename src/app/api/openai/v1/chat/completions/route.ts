import { NextRequest, NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';

/**
 * Thin passthrough to the grid's native OpenAI-compatible endpoint —
 * streaming included. The old version reimplemented the legacy poll loop;
 * the v1 API speaks OpenAI natively so we just forward.
 */
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

  // Stream SSE straight through; JSON responses pass through identically.
  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type':
        upstream.headers.get('content-type') ?? 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
}
