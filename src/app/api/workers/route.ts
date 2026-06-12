import { NextResponse } from 'next/server';
import { gridFetch, GridWorker } from '@/lib/grid-api';

export async function GET() {
  try {
    const data = await gridFetch<{ count: number; workers: GridWorker[] }>(
      '/v1/workers'
    );
    // Shape expected by the workers list view; fields the v1 registry
    // doesn't track yet render as placeholders.
    const workers = data.workers.map((w) => ({
      id: w.id,
      name: w.name,
      type: w.job_types.join(' / '),
      online: w.online,
      performance: null,
      requests_fulfilled: 0,
      uptime: null,
      bridge_agent: '',
      models: w.models
    }));
    return NextResponse.json(workers);
  } catch (e) {
    console.error('workers route:', e);
    return NextResponse.json([], { status: 200 });
  }
}
