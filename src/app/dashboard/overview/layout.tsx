import PageContainer from '@/components/layout/page-container';
import { gridFetch, GridModelStatus, GridTotals } from '@/lib/grid-api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { Icons } from '@/components/icons';

export default async function OverViewLayout({
  models,
  pie_stats,
  about_grid,
  quick_start
  // bar_stats,
  // area_stats
}: {
  models: React.ReactNode;
  pie_stats: React.ReactNode;
  about_grid: React.ReactNode;
  quick_start: React.ReactNode;
  // bar_stats: React.ReactNode;
  // area_stats: React.ReactNode;
}) {
  // Server component: read the grid v1 API directly (ledger-backed stats —
  // the same numbers settlement pays on). No self-HTTP hop, no hardcoded
  // dashboard origin.
  let activeWorkers: number | string = '—';
  let modelsOnline: number | string = '—';
  let jobs24h: number | string = '—';
  let den24h: number | string = '—';
  try {
    const [workers, models, totals] = await Promise.all([
      gridFetch<{ count: number }>('/v1/workers'),
      gridFetch<GridModelStatus[]>('/v1/status/models'),
      gridFetch<GridTotals>('/v1/stats/totals')
    ]);
    activeWorkers = workers.count;
    modelsOnline = models.length;
    const day = totals.day ?? {};
    jobs24h = Object.values(day).reduce((s, v) => s + (v.jobs ?? 0), 0);
    den24h = Math.round(
      Object.values(day).reduce((s, v) => s + (v.den ?? 0), 0)
    ).toLocaleString();
  } catch (e) {
    console.error('overview stats:', e);
  }

  return (
    <PageContainer>
      <div className='flex flex-1 flex-col space-y-2'>
        {/* Top row of statistics */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {/* Total Workers */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Active Workers
              </CardTitle>
              <Icons.user className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{activeWorkers}</div>
              <p className='text-xs text-muted-foreground'>
                GPUs serving the grid right now
              </p>
            </CardContent>
          </Card>

          {/* Total Models */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Models Online
              </CardTitle>
              <Icons.kanban className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{modelsOnline}</div>
              <p className='text-xs text-muted-foreground'>
                Distinct models ready to serve
              </p>
            </CardContent>
          </Card>

          {/* Images Generated */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Jobs (24h)</CardTitle>
              <Icons.media className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{jobs24h}</div>
              <p className='text-xs text-muted-foreground'>
                Completed across text, image & video
              </p>
            </CardContent>
          </Card>

          {/* Text Generated */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                den Earned (24h)
              </CardTitle>
              <Icons.post className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{den24h}</div>
              <p className='text-xs text-muted-foreground'>
                Work metered for on-chain settlement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Platform metrics — wired up as the data sources come online */}
        <div className='grid gap-4 md:grid-cols-3'>
          <Card className='border-dashed'>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                Usage by Key
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-xs text-muted-foreground'>
                Per-key request and den breakdown — coming online with per-key
                metering.
              </p>
            </CardContent>
          </Card>
          <Card className='border-dashed'>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                Latency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-xs text-muted-foreground'>
                p50 / p95 time-to-first-token per model — coming online with
                worker telemetry.
              </p>
            </CardContent>
          </Card>
          <Card className='border-dashed'>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                Spend &amp; Settlement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-xs text-muted-foreground'>
                AIPG spend and epoch payout history — lights up when the first
                settlement epoch lands on Base.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Existing additional content */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          {/* <div className="col-span-4">{bar_stats}</div> */}
          <div className='col-span-4 md:col-span-4'>{about_grid}</div>
          <div className='col-span-4 md:col-span-3'>{pie_stats}</div>
          {/* <div className="col-span-4">{area_stats}</div> */}
          <div className='col-span-4 md:col-span-4'>{quick_start}</div>
          <div className='col-span-4 md:col-span-3'>{models}</div>
        </div>
      </div>
    </PageContainer>
  );
}
