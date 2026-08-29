// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';
import { GRID_API_BASE } from '@/lib/grid-api';
import { oauthErrorMessage } from '@/lib/oauth-authorization';

export const privateHeaders = {
  'Cache-Control': 'no-store',
  Pragma: 'no-cache',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff'
};

export function oauthError(status: number) {
  return NextResponse.json(
    { error: oauthErrorMessage(status) },
    { status, headers: privateHeaders }
  );
}

async function boundedJson(
  stream: ReadableStream<Uint8Array> | null,
  limit: number
): Promise<unknown> {
  if (!stream) throw new Error('Missing JSON body');
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) throw new Error('JSON body too large');
      chunks.push(value);
    }
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } finally {
    await reader.cancel();
  }
}

export async function oauthForm<T>(req: NextRequest, schema: z.ZodType<T>) {
  const site = req.headers.get('sec-fetch-site');
  const host = req.headers.get('host');
  if (!host) return { error: oauthError(403) } as const;
  const origin = `${req.nextUrl.protocol}//${host}`;
  if (
    req.headers.get('origin') !== origin ||
    (site && site !== 'same-origin')
  ) {
    return { error: oauthError(403) } as const;
  }
  if (
    req.headers.get('content-type')?.split(';')[0].trim() !== 'application/json'
  ) {
    return { error: oauthError(415) } as const;
  }
  try {
    const parsed = schema.safeParse(await boundedJson(req.body, 512));
    if (!parsed.success) return { error: oauthError(400) } as const;
    return { data: parsed.data } as const;
  } catch {
    return { error: oauthError(400) } as const;
  }
}

export async function callOAuth<T>(
  req: NextRequest,
  path: string,
  schema: z.ZodType<T>,
  body: unknown
) {
  try {
    const serviceKey = process.env.GRID_SERVICE_API_KEY;
    if (!serviceKey) return oauthError(503);
    const signal = AbortSignal.timeout(10_000);
    const userToken = await resolveGridKey(await getSessionToken(req), signal);
    if (signal.aborted) return oauthError(502);
    if (!userToken) return oauthError(401);
    const response = await fetch(`${GRID_API_BASE}${path}`, {
      method: 'POST',
      headers: {
        apikey: serviceKey,
        'X-Grid-User-Token': userToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      cache: 'no-store',
      redirect: 'error',
      signal
    });
    if (!response.ok) {
      await response.body?.cancel();
      const status = [
        400, 401, 403, 404, 409, 410, 413, 415, 429, 503
      ].includes(response.status)
        ? response.status
        : 502;
      return oauthError(status);
    }
    const parsed = schema.safeParse(await boundedJson(response.body, 32_768));
    if (!parsed.success) return oauthError(502);
    return NextResponse.json(parsed.data, { headers: privateHeaders });
  } catch {
    return oauthError(502);
  }
}
