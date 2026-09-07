// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { NextRequest, NextResponse } from 'next/server';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';
import { GRID_API_BASE } from '@/lib/grid-api';
import {
  compensationIdSchema,
  compensationPrepareSchema,
  compensationApproveSchema,
  compensationViewSchema,
  compensationErrorMessage
} from '@/lib/validator-compensation';

const headers = {
  'Cache-Control': 'no-store',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff'
};
const failure = (status: number) =>
  NextResponse.json(
    { error: compensationErrorMessage(status) },
    { status, headers }
  );

async function boundedJson(
  stream: ReadableStream<Uint8Array> | null,
  limit: number
) {
  if (!stream) throw new Error('Missing body');
  const reader = stream.getReader(),
    chunks: Uint8Array[] = [];
  let bytes = 0;
  let timedOut = false;
  const deadline = setTimeout(() => {
    timedOut = true;
    void reader.cancel().catch(() => undefined);
  }, 10_000);
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > limit) throw new Error('Body too large');
      chunks.push(value);
    }
    if (timedOut) throw new Error('Body timed out');
    return JSON.parse(
      new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks))
    ) as unknown;
  } finally {
    clearTimeout(deadline);
    await reader.cancel();
  }
}

export async function compensationProxy(
  req: NextRequest,
  requestId: string,
  action?: 'prepare' | 'approve'
) {
  if (!compensationIdSchema.safeParse(requestId).success) return failure(404);
  let body: unknown;
  if (action) {
    const origin = `${req.nextUrl.protocol}//${req.headers.get('host')}`;
    const site = req.headers.get('sec-fetch-site');
    if (
      req.headers.get('origin') !== origin ||
      (site && site !== 'same-origin')
    )
      return failure(403);
    if (
      req.headers.get('content-type')?.split(';')[0].trim() !==
        'application/json' ||
      ![null, 'identity'].includes(req.headers.get('content-encoding'))
    )
      return failure(415);
    try {
      const schema =
        action === 'prepare'
          ? compensationPrepareSchema
          : compensationApproveSchema;
      const parsed = schema.safeParse(
        await boundedJson(req.body, action === 'prepare' ? 256 : 20_000)
      );
      if (!parsed.success) return failure(400);
      body = parsed.data;
    } catch {
      return failure(400);
    }
  }
  try {
    const signal = AbortSignal.timeout(10_000);
    const key = await resolveGridKey(await getSessionToken(req), signal);
    if (signal.aborted) return failure(502);
    if (!key) return failure(401);
    const response = await fetch(
      `${GRID_API_BASE}/v1/account/validator-compensation/requests/${requestId}${action ? `/${action}` : ''}`,
      {
        method: action ? 'POST' : 'GET',
        headers: { apikey: key, 'Content-Type': 'application/json' },
        body: action ? JSON.stringify(body) : undefined,
        cache: 'no-store',
        redirect: 'error',
        signal
      }
    );
    if (!response.ok) {
      await response.body?.cancel();
      return failure(
        [400, 401, 403, 404, 409, 429, 503].includes(response.status)
          ? response.status
          : 502
      );
    }
    if (
      response.headers.get('content-type')?.split(';')[0].trim() !==
      'application/json'
    ) {
      await response.body?.cancel();
      return failure(502);
    }
    const result = compensationViewSchema.safeParse(
      await boundedJson(response.body, 20_000)
    );
    if (!result.success || result.data.request_id !== requestId)
      return failure(502);
    return NextResponse.json(result.data, { headers });
  } catch {
    return failure(502);
  }
}
