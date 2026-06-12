import { NextResponse } from 'next/server';
import { gridFetch } from '@/lib/grid-api';

export async function GET() {
  try {
    const data = await gridFetch('/v1/models');
    return NextResponse.json(data);
  } catch (e) {
    console.error('openai models route:', e);
    return NextResponse.json({ object: 'list', data: [] });
  }
}
