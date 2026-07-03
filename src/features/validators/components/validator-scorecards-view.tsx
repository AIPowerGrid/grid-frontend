'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Gauge,
  GitBranch,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Timer
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/layout/page-header';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { StatCard } from '@/components/ui/stat-card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

type WindowHours = 24 | 168 | 720;
type AuthorityMode = 'all' | 'authoritative' | 'preview';

interface ScorecardItem {
  subject_type: 'worker' | 'model' | string;
  subject_id: string;
  worker_id: string | null;
  model: string | null;
  modality: string | null;
  capability: string | null;
  total: number;
  healthy: number;
  slow: number;
  failed: number;
  healthy_rate: number;
  slow_rate: number;
  failed_rate: number;
  avg_latency_ms: number | null;
  avg_score: number | null;
  first_seen: string | null;
  last_seen: string | null;
  authority: 'preview' | 'authoritative' | string;
  quorum_status: 'pending' | 'accepted' | 'disputed' | 'finalized' | string;
}

interface ScorecardsResponse {
  items: ScorecardItem[];
  count: number;
  window_hours: number;
  limit: number;
  economic_effect: string;
  authority: AuthorityMode;
  error?: string;
}

interface AssignmentItem {
  assignment_id: string;
  target_worker_id: string;
  target_worker_name: string;
  model: string;
  modality: string;
  capability: string;
  canary_kind: string;
  status: string;
  quorum_status: 'pending' | 'accepted' | 'disputed' | 'finalized' | string;
  quorum_outcome: string | null;
  probe_status: string;
  created: string | null;
  expires: string | null;
  probed: string | null;
  finalized: string | null;
}

interface AssignmentHealthResponse {
  quorum: {
    pending: number;
    accepted: number;
    disputed: number;
    finalized: number;
  };
  probe: Record<string, number>;
  recent: AssignmentItem[];
  economic_effect: string;
  error?: string;
}

const WINDOWS: { label: string; value: WindowHours }[] = [
  { label: '24h', value: 24 },
  { label: '7d', value: 168 },
  { label: '30d', value: 720 }
];

const AUTHORITY_FILTERS: { label: string; value: AuthorityMode }[] = [
  { label: 'All', value: 'all' },
  { label: 'Authoritative', value: 'authoritative' },
  { label: 'Preview', value: 'preview' }
];

function pct(value: number) {
  return `${Math.round(value * 100)}%`;
}

function fmtNumber(value: number | null | undefined, digits = 0) {
  if (value === null || value === undefined || Number.isNaN(value)) return '—';
  return value.toLocaleString(undefined, { maximumFractionDigits: digits });
}

function fmtLatency(value: number | null) {
  if (value === null || value === undefined) return '—';
  if (value >= 1000) return `${(value / 1000).toFixed(1)}s`;
  return `${Math.round(value)}ms`;
}

function fmtTime(value: string | null) {
  if (!value) return '—';
  const dt = new Date(value);
  if (Number.isNaN(dt.getTime())) return '—';
  return dt.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function verdictBadge(item: ScorecardItem) {
  if (item.total === 0) return <Badge variant='secondary'>No evidence</Badge>;
  if (item.failed_rate >= 0.25) {
    return <Badge variant='destructive'>Needs review</Badge>;
  }
  if (item.slow_rate >= 0.25) return <Badge variant='outline'>Slow</Badge>;
  return (
    <Badge className='border-transparent bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/15'>
      Healthy
    </Badge>
  );
}

function authorityBadge(value: string) {
  if (value === 'authoritative') {
    return (
      <Badge className='border-transparent bg-sky-500/15 text-sky-500 hover:bg-sky-500/15'>
        Authoritative
      </Badge>
    );
  }
  return <Badge variant='secondary'>Preview</Badge>;
}

function quorumBadge(value: string) {
  if (value === 'accepted') {
    return (
      <Badge className='border-transparent bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/15'>
        Accepted
      </Badge>
    );
  }
  if (value === 'disputed')
    return <Badge variant='destructive'>Disputed</Badge>;
  if (value === 'finalized') return <Badge variant='outline'>Finalized</Badge>;
  return <Badge variant='secondary'>Pending</Badge>;
}

export default function ValidatorScorecardsView() {
  const [windowHours, setWindowHours] = useState<WindowHours>(168);
  const [authority, setAuthority] = useState<AuthorityMode>('all');
  const [refreshTick, setRefreshTick] = useState(0);
  const [data, setData] = useState<ScorecardsResponse | null>(null);
  const [health, setHealth] = useState<AssignmentHealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError('');
      try {
        const [res, healthRes] = await Promise.all([
          fetch(
            `/api/validator/scorecards?limit=100&since_hours=${windowHours}&authority=${authority}`,
            { cache: 'no-store' }
          ),
          fetch('/api/validator/assignments/health?limit=25', {
            cache: 'no-store'
          })
        ]);
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('Sign in with a Grid account to view scorecards.');
          }
          if (res.status === 403) {
            throw new Error('Validator scorecards require a v2 Grid API key.');
          }
          throw new Error('Validator scorecards are unavailable right now.');
        }
        if (!healthRes.ok) {
          throw new Error(
            'Validator assignment health is unavailable right now.'
          );
        }
        const nextData = (await res.json()) as ScorecardsResponse;
        const nextHealth = (await healthRes.json()) as AssignmentHealthResponse;
        if (!cancelled) {
          setData(nextData);
          setHealth(nextHealth);
        }
      } catch (err) {
        if (!cancelled) {
          setData(null);
          setHealth(null);
          setError(
            err instanceof Error ? err.message : 'Scorecards unavailable'
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [windowHours, authority, refreshTick]);

  const totals = useMemo(() => {
    const items = data?.items ?? [];
    return items.reduce(
      (acc, item) => {
        acc.observations += item.total;
        acc.healthy += item.healthy;
        acc.slow += item.slow;
        acc.failed += item.failed;
        if (
          typeof item.avg_latency_ms === 'number' &&
          Number.isFinite(item.avg_latency_ms)
        ) {
          acc.latencySum += item.avg_latency_ms * item.total;
          acc.latencyWeight += item.total;
        }
        return acc;
      },
      {
        observations: 0,
        healthy: 0,
        slow: 0,
        failed: 0,
        latencySum: 0,
        latencyWeight: 0
      }
    );
  }, [data]);

  const healthyRate = totals.observations
    ? totals.healthy / totals.observations
    : 0;
  const avgLatency = totals.latencyWeight
    ? totals.latencySum / totals.latencyWeight
    : null;
  const showStats = !loading && !error;

  return (
    <div className='mx-auto w-full max-w-6xl space-y-6'>
      <PageHeader
        title='Validator Evidence'
        description='Independent validator observations across Grid workers and models.'
        actions={
          <div className='flex flex-wrap items-center gap-2'>
            <div className='flex rounded-md border bg-background p-1'>
              {WINDOWS.map((option) => (
                <Button
                  key={option.value}
                  type='button'
                  size='sm'
                  variant={windowHours === option.value ? 'secondary' : 'ghost'}
                  onClick={() => setWindowHours(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            <div className='flex rounded-md border bg-background p-1'>
              {AUTHORITY_FILTERS.map((option) => (
                <Button
                  key={option.value}
                  type='button'
                  size='sm'
                  variant={authority === option.value ? 'secondary' : 'ghost'}
                  onClick={() => setAuthority(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            <Button
              type='button'
              variant='outline'
              size='sm'
              onClick={() => setRefreshTick((current) => current + 1)}
            >
              <RefreshCw className='mr-2 h-4 w-4' />
              Refresh
            </Button>
          </div>
        }
      />

      <Alert>
        <ShieldCheck className='h-4 w-4' />
        <AlertTitle>Evidence-only V0</AlertTitle>
        <AlertDescription>
          These scorecards summarize validator attestations only. They do not
          change routing, payouts, strikes, slashing, credits, or ledger rows.
          Authoritative rows require a Grid assignment id, nonce, and probe
          evidence hash; preview rows are local/model-routed evidence.
        </AlertDescription>
      </Alert>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <StatCard
          label='Subjects'
          value={showStats ? (data?.count ?? 0) : '—'}
          hint={`${data?.window_hours ?? windowHours}h evidence window`}
          icon={ShieldCheck}
        />
        <StatCard
          label='Observations'
          value={showStats ? totals.observations.toLocaleString() : '—'}
          hint='Aggregate attestations'
          icon={Activity}
        />
        <StatCard
          label='Healthy rate'
          value={showStats ? pct(healthyRate) : '—'}
          hint='Healthy observations / total'
          icon={Gauge}
        />
        <StatCard
          label='Avg latency'
          value={showStats ? fmtLatency(avgLatency) : '—'}
          hint='Weighted by observation count'
          icon={Timer}
        />
      </div>

      <div className='grid gap-4 lg:grid-cols-4'>
        <StatCard
          label='Pending quorum'
          value={showStats ? (health?.quorum.pending ?? 0) : '—'}
          hint='Awaiting assignment evidence'
          icon={GitBranch}
        />
        <StatCard
          label='Accepted'
          value={showStats ? (health?.quorum.accepted ?? 0) : '—'}
          hint='Agreement reached'
          icon={CheckCircle2}
        />
        <StatCard
          label='Disputed'
          value={showStats ? (health?.quorum.disputed ?? 0) : '—'}
          hint='Conflicting evidence'
          icon={ShieldAlert}
        />
        <StatCard
          label='Finalized'
          value={showStats ? (health?.quorum.finalized ?? 0) : '—'}
          hint='Closed assignment windows'
          icon={ShieldCheck}
        />
      </div>

      <Card>
        <CardContent className='space-y-4 p-5'>
          <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <h2 className='font-semibold'>Assignment Health</h2>
              <p className='text-sm text-muted-foreground'>
                Recent Grid-issued validator assignments and their quorum state.
              </p>
            </div>
            <Badge variant='outline'>
              economic_effect={health?.economic_effect ?? 'none'}
            </Badge>
          </div>

          {loading ? (
            <ScorecardsSkeleton />
          ) : error ? (
            <div className='rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive'>
              {error}
            </div>
          ) : health?.recent?.length ? (
            <div className='overflow-x-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Assignment</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Probe</TableHead>
                    <TableHead>Quorum</TableHead>
                    <TableHead className='text-right'>Expires</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {health.recent.map((item) => (
                    <TableRow key={item.assignment_id}>
                      <TableCell className='min-w-56'>
                        <div className='space-y-1'>
                          <div className='font-mono text-xs'>
                            {item.assignment_id}
                          </div>
                          <div className='flex flex-wrap gap-1'>
                            <Badge variant='secondary'>{item.modality}</Badge>
                            <Badge variant='outline'>{item.canary_kind}</Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className='min-w-52'>
                        <div className='space-y-1'>
                          <div className='font-medium'>
                            {item.target_worker_name}
                          </div>
                          <div className='line-clamp-1 text-xs text-muted-foreground'>
                            {item.model}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{item.probe_status}</TableCell>
                      <TableCell>
                        <div className='flex flex-wrap gap-1'>
                          {quorumBadge(item.quorum_status)}
                          {item.quorum_outcome ? (
                            <Badge variant='outline'>
                              {item.quorum_outcome}
                            </Badge>
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell className='whitespace-nowrap text-right'>
                        {fmtTime(item.expires)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className='rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground'>
              No validator assignments issued yet.
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className='space-y-4 p-5'>
          <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <h2 className='font-semibold'>Scorecards</h2>
              <p className='text-sm text-muted-foreground'>
                Grouped by worker/model when validators can attribute the
                evidence; model-routed probes appear as model subjects.
              </p>
            </div>
            <Badge variant='outline'>
              economic_effect={data?.economic_effect ?? 'none'}
            </Badge>
          </div>

          {loading ? (
            <ScorecardsSkeleton />
          ) : error ? (
            <div className='rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive'>
              {error}
            </div>
          ) : data?.items?.length ? (
            <div className='overflow-x-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Authority</TableHead>
                    <TableHead>Health</TableHead>
                    <TableHead className='text-right'>Total</TableHead>
                    <TableHead className='text-right'>Slow</TableHead>
                    <TableHead className='text-right'>Failed</TableHead>
                    <TableHead className='text-right'>Latency</TableHead>
                    <TableHead className='text-right'>Last seen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.items.map((item) => (
                    <TableRow
                      key={`${item.authority}:${item.quorum_status}:${item.subject_type}:${item.subject_id}:${item.model}:${item.modality}:${item.capability}`}
                    >
                      <TableCell className='min-w-48'>
                        <div className='space-y-1'>
                          <div className='font-medium'>{item.subject_id}</div>
                          <div className='flex flex-wrap gap-1'>
                            <Badge variant='secondary'>
                              {item.subject_type}
                            </Badge>
                            {item.modality ? (
                              <Badge variant='outline'>{item.modality}</Badge>
                            ) : null}
                            {item.capability ? (
                              <Badge variant='outline'>{item.capability}</Badge>
                            ) : null}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className='max-w-72'>
                        <span className='line-clamp-2 text-sm'>
                          {item.model ?? '—'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className='flex flex-wrap gap-1'>
                          {authorityBadge(item.authority)}
                          {quorumBadge(item.quorum_status)}
                        </div>
                      </TableCell>
                      <TableCell className='min-w-44'>
                        <div className='space-y-2'>
                          {verdictBadge(item)}
                          <Progress
                            value={Math.round(item.healthy_rate * 100)}
                            aria-label='Healthy evidence rate'
                          />
                          <div className='text-xs text-muted-foreground'>
                            {pct(item.healthy_rate)} healthy
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className='text-right tabular-nums'>
                        {item.total.toLocaleString()}
                      </TableCell>
                      <TableCell className='text-right tabular-nums'>
                        {fmtNumber(item.slow)}
                      </TableCell>
                      <TableCell className='text-right tabular-nums'>
                        {fmtNumber(item.failed)}
                      </TableCell>
                      <TableCell className='text-right tabular-nums'>
                        {fmtLatency(item.avg_latency_ms)}
                      </TableCell>
                      <TableCell className='whitespace-nowrap text-right'>
                        {fmtTime(item.last_seen)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className='rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground'>
              No validator evidence in this window yet.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ScorecardsSkeleton() {
  return (
    <div className='space-y-3'>
      {[...Array(5)].map((_, i) => (
        <div key={i} className='grid gap-3 sm:grid-cols-8'>
          <Skeleton className='h-9 sm:col-span-2' />
          <Skeleton className='h-9 sm:col-span-2' />
          <Skeleton className='h-9 sm:col-span-2' />
          <Skeleton className='h-9' />
          <Skeleton className='h-9' />
        </div>
      ))}
    </div>
  );
}
