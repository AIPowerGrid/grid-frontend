import { NextResponse } from 'next/server';
import { gridFetch } from '@/lib/grid-api';

export async function GET() {
  try {
    const data = await gridFetch<{ count: number }>('/v1/workers');
    return NextResponse.json({ count: data.count });
  } catch (e) {
    console.error('workers-count route:', e);
    return NextResponse.json({ count: 0 });
  }
}
