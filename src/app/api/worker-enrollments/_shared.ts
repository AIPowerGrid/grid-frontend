import { NextRequest, NextResponse } from 'next/server';
import { getSessionToken, resolveGridKey } from '@/lib/grid-account';
import { GRID_API_BASE } from '@/lib/grid-api';

export const ENROLLMENT_ID_RE = /^[A-Za-z0-9_-]{20,80}$/;

export function badEnrollmentId() {
  return NextResponse.json({ error: 'Invalid enrollment id' }, { status: 400 });
}

export async function gridUserKey(req: NextRequest) {
  return resolveGridKey(await getSessionToken(req));
}

export async function proxyEnrollmentResponse(response: Response) {
  const text = await response.text();
  const headers = new Headers({ 'Cache-Control': 'no-store' });
  const contentType = response.headers.get('content-type');
  if (contentType) headers.set('Content-Type', contentType);
  return new NextResponse(text, { status: response.status, headers });
}

export async function callEnrollment(
  url: string,
  init: RequestInit = {}
): Promise<Response> {
  try {
    return await fetch(url, {
      ...init,
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000)
    });
  } catch {
    return NextResponse.json(
      { error: 'The Grid is temporarily unavailable' },
      { status: 502, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}

export function enrollmentUrl(enrollmentId: string, suffix = '') {
  return `${GRID_API_BASE}/v1/workers/enrollments/${encodeURIComponent(enrollmentId)}${suffix}`;
}
