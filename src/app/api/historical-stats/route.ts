import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Extract and validate the timeframe query parameter.
  const { searchParams } = new URL(request.url);
  let timeframe = searchParams.get('timeframe') || 'day';
  const allowedTimeframes = new Set([
    'minute',
    'hour',
    'day',
    'month',
    'total'
  ]);
  if (!allowedTimeframes.has(timeframe)) {
    timeframe = 'day';
  }

  try {
    // Fetch text and image totals endpoints in parallel with 60-second cache revalidation.
    const [textRes, imageRes] = await Promise.all([
      fetch('https://api.aipowergrid.io/api/v2/stats/text/totals', {
        next: { revalidate: 60 }
      }),
      fetch('https://api.aipowergrid.io/api/v2/stats/img/totals', {
        next: { revalidate: 60 }
      })
    ]);

    if (!textRes.ok) throw new Error('Failed to fetch text generation stats');
    if (!imageRes.ok) throw new Error('Failed to fetch image generation stats');

    const textData = await textRes.json();
    const imageData = await imageRes.json();

    // Expected data shapes:
    // Text: { minute: { requests: number, tokens: number }, hour: { ... }, ... }
    // Image: { minute: { images: number, ps: number }, hour: { ... }, ... }
    const textStatsForTimeframe = textData[timeframe] || {};
    const imageStatsForTimeframe = imageData[timeframe] || {};

    // Extract specific counts: use 'requests' for text and 'images' for image generation.
    const textCount = textStatsForTimeframe.requests || 0;
    const imageCount = imageStatsForTimeframe.images || 0;

    return NextResponse.json({ text: textCount, image: imageCount });
  } catch (error) {
    console.error('Error fetching generation stats:', error);
    return NextResponse.error();
  }
}
