import { NextResponse } from 'next/server';
import { gridFetch, GridModelStatus } from '@/lib/grid-api';

export async function GET() {
  try {
    const models = await gridFetch<GridModelStatus[]>('/v1/status/models');
    return NextResponse.json({ count: models.length });
  } catch (e) {
    console.error('models-count route:', e);
    return NextResponse.json({ count: 0 });
  }
}
