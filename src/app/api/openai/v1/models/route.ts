import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const baseAPIUrl = 'https://api.aipowergrid.io/api/v2/status/models';
    const url = new URL(request.url);
    const typeParam = url.searchParams.get('type'); // Optional: "image" or "text"
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
      // No valid type provided: fetch both image and text models and combine them.
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

    // Debug: log the raw models so you can inspect the returned fields.
    console.log('Raw models:', models);

    // Transform the models returned by the Grid API into the OpenAI models format.
    // Check possible fields for the model identifier.
    const transformedModels = models.map((model: any) => ({
      id: model.id || model.model || model.name || 'unknown-model',
      object: 'model',
      created: model.created
        ? Number(model.created)
        : Math.floor(Date.now() / 1000),
      owned_by: model.owned_by || model.owner || 'aipowergrid'
    }));

    const responsePayload = {
      object: 'list',
      data: transformedModels
    };

    return NextResponse.json(responsePayload);
  } catch (err) {
    console.error('Error in models route:', err);
    return NextResponse.error();
  }
}
