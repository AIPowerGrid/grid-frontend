'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { PageHeader } from '@/components/layout/page-header';
import { StatCard } from '@/components/ui/stat-card';
import BaseOutageBanner from './base-outage-banner';
import { Gauge, Briefcase, Coins, Wallet, ExternalLink } from 'lucide-react';

const BASESCAN = 'https://basescan.org';

interface LedgerEvent {
  type: string;
  model: string;
  den: number;
  at: string | null;
}

interface Earnings {
  wallet: string;
  total: { jobs: number; den: number };
  last_24h: { jobs: number; den: number };
  recent: LedgerEvent[];
}

interface PayoutRow {
  period_id: string;
  den: number;
  aipg: number;
  status: string;
  tx_hash: string | null;
  address: string | null;
  created: string | null;
  paid: string | null;
}

interface Payouts {
  payout_wallet: string;
  accrued_aipg: number;
  paid_aipg: number;
  total_den: number;
  periods: number;
  payouts: PayoutRow[];
}

const fmtAipg = (n: number) =>
  n.toLocaleString(undefined, { maximumFractionDigits: 2 });

/** Friendly period label: "hour-2026-06-25T04" → "Jun 25, 04:00 UTC". */
function periodLabel(id: string): string {
  const m = id.match(/^hour-(\d{4})-(\d{2})-(\d{2})T(\d{2})$/);
  if (m) {
    const [, y, mo, d, h] = m;
    const dt = new Date(Date.UTC(+y, +mo - 1, +d, +h));
    return (
      dt.toLocaleString(undefined, {
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

function StatusBadge({ status }: { status: string }) {
  if (status === 'sent' || status === 'confirmed')
    return (
      <Badge className='border-transparent bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/15'>
        Paid
      </Badge>
    );
  if (status === 'failed') return <Badge variant='destructive'>Failed</Badge>;
  if (status === 'pending') return <Badge variant='outline'>Pending</Badge>;
  return <Badge variant='secondary'>Accrued</Badge>;
}

/** The signed-in account's earnings + custodial payout history. */
function MyEarnings() {
  const [data, setData] = useState<Payouts | null>(null);
  const [loading, setLoading] = useState(true);
  const [signedOut, setSignedOut] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/account/payouts', { cache: 'no-store' });
        if (res.status === 404 || res.status === 401) {
          setSignedOut(true);
          return;
        }
        if (res.ok) setData(await res.json());
      } catch {
        /* leave empty */
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (signedOut) return null;

  if (loading)
    return (
      <div className='space-y-4'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <Skeleton className='h-28' />
          <Skeleton className='h-28' />
          <Skeleton className='h-28' />
        </div>
        <Skeleton className='h-48' />
      </div>
    );

  if (!data) return null;

  const hasWallet = !!data.payout_wallet;
  const needsWallet = data.accrued_aipg > 0 && !hasWallet;

  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Your earnings</h2>
        {hasWallet && (
          <a
            href={`${BASESCAN}/address/${data.payout_wallet}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground'
          >
            <Wallet className='h-3.5 w-3.5' />
            {data.payout_wallet.slice(0, 6)}…{data.payout_wallet.slice(-4)}
            <ExternalLink className='h-3 w-3' />
          </a>
        )}
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <StatCard
          label='Accrued (owed)'
          value={`${fmtAipg(data.accrued_aipg)} AIPG`}
          hint='Waiting on a payout wallet'
          icon={Coins}
        />
        <StatCard
          label='Paid (lifetime)'
          value={`${fmtAipg(data.paid_aipg)} AIPG`}
          hint='Settled on Base'
          icon={Wallet}
        />
        <StatCard
          label='den (total)'
          value={data.total_den.toLocaleString()}
          hint='Your work meter'
          icon={Gauge}
        />
      </div>

      {needsWallet && (
        <div className='flex flex-col gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-sm'>
            <strong className='text-amber-500'>
              {fmtAipg(data.accrued_aipg)} AIPG is owed to you.
            </strong>{' '}
            <span className='text-muted-foreground'>
              Set a Base payout wallet and your accrued balance is paid out on
              the next run — nothing is lost while you wait.
            </span>
          </p>
          <Button asChild variant='default' className='shrink-0'>
            <Link href='/dashboard/settings'>Set payout wallet</Link>
          </Button>
        </div>
      )}

      <Card>
        <CardContent className='p-5'>
          <h3 className='mb-3 font-semibold'>Payout history</h3>
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead className='text-right'>den</TableHead>
                  <TableHead className='text-right'>AIPG</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className='text-right'>Proof</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.payouts.map((p, i) => (
                  <TableRow key={i}>
                    <TableCell className='whitespace-nowrap'>
                      {periodLabel(p.period_id)}
                    </TableCell>
                    <TableCell className='text-right tabular-nums'>
                      {p.den.toLocaleString(undefined, {
                        maximumFractionDigits: 2
                      })}
                    </TableCell>
                    <TableCell className='text-right tabular-nums'>
                      {fmtAipg(p.aipg)}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={p.status} />
                    </TableCell>
                    <TableCell className='text-right'>
                      {p.tx_hash ? (
                        <a
                          href={`${BASESCAN}/tx/${p.tx_hash}`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline'
                        >
                          {p.tx_hash.slice(0, 8)}…
                          <ExternalLink className='h-3 w-3' />
                        </a>
                      ) : (
                        <span className='text-xs text-muted-foreground'>—</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {data.payouts.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className='py-8 text-center text-muted-foreground'
                    >
                      No payouts yet. Run a worker and your earnings show up
                      here each hour.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/** Public lookup of any worker wallet's den (lifetime/24h) + recent work. */
function WalletLookup() {
  const [address, setAddress] = useState('');
  const [earnings, setEarnings] = useState<Earnings | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setEarnings(null);
    if (!/^0x[a-fA-F0-9]{40}$/.test(address.trim())) {
      setError('Enter a valid wallet address (0x…, 40 hex chars).');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/sentry/workerRewards/${address.trim()}`);
      if (!res.ok) throw new Error('Earnings lookup failed');
      setEarnings(await res.json());
    } catch (err: any) {
      setError(err.message || 'Error fetching earnings');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='space-y-5'>
      <div>
        <h2 className='text-lg font-semibold'>Look up any wallet</h2>
        <p className='text-sm text-muted-foreground'>
          Public den + recent work for any worker address.
        </p>
      </div>

      <Card>
        <CardContent className='p-5'>
          <form onSubmit={handleSearch} className='flex gap-2'>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Worker wallet address (0x…)'
              className='flex-1 font-mono'
            />
            <Button type='submit' disabled={loading}>
              {loading ? 'Loading…' : 'Look up'}
            </Button>
          </form>
          {error && <p className='mt-3 text-sm text-red-500'>{error}</p>}
        </CardContent>
      </Card>

      {earnings && (
        <div className='space-y-6'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <StatCard
              label='den (lifetime)'
              value={earnings.total.den.toLocaleString()}
              icon={Gauge}
            />
            <StatCard
              label='Jobs (lifetime)'
              value={earnings.total.jobs.toLocaleString()}
              icon={Briefcase}
            />
            <StatCard
              label='den (24h)'
              value={earnings.last_24h.den.toLocaleString()}
              icon={Gauge}
            />
            <StatCard
              label='Jobs (24h)'
              value={earnings.last_24h.jobs.toLocaleString()}
              icon={Briefcase}
            />
          </div>

          <Card>
            <CardContent className='p-5'>
              <h3 className='mb-3 font-semibold'>
                Recent work (last {earnings.recent.length})
              </h3>
              <div className='overflow-x-auto'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>When</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Model</TableHead>
                      <TableHead className='text-right'>den</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {earnings.recent.map((ev, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          {ev.at ? new Date(ev.at).toLocaleString() : '—'}
                        </TableCell>
                        <TableCell className='capitalize'>{ev.type}</TableCell>
                        <TableCell>{ev.model}</TableCell>
                        <TableCell className='text-right tabular-nums'>
                          {ev.den.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                    {earnings.recent.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          className='py-8 text-center text-muted-foreground'
                        >
                          No work recorded for this wallet yet.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

/**
 * Worker rewards. den is the work meter; AIPG is paid out hourly on Base,
 * pro-rata to den. Accrued balances are owed and paid the moment a payout
 * wallet is set.
 */
export default function RewardsView() {
  return (
    <div className='mx-auto w-full max-w-5xl space-y-10'>
      <PageHeader
        title='Worker Rewards'
        description='den is your work meter; AIPG pays out hourly on Base, pro-rata to den. Earnings accrue until you set a payout wallet — nothing is lost.'
      />
      <BaseOutageBanner />
      <MyEarnings />
      <WalletLookup />
    </div>
  );
}
