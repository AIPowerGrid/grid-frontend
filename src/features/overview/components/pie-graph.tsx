'use client';

import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

type GenerationStats = {
  text: number;
  image: number;
};

const chartConfig = {
  requests: {
    label: 'Requests'
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))'
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))'
  }
} satisfies ChartConfig;

export function PieGraph() {
  // State to hold the fetched generation stats.
  const [stats, setStats] = React.useState<GenerationStats | null>(null);
  // Loading state to control spinner and button disability.
  const [loading, setLoading] = React.useState<boolean>(false);
  // The currently selected timeframe.
  const [timeframe, setTimeframe] = React.useState<
    'minute' | 'hour' | 'day' | 'month' | 'total'
  >('day');

  const timeframes: Array<'minute' | 'hour' | 'day' | 'month' | 'total'> = [
    'minute',
    'hour',
    'day',
    'month',
    'total'
  ];

  // Fetch generation stats from the backend when the timeframe changes.
  React.useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        // Use the updated historical-stats endpoint.
        const res = await fetch(`/api/historical-stats?timeframe=${timeframe}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch generation stats for ${timeframe}`);
        }
        const data: GenerationStats = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching generation stats:', error);
        setStats({ text: 0, image: 0 });
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, [timeframe]);

  // Prepare chart data from the fetched stats.
  const chartData = React.useMemo(() => {
    return [
      {
        type: 'Text Generation',
        requests: stats ? stats.text : 0,
        fill: 'var(--color-firefox)'
      },
      {
        type: 'Image Generation',
        requests: stats ? stats.image : 0,
        fill: 'var(--color-edge)'
      }
    ];
  }, [stats]);

  // Calculate total requests.
  const totalRequests = React.useMemo(() => {
    return stats ? stats.text + stats.image : 0;
  }, [stats]);

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Generation Type and Requests</CardTitle>
        {/* <CardDescription>
          Results for <span className="font-semibold">{timeframe}</span> timeframe
        </CardDescription> */}
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        {loading ? (
          <div className='flex h-full items-center justify-center'>
            <Loader2 className='h-6 w-6 animate-spin' />
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className='mx-auto aspect-square max-h-[360px]'
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey='requests'
                nameKey='type'
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor='middle'
                          dominantBaseline='middle'
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className='fill-foreground text-3xl font-bold'
                          >
                            {totalRequests.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) + 24}
                            className='fill-muted-foreground'
                          >
                            Requests
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex justify-center space-x-2'>
          {timeframes.map((tf) => (
            <Button
              key={tf}
              variant={timeframe === tf ? 'default' : 'outline'}
              size='sm'
              onClick={() => setTimeframe(tf)}
              disabled={loading}
            >
              {tf.charAt(0).toUpperCase() + tf.slice(1)}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
