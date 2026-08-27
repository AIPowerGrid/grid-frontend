// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';
import { GRID_API_BASE } from '@/lib/grid-api';
import { pairingErrorMessage } from '@/lib/validator-pairing';

const privateHeaders = {
  'Cache-Control': 'no-store',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff'
};

export function pairingError(status: number) {
  return NextResponse.json(
    { error: pairingErrorMessage(status) },
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

export async function pairingForm<T>(req: NextRequest, schema: z.ZodType<T>) {
  // Cookie-authenticated writes require a same-origin JSON fetch, not a form
  // submission or a caller-controlled forwarding header.
  const site = req.headers.get('sec-fetch-site');
  // NextURL normalizes loopback IPs to localhost. The actual Host remains the
  // browser's authority; do not weaken this to a same-site/forwarded-host check.
  const origin = `${req.nextUrl.protocol}//${req.headers.get('host')}`;
  if (
    req.headers.get('origin') !== origin ||
    (site && site !== 'same-origin')
  ) {
    return { error: pairingError(403) } as const;
  }
  if (
    req.headers.get('content-type')?.split(';')[0].trim() !== 'application/json'
  ) {
    return { error: pairingError(415) } as const;
  }
  try {
    const parsed = schema.safeParse(await boundedJson(req.body, 256));
    if (!parsed.success) return { error: pairingError(400) } as const;
    return { data: parsed.data } as const;
  } catch {
    return { error: pairingError(400) } as const;
  }
}

export async function callPairing<T>(
  req: NextRequest,
  path: string,
  schema: z.ZodType<T>,
  body?: unknown
) {
  try {
    const signal = AbortSignal.timeout(10_000);
    const key = await resolveGridKey(await getSessionToken(req), signal);
    if (signal.aborted) return pairingError(502);
    if (!key) return pairingError(401);
    const response = await fetch(`${GRID_API_BASE}${path}`, {
      method: body === undefined ? 'GET' : 'POST',
      headers: { apikey: key, 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
      cache: 'no-store',
      redirect: 'error',
      signal
    });
    if (!response.ok) {
      await response.body?.cancel();
      const status = [401, 403, 404, 409, 429, 503].includes(response.status)
        ? response.status
        : 502;
      return pairingError(status);
    }
    const parsed = schema.safeParse(await boundedJson(response.body, 65_536));
    if (!parsed.success) return pairingError(502);
    return NextResponse.json(parsed.data, { headers: privateHeaders });
  } catch {
    // Never send upstream error bodies, tokens, or signing payloads to the UI.
    return pairingError(502);
  }
}
