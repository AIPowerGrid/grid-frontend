'use client';

import { useState, useEffect } from 'react';
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
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Cpu, Wifi } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PageHeader } from '@/components/layout/page-header';
import { StatCard } from '@/components/ui/stat-card';

interface Worker {
  id: string;
  name: string;
  type: string;
  online: boolean;
  models: string[];
}

export default function WorkersListView() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchWorkers() {
      try {
        const res = await fetch('/api/workers', { next: { revalidate: 60 } });
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);
        const data = await res.json();
        setWorkers(Array.isArray(data) ? data : []);
      } catch (err: any) {
        console.error('Error fetching workers', err);
        setError('Failed to fetch workers data');
      } finally {
        setLoading(false);
      }
    }
    fetchWorkers();
  }, []);

  const onlineCount = workers.filter((w) => w.online).length;
  const filtered = workers.filter((w) =>
    w.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='mx-auto w-full max-w-6xl space-y-6'>
      <PageHeader
        title='Grid Workers'
        description='GPUs serving open models on the network right now.'
      />

      <div className='grid gap-4 sm:grid-cols-2'>
        <StatCard
          label='Total workers'
          value={loading ? '—' : workers.length}
          hint='Registered on the grid'
          icon={Cpu}
        />
        <StatCard
          label='Online now'
          value={loading ? '—' : onlineCount}
          hint='Serving jobs this moment'
          icon={Wifi}
        />
      </div>

      <Card>
        <CardContent className='space-y-4 p-5'>
          <div className='relative max-w-sm'>
            <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              placeholder='Search workers…'
              className='pl-8'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {loading ? (
            <WorkersTableSkeleton />
          ) : error ? (
            <div className='py-8 text-center text-sm text-red-500'>{error}</div>
          ) : (
            <div className='overflow-x-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Worker</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Models</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((worker) => (
                    <TableRow key={worker.id}>
                      <TableCell className='font-medium'>
                        {worker.name}
                      </TableCell>
                      <TableCell className='capitalize'>
                        {worker.type}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={worker.online ? 'default' : 'secondary'}
                        >
                          {worker.online ? 'Online' : 'Offline'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className='flex flex-wrap gap-1'>
                          {(worker.models ?? []).map((model) => (
                            <Badge key={model} variant='outline'>
                              {model}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filtered.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className='py-8 text-center text-muted-foreground'
                      >
                        {searchTerm
                          ? 'No workers match your search.'
                          : 'No workers online right now.'}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function WorkersTableSkeleton() {
  return (
    <div className='space-y-3'>
      {[...Array(5)].map((_, i) => (
        <div key={i} className='flex gap-3'>
          {[...Array(4)].map((_, j) => (
            <Skeleton key={j} className='h-5 flex-1' />
          ))}
        </div>
      ))}
    </div>
  );
}
