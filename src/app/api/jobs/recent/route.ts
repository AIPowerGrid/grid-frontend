import { NextResponse } from 'next/server';
import { GRID_API_BASE } from '@/lib/grid-api';

/** Public redacted job feed (proxies grid /v1/jobs/recent). No auth, no
 * prompts/outputs — just model, worker handle, timing, den, and the content
 * commitment. Feeds the transparency page's live ticker. */
export async function GET() {
  try {
    const res = await fetch(`${GRID_API_BASE}/v1/jobs/recent?limit=30`, {
      cache: 'no-store'
    });
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json({ jobs: [] }, { status: 502 });
  }
}
