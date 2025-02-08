import PageContainer from '@/components/layout/page-container';
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
  // Use an environment variable (server-only) for the absolute base URL.
  // Set NEXTAUTH_URL in your environment variables (e.g. in .env.production and .env.local for dev)
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

  // Build absolute URLs for internal API calls using the incoming baseUrl.
  const workersResponse = await fetch(
    new URL('/api/workers-count', baseUrl).toString(),
    { next: { revalidate: 60 } }
  );
  let totalWorkers: number | string = 'N/A';
  if (workersResponse.ok) {
    const workersData = await workersResponse.json();
    // Expecting an array of objects in the form: { name, count }
    totalWorkers = workersData.reduce(
      (sum: number, model: { count: number }) => sum + model.count,
      0
    );
  }

  // Build absolute URLs for internal API calls using the incoming baseUrl.
  const modelsResponse = await fetch(
    new URL('/api/models-count', baseUrl).toString(),
    { next: { revalidate: 60 } }
  );
  let liveModelCount: number | string = 'N/A';
  if (modelsResponse.ok) {
    const data = await modelsResponse.json();
    liveModelCount = data.count;
  }

  // Build absolute URLs for internal API calls using the incoming baseUrl.
  const statsResponse = await fetch(
    new URL('/api/historical-stats?timeframe=total', baseUrl).toString(),
    { next: { revalidate: 60 } }
  );
  let totalImageGenModels: number | string = 'N/A';
  let totalTextGenModels: number | string = 'N/A';
  if (statsResponse.ok) {
    const stats = await statsResponse.json();
    totalImageGenModels = stats.image;
    totalTextGenModels = stats.text;
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
                Total Workers
              </CardTitle>
              <Icons.user className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{totalWorkers}</div>
              <p className='text-xs text-muted-foreground'>
                Systems actively processing tasks
              </p>
            </CardContent>
          </Card>

          {/* Total Models */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Models
              </CardTitle>
              <Icons.kanban className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{liveModelCount}</div>
              <p className='text-xs text-muted-foreground'>
                Distinct models powering operations
              </p>
            </CardContent>
          </Card>

          {/* Images Generated */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Images Generated
              </CardTitle>
              <Icons.media className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{totalImageGenModels}</div>
              <p className='text-xs text-muted-foreground'>
                Visual outputs crafted on demand
              </p>
            </CardContent>
          </Card>

          {/* Text Generated */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Text Generated
              </CardTitle>
              <Icons.post className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{totalTextGenModels}</div>
              <p className='text-xs text-muted-foreground'>
                Linguistic creations served live
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
