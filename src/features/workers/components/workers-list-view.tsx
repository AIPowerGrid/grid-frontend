'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function WorkersListView() {
  const [workers, setWorkers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchWorkers() {
      try {
        const res = await fetch('/api/workers', { next: { revalidate: 60 } });
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        const data = await res.json();
        setWorkers(data);
      } catch (err: any) {
        console.error('Error fetching workers', err);
        setError('Failed to fetch workers data');
      } finally {
        setLoading(false);
      }
    }
    fetchWorkers();
  }, []);

  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Workers Overview</CardTitle>
        <div className='relative'>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input
            placeholder='Search workers...'
            className='pl-8'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <WorkersTableSkeleton />
        ) : error ? (
          <div className='p-4 text-red-500'>{error}</div>
        ) : (
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='p-1'>Name</TableHead>
                  <TableHead className='p-1'>Type</TableHead>
                  <TableHead className='p-1'>Status</TableHead>
                  <TableHead className='p-1'>Performance</TableHead>
                  <TableHead className='p-1'>Req Fulfilled</TableHead>
                  <TableHead className='p-1'>Uptime</TableHead>
                  <TableHead className='p-1'>Agent</TableHead>
                  <TableHead className='p-1'>Models</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkers.map((worker) => (
                  <TableRow key={worker.id}>
                    <TableCell className='p-1 font-medium'>
                      {worker.name}
                    </TableCell>
                    <TableCell className='p-1'>{worker.type}</TableCell>
                    <TableCell className='p-1'>
                      <Badge
                        variant={worker.online ? 'default' : 'destructive'}
                      >
                        {worker.online ? 'Online' : 'Offline'}
                      </Badge>
                    </TableCell>
                    <TableCell className='p-1'>
                      {worker.performance ? worker.performance : 'N/A'}
                    </TableCell>
                    <TableCell className='p-1'>
                      {worker.requests_fulfilled.toLocaleString()}
                    </TableCell>
                    <TableCell className='p-1'>
                      {formatUptime(worker.uptime)}
                    </TableCell>
                    <TableCell className='p-1'>
                      {extractBridgeAgent(worker.bridge_agent)}
                    </TableCell>
                    <TableCell className='p-1'>
                      {worker.models.map((model: string) => (
                        <Badge key={model} variant='outline' className='mr-1'>
                          {model}
                        </Badge>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function WorkersTableSkeleton() {
  return (
    <div className='space-y-2'>
      {[...Array(5)].map((_, i) => (
        <div key={i} className='flex space-x-2'>
          {[...Array(8)].map((_, j) => (
            <Skeleton key={j} className='h-4 w-[80px]' />
          ))}
        </div>
      ))}
    </div>
  );
}

function formatUptime(seconds: number) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${days}d ${hours}h ${minutes}m`;
}

function extractBridgeAgent(agent: string): string {
  // Return everything before the first colon, or "N/A" if missing
  return agent ? agent.split(':')[0] : 'N/A';
}
