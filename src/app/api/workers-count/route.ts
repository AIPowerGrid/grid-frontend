import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const baseAPIUrl = 'https://api.aipowergrid.io/api/v2/status/models';
    const { searchParams } = new URL(request.url);
    const typeParam = searchParams.get('type'); // Expected values: "image" or "text"
    let models: any[] = [];

    if (typeParam === 'image' || typeParam === 'text') {
      // Fetch models only for the specified type.
      const res = await fetch(`${baseAPIUrl}?type=${typeParam}`, {
        // Caching: revalidate this response every 60 seconds.
        next: { revalidate: 60 }
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch models for type=${typeParam}`);
      }
      models = await res.json();
    } else {
      // No valid type provided, so fetch both image and text models and combine them.
      const [imageRes, textRes] = await Promise.all([
        fetch(`${baseAPIUrl}?type=image`, { next: { revalidate: 60 } }),
        fetch(`${baseAPIUrl}?type=text`, { next: { revalidate: 60 } })
      ]);

      if (!imageRes.ok || !textRes.ok) {
        throw new Error('Failed to fetch models for image/text types');
      }

      const imageModels = await imageRes.json();
      const textModels = await textRes.json();
      models = [...imageModels, ...textModels];
    }

    // Aggregate worker counts by model name.
    const workersByModel = models.reduce(
      (
        acc: Record<string, number>,
        model: { name?: string; count?: number }
      ) => {
        if (model.name && typeof model.count === 'number') {
          acc[model.name] = (acc[model.name] || 0) + model.count;
        }
        return acc;
      },
      {}
    );

    // Convert the aggregated data into an array.
    const aggregatedWorkers = Object.entries(workersByModel).map(
      ([name, count]) => ({
        name,
        count
      })
    );

    return NextResponse.json(aggregatedWorkers);
  } catch (err) {
    return NextResponse.error();
  }
}
