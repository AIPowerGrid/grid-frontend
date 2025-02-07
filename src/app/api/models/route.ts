import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const res = await fetch('https://api.aipowergrid.io/api/v2/status/models', {
      // Caching: revalidate this response every 60 seconds.
      next: { revalidate: 60 }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch models');
    }
    const models = await res.json();
    return NextResponse.json(models);
  } catch (err) {
    return NextResponse.error();
  }
}
