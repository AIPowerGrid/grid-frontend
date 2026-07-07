'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck } from 'lucide-react';

interface FeedJob {
  job_id: string;
  model: string;
  type: string;
  worker: string;
  den: number;
  output_units: number | null;
  duration_s: number;
  tokens_per_s: number | null;
  result_hash: string | null;
  signed: boolean;
  created: string | null;
}

/**
 * The live face of the grid: recent jobs straight from the settlement ledger.
 * Redacted by design — model, worker handle, speed, den, and a content hash
 * that proves the output without revealing it. Never prompts, never outputs,
 * never customer identity. Auto-refreshes.
 */
export default function LiveJobs() {
  const [jobs, setJobs] = useState<FeedJob[] | null>(null);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const res = await fetch('/api/jobs/recent', { cache: 'no-store' });
        if (res.ok && alive) setJobs((await res.json()).jobs ?? []);
      } catch {
        /* keep last */
      }
    };
    load();
    const t = setInterval(load, 30_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  if (!jobs?.length) return null;

  return (
    <section className='space-y-3'>
      <div className='flex items-baseline justify-between gap-3'>
        <h2 className='flex items-center gap-2 font-semibold'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
          </span>
          Live jobs
        </h2>
        <span className='text-xs text-muted-foreground'>
          from the settlement ledger — content stays private, the work is public
        </span>
      </div>
      <Card>
        <CardContent className='p-0'>
          <div className='overflow-x-auto'>
            <table className='w-full min-w-[640px] text-sm'>
              <thead>
                <tr className='border-b text-left text-xs uppercase tracking-wide text-muted-foreground'>
                  <th className='px-4 py-2.5 font-medium'>Time (UTC)</th>
                  <th className='px-4 py-2.5 font-medium'>Model</th>
                  <th className='px-4 py-2.5 font-medium'>Worker</th>
                  <th className='px-4 py-2.5 text-right font-medium'>t/s</th>
                  <th className='px-4 py-2.5 text-right font-medium'>den</th>
                  <th className='px-4 py-2.5 font-medium'>Proof</th>
                </tr>
              </thead>
              <tbody>
                {jobs.slice(0, 12).map((j) => (
                  <tr key={j.job_id} className='border-b last:border-0'>
                    <td className='whitespace-nowrap px-4 py-2 font-mono text-xs text-muted-foreground'>
                      {j.created ? j.created.slice(11, 19) : '—'}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 font-medium'>
                      {j.model}
                      {j.type !== 'text' && (
                        <span className='ml-1.5 text-xs text-primary'>
                          · {j.type}
                        </span>
                      )}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-muted-foreground'>
                      {j.worker}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-right tabular-nums text-muted-foreground'>
                      {j.tokens_per_s ?? '—'}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-right font-medium tabular-nums'>
                      {j.den.toLocaleString(undefined, {
                        maximumFractionDigits: 2
                      })}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      {j.signed && (
                        <Badge variant='default' className='mr-1.5 gap-1'>
                          <ShieldCheck className='h-3 w-3' /> signed
                        </Badge>
                      )}
                      {j.result_hash ? (
                        <span className='font-mono text-xs text-muted-foreground'>
                          {j.result_hash.slice(0, 10)}…
                        </span>
                      ) : (
                        <span className='text-xs text-muted-foreground'>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
