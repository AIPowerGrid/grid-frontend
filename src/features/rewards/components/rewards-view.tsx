'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

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
    <Card className='mx-auto w-full max-w-4xl'>
      <CardHeader>
        <CardTitle>Worker Earnings</CardTitle>
        <p className='text-sm text-muted-foreground'>
          den earned per completed job, straight from the settlement ledger.
          AIPG payouts settle on Base per epoch, pro-rata to den.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className='mb-6 flex space-x-2'>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Worker wallet address (0x…)'
            className='flex-1'
          />
          <Button type='submit' disabled={loading}>
            {loading ? 'Loading…' : 'Look up'}
          </Button>
        </form>
        {error && <p className='mb-4 text-red-500'>{error}</p>}

        {earnings && (
          <div className='space-y-6'>
            {/* Totals */}
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
              <div className='rounded-lg border p-4'>
                <div className='text-xs text-muted-foreground'>
                  den (lifetime)
                </div>
                <div className='text-2xl font-bold'>
                  {earnings.total.den.toLocaleString()}
                </div>
              </div>
              <div className='rounded-lg border p-4'>
                <div className='text-xs text-muted-foreground'>
                  Jobs (lifetime)
                </div>
                <div className='text-2xl font-bold'>
                  {earnings.total.jobs.toLocaleString()}
                </div>
              </div>
              <div className='rounded-lg border p-4'>
                <div className='text-xs text-muted-foreground'>den (24h)</div>
                <div className='text-2xl font-bold'>
                  {earnings.last_24h.den.toLocaleString()}
                </div>
              </div>
              <div className='rounded-lg border p-4'>
                <div className='text-xs text-muted-foreground'>Jobs (24h)</div>
                <div className='text-2xl font-bold'>
                  {earnings.last_24h.jobs.toLocaleString()}
                </div>
              </div>
            </div>

            {/* On-chain claims — lands with settlement epochs */}
            <div className='rounded-lg border border-dashed p-4 text-sm text-muted-foreground'>
              <strong className='text-foreground'>On-chain claims:</strong>{' '}
              epoch settlement publishes a Merkle root on Base; claimable AIPG
              and a one-click claim will appear here once the first epoch
              settles.
            </div>

            {/* Recent ledger events */}
            <div>
              <h3 className='mb-2 text-lg font-semibold'>
                Recent Work (last {earnings.recent.length})
              </h3>
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
                      <TableCell className='text-right'>
                        {ev.den.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                  {earnings.recent.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className='text-center'>
                        No work recorded for this wallet yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
