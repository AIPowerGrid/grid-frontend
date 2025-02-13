'use client';

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
  // Delta between polls.
  const [delta, setDelta] = useState<number | null>(null);
  // Log the four most recent changes.
  const [changeLogs, setChangeLogs] = useState<
    { timestamp: string; change: number }[]
  >([]);

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
    setDelta(null);
    setChangeLogs([]);

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
          // Only update if we have a baseline to compare.
          if (prevKudos !== null) {
            const diff = newKudos - prevKudos;
            setDelta(diff);
            // Log this change
            setChangeLogs((prevLogs) => {
              const newEntry = {
                timestamp: new Date().toISOString(),
                change: diff
              };
              const updatedLogs = [newEntry, ...prevLogs];
              return updatedLogs.slice(0, 4); // keep only the latest 4 entries
            });
          }
          setPrevKudos(newKudos);
          setWorker(updatedWorker);
        }
      }, 30000); // polling every 30 seconds

      // Cleanup the interval on unmount or when worker becomes null.
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [worker, address, prevKudos]);

  return (
    <Card className='mx-auto w-full max-w-xl'>
      <CardHeader>
        <CardTitle>Worker Rewards Details</CardTitle>
      </CardHeader>
      <CardContent>
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
            {delta !== null && (
              <p>
                <strong>Change since last check:</strong>{' '}
                {delta !== 0
                  ? delta > 0
                    ? `+${delta.toLocaleString()}`
                    : delta.toLocaleString()
                  : 'No change'}
              </p>
            )}
          </div>
        )}
        {changeLogs.length > 0 && (
          <div className='mt-6'>
            <h3 className='mb-2 text-lg font-semibold'>Recent Changes</h3>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              {changeLogs.map((log, index) => (
                <Card key={index} className='p-4'>
                  <p className='text-sm opacity-60'>
                    {new Date(log.timestamp).toLocaleString()}
                  </p>
                  <p className='text-xl font-bold'>
                    {log.change > 0 ? `+${log.change}` : log.change}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
