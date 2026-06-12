import { NextResponse } from 'next/server';
import { gridFetch, GridTotals } from '@/lib/grid-api';

// v1 aggregates the settlement ledger by day/month/total. The old
// minute/hour windows collapse to day.
const PERIOD_MAP: Record<string, string> = {
  minute: 'day',
  hour: 'day',
  day: 'day',
  month: 'month',
  total: 'total'
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = PERIOD_MAP[searchParams.get('timeframe') ?? 'day'] ?? 'day';

  try {
    const totals = await gridFetch<GridTotals>('/v1/stats/totals');
    const t = totals[period] ?? {};
    return NextResponse.json({
      text: t.text?.jobs ?? 0,
      image: t.image?.jobs ?? 0,
      video: t.video?.jobs ?? 0,
      den: Object.values(t).reduce((sum, v) => sum + (v.den ?? 0), 0)
    });
  } catch (e) {
    console.error('historical-stats route:', e);
    return NextResponse.json({ text: 0, image: 0, video: 0, den: 0 });
  }
}
