import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const res = await fetch(
      'https://api.aipowergrid.io/api/v2/stats/img/models',
      {
        // Cache the response for 60 seconds.
        next: { revalidate: 60 }
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch image generation stats');
    }

    const data = await res.json();
    // Expected data format: { day: { [modelName]: number }, month: { [modelName]: number }, total: { [modelName]: number } }
    const modelNames = new Set<string>([
      ...Object.keys(data.day || {}),
      ...Object.keys(data.month || {}),
      ...Object.keys(data.total || {})
    ]);

    const models = Array.from(modelNames).map((name) => ({
      name,
      day: data.day?.[name] ?? 0,
      month: data.month?.[name] ?? 0,
      total: data.total?.[name] ?? 0
    }));

    // Sort models by total (descending).
    models.sort((a, b) => b.total - a.total);

    return NextResponse.json(models);
  } catch (error) {
    console.error('Error fetching image generation stats:', error);
    return NextResponse.error();
  }
}
