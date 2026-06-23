import PageContainer from '@/components/layout/page-container';
import { PageHeader } from '@/components/layout/page-header';
import { StatCard } from '@/components/ui/stat-card';
import { gridFetch, GridModelStatus, GridTotals } from '@/lib/grid-api';
import { Cpu, Boxes, Activity, Gauge } from 'lucide-react';
import React from 'react';

export default async function OverViewLayout({
  models,
  about_grid,
  quick_start
}: {
  models: React.ReactNode;
  about_grid: React.ReactNode;
  quick_start: React.ReactNode;
}) {
  // Server component: read the grid v1 API directly (ledger-backed stats —
  // the same numbers settlement pays on).
  let activeWorkers: number | string = '—';
  let modelsOnline: number | string = '—';
  let jobs24h: number | string = '—';
  let den24h: number | string = '—';
  try {
    const [workers, modelList, totals] = await Promise.all([
      gridFetch<{ count: number }>('/v1/workers'),
      gridFetch<GridModelStatus[]>('/v1/status/models'),
      gridFetch<GridTotals>('/v1/stats/totals')
    ]);
    activeWorkers = workers.count;
    modelsOnline = modelList.length;
    const day = totals.day ?? {};
    jobs24h = Object.values(day)
      .reduce((s, v) => s + (v.jobs ?? 0), 0)
      .toLocaleString();
    den24h = Math.round(
      Object.values(day).reduce((s, v) => s + (v.den ?? 0), 0)
    ).toLocaleString();
  } catch (e) {
    console.error('overview stats:', e);
  }

  return (
    <PageContainer>
      <div className='mx-auto w-full max-w-6xl space-y-6'>
        <PageHeader title='Dashboard' description='Your grid at a glance.' />

        {/* Uniform metric tiles */}
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <StatCard
            label='Active workers'
            value={activeWorkers}
            hint='GPUs serving the grid now'
            icon={Cpu}
          />
          <StatCard
            label='Models online'
            value={modelsOnline}
            hint='Distinct models ready to serve'
            icon={Boxes}
          />
          <StatCard
            label='Jobs (24h)'
            value={jobs24h}
            hint='Text, image & video completed'
            icon={Activity}
          />
          <StatCard
            label='den earned (24h)'
            value={den24h}
            hint='Work metered for settlement'
            icon={Gauge}
          />
        </div>

        {/* Equal-height two-column section */}
        <div className='grid items-stretch gap-4 lg:grid-cols-2'>
          {quick_start}
          {models}
        </div>

        {/* Orientation */}
        {about_grid}
      </div>
    </PageContainer>
  );
}
