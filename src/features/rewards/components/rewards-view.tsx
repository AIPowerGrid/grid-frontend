'use client';

const IS_TESTING = true; // Set to true if in testing mode (rewards are not being issued)

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const aipgAddressRegex = /^[A][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

export default function RewardsView() {
  const [address, setAddress] = useState('');
  const [worker, setWorker] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Store the previous rewards value to compare changes.
  const [prevKudos, setPrevKudos] = useState<number | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to fetch rewards data from our API.
  async function fetchRewards() {
    try {
      const res = await fetch('/api/workers-rewards');
      if (!res.ok) {
        throw new Error('Failed to fetch rewards data');
      }
      const data = await res.json();
      // Find the worker whose name exactly matches the entered address.
      const foundWorker = data.find((w: any) => w.name === address);
      return foundWorker;
    } catch (err) {
      console.error('Error fetching rewards:', err);
      return null;
    }
  }

  // Handler for initial search.
  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setWorker(null);
    setPrevKudos(null);

    if (!aipgAddressRegex.test(address)) {
      setError('Invalid AIPG address format');
      return;
    }

    setLoading(true);
    const foundWorker = await fetchRewards();
    if (!foundWorker) {
      setError('No rewards details found for this address');
    } else {
      setWorker(foundWorker);
      // Use rewards value as your baseline.
      setPrevKudos(foundWorker.kudos_rewards || 0);
    }
    setLoading(false);
  }

  // Polling effect: once a worker is found, poll every 30 seconds.
  useEffect(() => {
    if (worker) {
      intervalRef.current = setInterval(async () => {
        const updatedWorker = await fetchRewards();
        if (updatedWorker) {
          const newKudos = updatedWorker.kudos_rewards || 0;
          // Update the baseline.
          setPrevKudos(newKudos);
          setWorker(updatedWorker);
        }
      }, 30000); // polling every 30 seconds

      // Cleanup the interval on unmount or when worker becomes null.
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [worker, address]);

  return (
    <Card className='mx-auto w-full max-w-xl'>
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
        {error && <p className='text-red-500'>{error}</p>}
        {worker && (
          <div className='space-y-2'>
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

            {/* Payment History Section */}
            <PaymentHistory address={worker.name} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* PaymentHistory Component */
function PaymentHistory({ address }: { address: string }) {
  const [payments, setPayments] = useState<any[]>([]);
  const [loadingPayments, setLoadingPayments] = useState(false);
  const [paymentsError, setPaymentsError] = useState('');

  useEffect(() => {
    async function fetchPayments() {
      setLoadingPayments(true);
      try {
        const res = await fetch(`/api/sentry/workerRewards/${address}`);
        if (!res.ok) {
          throw new Error('Failed to fetch payments data');
        }
        const data = await res.json();
        setPayments(data);
      } catch (error: any) {
        console.error(error);
        setPaymentsError(error.message || 'Error fetching payments');
      } finally {
        setLoadingPayments(false);
      }
    }
    fetchPayments();
  }, [address]);

  return (
    <div className='mt-6'>
      <h3 className='mb-2 text-lg font-semibold'>Payment History</h3>
      {loadingPayments ? (
        <p>Loading payments...</p>
      ) : paymentsError ? (
        <p className='text-red-500'>{paymentsError}</p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200 text-sm'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-left'>Timestamp</th>
                <th className='px-4 py-2 text-left'>Amount (AIPG)</th>
                <th className='px-4 py-2 text-left'>Points Diff</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className='px-4 py-2'>
                    {new Date(payment.timestamp).toLocaleString()}
                  </td>
                  <td className='px-4 py-2'>
                    {Number(payment.amount).toLocaleString()}
                  </td>
                  <td className='px-4 py-2'>
                    {payment.kudos_diff > 0
                      ? `+${payment.kudos_diff}`
                      : payment.kudos_diff}
                  </td>
                </tr>
              ))}
              {payments.length === 0 && (
                <tr>
                  <td colSpan={3} className='px-4 py-2 text-center'>
                    No payment history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
