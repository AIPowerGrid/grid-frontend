'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
import { Gauge, Briefcase } from 'lucide-react';

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

/**
 * Worker earnings, read from the settlement ledger — the same append-only
 * events the on-chain payout (Merkle root on Base) is computed from. den is
 * the work meter; AIPG is paid out per settlement epoch pro-rata to den.
 */
export default function RewardsView() {
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
    <div className='mx-auto w-full max-w-5xl space-y-6'>
      <PageHeader
        title='Worker Rewards'
        description='den earned per completed job, from the settlement ledger. AIPG pays out on Base per epoch, pro-rata to den.'
      />

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

          <div className='rounded-lg border border-dashed p-4 text-sm text-muted-foreground'>
            <strong className='text-foreground'>On-chain claims:</strong> epoch
            settlement publishes a Merkle root on Base; claimable AIPG and a
            one-click claim will appear here once the first epoch settles.
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
