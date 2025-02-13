'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const IS_TESTING = true; // Set to true if in testing mode (rewards are not being issued)
const AIPG_ADDRESS_REGEX = /^[A][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

export default function RewardsView() {
  const [address, setAddress] = useState('');
  const [worker, setWorker] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [prevKudos, setPrevKudos] = useState<number | null>(null);
  const [payments, setPayments] = useState<any[]>([]);
  const [loadingPayments, setLoadingPayments] = useState(false);
  const [paymentsError, setPaymentsError] = useState('');

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  async function fetchRewards() {
    try {
      const res = await fetch('/api/workers-rewards');
      if (!res.ok) throw new Error('Failed to fetch rewards data');
      const data = await res.json();
      return data.find((w: any) => w.name === address);
    } catch (err) {
      console.error('Error fetching rewards:', err);
      return null;
    }
  }

  async function fetchPayments() {
    setLoadingPayments(true);
    try {
      const res = await fetch(`/api/sentry/workerRewards/${address}`);
      if (!res.ok) throw new Error('Failed to fetch payments data');
      const data = await res.json();
      setPayments(data.slice(0, 10)); // Limit to last 10 payments
    } catch (error: any) {
      console.error(error);
      setPaymentsError(error.message || 'Error fetching payments');
    } finally {
      setLoadingPayments(false);
    }
  }

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setWorker(null);
    setPrevKudos(null);
    setPayments([]);

    if (!AIPG_ADDRESS_REGEX.test(address)) {
      setError('Invalid AIPG address format');
      return;
    }

    setLoading(true);
    const foundWorker = await fetchRewards();
    if (!foundWorker) {
      setError('No rewards details found for this address');
    } else {
      setWorker(foundWorker);
      setPrevKudos(foundWorker.kudos_rewards || 0);
      fetchPayments();
    }
    setLoading(false);
  }

  useEffect(() => {
    if (worker) {
      intervalRef.current = setInterval(async () => {
        const updatedWorker = await fetchRewards();
        if (updatedWorker) {
          setPrevKudos(updatedWorker.kudos_rewards || 0);
          setWorker(updatedWorker);
        }
      }, 30000);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [worker, address, fetchRewards]); // Added fetchRewards to dependencies

  return (
    <Card className='mx-auto w-full max-w-4xl'>
      <CardHeader>
        <CardTitle>Worker Rewards Details</CardTitle>
      </CardHeader>
      <CardContent>
        {IS_TESTING && (
          <div className='mb-4 rounded bg-yellow-200 p-2 text-yellow-800'>
            <strong>Testing:</strong> Rewards are not being issued.
          </div>
        )}
        <form onSubmit={handleSearch} className='mb-4 flex space-x-2'>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter AIPG Address'
            className='flex-1'
          />
          <Button type='submit' disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </Button>
        </form>
        {error && <p className='mb-4 text-red-500'>{error}</p>}
        {worker && (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div className='space-y-2'>
              <h3 className='mb-2 text-lg font-semibold'>Worker Details</h3>
              <p>
                <strong>AIPG Address:</strong> {worker.name}
              </p>
              <p>
                <strong>Requests Fulfilled:</strong>{' '}
                {worker.requests_fulfilled.toLocaleString()}
              </p>
              <p>
                <strong>Points Rewarded:</strong>{' '}
                {worker.kudos_rewards > 0
                  ? worker.kudos_rewards.toLocaleString()
                  : 'Unpaid'}
              </p>
              <div className='ml-4 border-l border-gray-300 pl-4'>
                <p>
                  <strong>Points Generated:</strong>{' '}
                  {worker.kudos_generated !== null &&
                  worker.kudos_generated !== undefined
                    ? worker.kudos_generated.toLocaleString()
                    : 'N/A'}
                </p>
                <p>
                  <strong>Points Uptime:</strong>{' '}
                  {worker.kudos_uptime !== null &&
                  worker.kudos_uptime !== undefined
                    ? worker.kudos_uptime.toLocaleString()
                    : 'N/A'}
                </p>
              </div>
            </div>
            <div>
              <h3 className='mb-2 text-lg font-semibold'>
                Payment History (Last 10)
              </h3>
              {loadingPayments ? (
                <p>Loading payments...</p>
              ) : paymentsError ? (
                <p className='text-red-500'>{paymentsError}</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Amount (AIPG)</TableHead>
                      <TableHead>Points Diff</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>
                          {new Date(payment.timestamp).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {Number(payment.amount).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {payment.kudos_diff > 0
                            ? `+${payment.kudos_diff}`
                            : payment.kudos_diff}
                        </TableCell>
                      </TableRow>
                    ))}
                    {payments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={3} className='text-center'>
                          No payment history found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
