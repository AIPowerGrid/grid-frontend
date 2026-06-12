import { NextResponse } from 'next/server';
import { gridFetch, GridModelStatus } from '@/lib/grid-api';

export async function GET() {
  try {
    const models = await gridFetch<GridModelStatus[]>('/v1/status/models');
    return NextResponse.json(models);
  } catch (e) {
    console.error('models route:', e);
    return NextResponse.json([], { status: 200 });
  }
}
