import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const res = await fetch(
      'https://api.aipowergrid.io/api/v2/stats/text/models',
      {
        next: { revalidate: 60 }
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch text generation stats');
    }

    const data = await res.json();
    // Expected data format: { day: { [modelName]: number }, month: { [modelName]: number }, total: { [modelName]: number } }

    // Collect unique model names from the different timeframe objects.
    const modelNames = new Set<string>([
      ...Object.keys(data.day || {}),
      ...Object.keys(data.month || {}),
      ...Object.keys(data.total || {})
    ]);

    // Map each model name to an object with stats.
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
    console.error('Error fetching text generation stats:', error);
    return NextResponse.error();
  }
}
