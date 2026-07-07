'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Circle } from 'lucide-react';

interface Job {
  job_id: string;
  model: string;
  type: string;
  den: number;
  output_units: number | null;
  duration_s: number;
  ttft_s: number | null;
  result_hash: string | null;
  signed: boolean;
  epoch_id: string | null;
  created: string | null;
}
interface JobsResp {
  payout_wallet: string;
  total_den: number;
  jobs: Job[];
  note?: string;
}

/** Decode throughput (text only): output tokens / (duration − ttft). */
function tps(j: Job): string {
  if (j.type === 'text' && j.duration_s && j.output_units) {
    const decode = j.duration_s - (j.ttft_s ?? 0);
    if (decode > 0) return (j.output_units / decode).toFixed(0);
  }
  return '—';
}

/**
 * The operator's recent worker jobs — what my workers ran, the den each earned,
 * its content commitment, and whether the worker signed it. The granular layer
 * under "Payout history": these jobs roll up into the epoch payouts below.
 */
export default function RecentJobs() {
  const [data, setData] = useState<JobsResp | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/account/jobs?limit=25', {
          cache: 'no-store'
        });
        if (res.ok) setData(await res.json());
      } catch {
        /* leave null */
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return null;

  if (!data || !data.jobs?.length) {
    return (
      <Card>
        <CardContent className='p-5'>
          <h3 className='mb-1 font-semibold'>Recent jobs</h3>
          <p className='text-sm text-muted-foreground'>
            {data?.note ||
              'No jobs yet — work your workers complete shows here with the den it earned.'}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className='p-5'>
        <div className='mb-3 flex items-center justify-between gap-3'>
          <h3 className='font-semibold'>Recent jobs</h3>
          <span className='text-xs text-muted-foreground'>
            metadata + content commitment — never your prompts or outputs
          </span>
        </div>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time (UTC)</TableHead>
                <TableHead>Model</TableHead>
                <TableHead className='text-right'>Output</TableHead>
                <TableHead className='text-right'>t/s</TableHead>
                <TableHead className='text-right'>den</TableHead>
                <TableHead>Proof</TableHead>
                <TableHead>Settlement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.jobs.map((j) => (
                <TableRow key={j.job_id}>
                  <TableCell className='whitespace-nowrap font-mono text-xs text-muted-foreground'>
                    {j.created ? j.created.slice(11, 19) : '—'}
                  </TableCell>
                  <TableCell className='whitespace-nowrap font-medium'>
                    {j.model}
                    {j.type === 'video' && (
                      <span className='ml-1 text-xs text-primary'>· video</span>
                    )}
                  </TableCell>
                  <TableCell className='text-right tabular-nums'>
                    {j.output_units ?? '—'}
                  </TableCell>
                  <TableCell className='text-right tabular-nums text-muted-foreground'>
                    {tps(j)}
                  </TableCell>
                  <TableCell className='text-right font-medium tabular-nums'>
                    {j.den.toLocaleString(undefined, {
                      maximumFractionDigits: 2
                    })}
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    {j.signed ? (
                      <Badge variant='default' className='gap-1'>
                        <ShieldCheck className='h-3 w-3' /> signed
                      </Badge>
                    ) : (
                      <Badge
                        variant='outline'
                        className='gap-1 text-muted-foreground'
                      >
                        <Circle className='h-2.5 w-2.5' /> floor
                      </Badge>
                    )}
                    {j.result_hash && (
                      <span className='ml-2 font-mono text-xs text-muted-foreground'>
                        {j.result_hash.slice(0, 8)}…
                      </span>
                    )}
                  </TableCell>
                  <TableCell className='whitespace-nowrap text-xs'>
                    {j.epoch_id ? (
                      <span className='font-mono text-muted-foreground'>
                        ep {j.epoch_id}
                      </span>
                    ) : (
                      <span className='text-amber-500'>pending</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className='mt-3 text-xs text-muted-foreground'>
          <span className='font-medium text-foreground'>signed</span> = your
          worker cryptographically attested the output ·{' '}
          <span className='font-medium text-foreground'>floor</span> = unsigned
          (still earns) · the hash proves the output without revealing it.
        </p>
      </CardContent>
    </Card>
  );
}
