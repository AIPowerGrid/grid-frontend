import { NextResponse } from 'next/server';
import { gridFetch } from '@/lib/grid-api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') ?? 'month';
  try {
    const data = await gridFetch<{ models: any[] }>(
      `/v1/stats/models?period=${encodeURIComponent(period)}`
    );
    return NextResponse.json(
      data.models.filter((m) => m.type === 'image' || m.type === 'video')
    );
  } catch (e) {
    console.error('image-gen-stats route:', e);
    return NextResponse.json([]);
  }
}
