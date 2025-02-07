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

    // Group by unique model names.
    const uniqueNames = new Set();
    models.forEach((model: { name?: string }) => {
      if (model.name) {
        uniqueNames.add(model.name);
      }
    });

    // The count is the number of unique model names.
    const count = uniqueNames.size;

    return NextResponse.json({ count });
  } catch (err) {
    return NextResponse.error();
  }
}
