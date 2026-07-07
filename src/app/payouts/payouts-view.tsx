'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StatCard } from '@/components/ui/stat-card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import LiveJobs from './live-jobs';
import {
  Coins,
  Users,
  ReceiptText,
  Clock,
  ExternalLink,
  Cpu,
  Wallet,
  ArrowRight
} from 'lucide-react';

const BASESCAN = 'https://basescan.org';
const DOCS = 'https://docs.aipowergrid.io';

interface Totals {
  aipg_paid: number;
  payouts: number;
  workers_paid: number;
  periods: number;
  last_paid: string | null;
}
interface PeriodRow {
  period_id: string;
  aipg: number;
  payouts: number;
  at: string | null;
}
interface PayoutRow {
  period_id: string;
  aipg: number;
  address: string | null;
  tx_hash: string | null;
  at: string | null;
}
interface Data {
  totals: Totals;
  periods: PeriodRow[];
  recent: PayoutRow[];
}

const fmtAipg = (n: number) =>
  n.toLocaleString(undefined, { maximumFractionDigits: 2 });

function periodLabel(id: string): string {
  const m = id.match(/^hour-(\d{4})-(\d{2})-(\d{2})T(\d{2})$/);
  if (m) {
    const [, y, mo, d, h] = m;
    return (
      new Date(Date.UTC(+y, +mo - 1, +d, +h)).toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
      }) + ' UTC'
    );
  }
  return id;
}

const short = (a: string) => `${a.slice(0, 6)}…${a.slice(-4)}`;
const when = (s: string | null) => (s ? new Date(s).toLocaleString() : '—');

export default function PayoutsView({
  embedded = false
}: {
  embedded?: boolean;
}) {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/payouts/public', { cache: 'no-store' });
        if (!res.ok) throw new Error();
        setData(await res.json());
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div
      className={embedded ? 'space-y-5' : 'mx-auto w-full max-w-5xl space-y-8'}
    >
      {embedded ? (
        <div>
          <h2 className='text-lg font-semibold'>Network payouts</h2>
          <p className='text-sm text-muted-foreground'>
            All AIPG paid across the grid — on-chain, verifiable on BaseScan.
          </p>
        </div>
      ) : (
        <header className='space-y-2'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Worker Payouts
          </h1>
          <p className='text-sm text-muted-foreground'>
            Every AIPG paid to grid workers is an on-chain transfer on Base.
            This is the public ledger — verify any row on BaseScan.
          </p>
        </header>
      )}

      {!embedded && (
        <Card className='border-primary/20 bg-primary/5'>
          <CardContent className='flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between'>
            <div className='space-y-1'>
              <h2 className='flex items-center gap-2 font-semibold'>
                <Cpu className='h-4 w-4 text-primary' />
                Want to earn AIPG? Run a worker.
              </h2>
              <p className='text-sm text-muted-foreground'>
                Point a GPU at the grid, set a Base payout wallet, and your
                earnings appear here — paid out hourly, on-chain.
              </p>
            </div>
            <div className='flex shrink-0 flex-wrap gap-2'>
              <Button asChild>
                <a
                  href={`${DOCS}/quick-start`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Run a worker
                  <ArrowRight className='ml-1.5 h-4 w-4' />
                </a>
              </Button>
              <Button asChild variant='outline'>
                <a href='/dashboard/settings'>
                  <Wallet className='mr-1.5 h-4 w-4' />
                  Set payout wallet
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {!embedded && <LiveJobs />}

      {loading && (
        <div className='space-y-6'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className='h-28' />
            ))}
          </div>
          <Skeleton className='h-64' />
        </div>
      )}

      {error && !loading && (
        <Card>
          <CardContent className='p-6 text-sm text-muted-foreground'>
            Payout data is temporarily unavailable. Please try again shortly.
          </CardContent>
        </Card>
      )}

      {data && (
        <>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <StatCard
              label='Total AIPG paid'
              value={fmtAipg(data.totals.aipg_paid)}
              hint='to workers, on-chain'
              icon={Coins}
            />
            <StatCard
              label='Workers paid'
              value={data.totals.workers_paid.toLocaleString()}
              icon={Users}
            />
            <StatCard
              label='Payouts'
              value={data.totals.payouts.toLocaleString()}
              hint={`across ${data.totals.periods} periods`}
              icon={ReceiptText}
            />
            <StatCard
              label='Last payout'
              value={
                data.totals.last_paid
                  ? new Date(data.totals.last_paid).toLocaleDateString(
                      undefined,
                      {
                        month: 'short',
                        day: 'numeric'
                      }
                    )
                  : '—'
              }
              hint={
                data.totals.last_paid ? when(data.totals.last_paid) : undefined
              }
              icon={Clock}
            />
          </div>

          <Card>
            <CardContent className='p-5'>
              <h2 className='mb-3 font-semibold'>Recent payouts</h2>
              <div className='overflow-x-auto'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead className='text-right'>AIPG</TableHead>
                      <TableHead>Worker</TableHead>
                      <TableHead>Tx</TableHead>
                      <TableHead>When</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.recent.map((r, i) => (
                      <TableRow key={i}>
                        <TableCell className='whitespace-nowrap'>
                          {periodLabel(r.period_id)}
                        </TableCell>
                        <TableCell className='text-right tabular-nums'>
                          {fmtAipg(r.aipg)}
                        </TableCell>
                        <TableCell>
                          {r.address ? (
                            <a
                              href={`${BASESCAN}/address/${r.address}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='font-mono text-xs text-muted-foreground hover:text-foreground'
                            >
                              {short(r.address)}
                            </a>
                          ) : (
                            '—'
                          )}
                        </TableCell>
                        <TableCell>
                          {r.tx_hash ? (
                            <a
                              href={`${BASESCAN}/tx/${r.tx_hash}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline'
                            >
                              {r.tx_hash.slice(0, 8)}…
                              <ExternalLink className='h-3 w-3' />
                            </a>
                          ) : (
                            '—'
                          )}
                        </TableCell>
                        <TableCell className='whitespace-nowrap text-muted-foreground'>
                          {when(r.at)}
                        </TableCell>
                      </TableRow>
                    ))}
                    {data.recent.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className='py-8 text-center text-muted-foreground'
                        >
                          No payouts yet.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-5'>
              <h2 className='mb-3 font-semibold'>By period</h2>
              <div className='overflow-x-auto'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead className='text-right'>AIPG paid</TableHead>
                      <TableHead className='text-right'>Payouts</TableHead>
                      <TableHead>Settled</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.periods.map((p, i) => (
                      <TableRow key={i}>
                        <TableCell className='whitespace-nowrap'>
                          {periodLabel(p.period_id)}
                        </TableCell>
                        <TableCell className='text-right tabular-nums'>
                          {fmtAipg(p.aipg)}
                        </TableCell>
                        <TableCell className='text-right tabular-nums'>
                          {p.payouts}
                        </TableCell>
                        <TableCell className='whitespace-nowrap text-muted-foreground'>
                          {when(p.at)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <p className='text-center text-xs text-muted-foreground'>
            den is the grid&apos;s work meter; AIPG pays out hourly on Base,
            pro-rata to den. Figures reflect settled payouts recorded by the
            grid.
          </p>
        </>
      )}
    </div>
  );
}
