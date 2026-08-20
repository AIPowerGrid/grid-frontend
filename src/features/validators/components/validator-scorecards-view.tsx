'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Gauge,
  GitBranch,
  KeyRound,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Timer,
  WalletCards
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

interface AccountInfo {
  account_id: string;
  wallet: string | null;
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
  const [account, setAccount] = useState<AccountInfo | null>(null);
  const [accountLoading, setAccountLoading] = useState(true);
  const [keyCreating, setKeyCreating] = useState(false);
  const [validatorKey, setValidatorKey] = useState('');
  const [keyCopied, setKeyCopied] = useState(false);
  const [onboardingError, setOnboardingError] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetch('/api/account', { cache: 'no-store' })
      .then(async (res) => {
        if (!res.ok) throw new Error('Grid account unavailable');
        return (await res.json()) as AccountInfo;
      })
      .then((next) => {
        if (!cancelled) setAccount(next);
      })
      .catch(() => {
        if (!cancelled)
          setOnboardingError('Sign in again to prepare a validator.');
      })
      .finally(() => {
        if (!cancelled) setAccountLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function createValidatorKey() {
    setKeyCreating(true);
    setOnboardingError('');
    try {
      const res = await fetch('/api/account/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          label: `validator-${new Date().toISOString().slice(0, 10)}`,
          purpose: 'validator'
        })
      });
      const body = await res.json();
      if (!res.ok || !body?.api_key) {
        throw new Error(body?.detail || body?.error || 'Key creation failed');
      }
      setValidatorKey(body.api_key);
    } catch (err) {
      setOnboardingError(
        err instanceof Error ? err.message : 'Validator key creation failed'
      );
    } finally {
      setKeyCreating(false);
    }
  }

  async function copyValidatorKey() {
    if (!validatorKey) return;
    await navigator.clipboard.writeText(validatorKey);
    setKeyCopied(true);
    window.setTimeout(() => setKeyCopied(false), 1500);
  }

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
        <AlertTitle>Preview evidence, no rewards yet</AlertTitle>
        <AlertDescription>
          These scorecards summarize validator attestations only. They do not
          change routing, payouts, strikes, slashing, credits, or ledger rows.
          Authoritative rows require a Grid assignment id, nonce, and probe
          evidence hash. Shared multi-validator quorum, validator staking, and
          validator rewards are not live.
        </AlertDescription>
      </Alert>

      <Card>
        <CardContent className='space-y-6 p-5'>
          <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
            <div>
              <h2 className='font-semibold'>Run a preview validator</h2>
              <p className='mt-1 max-w-3xl text-sm text-muted-foreground'>
                A CPU-only validator receives short-lived Grid assignments,
                probes the assigned worker, and signs the resulting evidence.
                Missing assignments fail closed; the node does not probe random
                production traffic.
              </p>
            </div>
            <Badge variant='outline'>v0.1.0-preview</Badge>
          </div>

          <div className='grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3'>
            <div className='space-y-3 bg-background p-5'>
              <div className='flex items-center gap-2 font-medium'>
                <WalletCards className='h-4 w-4 text-orange-500' />
                1. Link the signing wallet
              </div>
              <p className='text-sm text-muted-foreground'>
                The node&apos;s signing wallet must be linked to this Grid
                account.
              </p>
              {accountLoading ? (
                <Skeleton className='h-9 w-full' />
              ) : account?.wallet ? (
                <code className='block break-all rounded bg-muted px-3 py-2 text-xs'>
                  {account.wallet}
                </code>
              ) : (
                <Button asChild variant='outline' size='sm'>
                  <a href='/dashboard/settings'>Link wallet</a>
                </Button>
              )}
            </div>

            <div className='space-y-3 bg-background p-5'>
              <div className='flex items-center gap-2 font-medium'>
                <KeyRound className='h-4 w-4 text-sky-500' />
                2. Create a validator key
              </div>
              <p className='text-sm text-muted-foreground'>
                This key can only read assignments, probe, attest, and read
                validator status. It cannot submit inference or manage funds.
              </p>
              <Button
                type='button'
                size='sm'
                onClick={createValidatorKey}
                disabled={
                  keyCreating || !account?.wallet || Boolean(validatorKey)
                }
              >
                {keyCreating
                  ? 'Creating…'
                  : validatorKey
                    ? 'Key created'
                    : 'Create key'}
              </Button>
            </div>

            <div className='space-y-3 bg-background p-5'>
              <div className='flex items-center gap-2 font-medium'>
                <Download className='h-4 w-4 text-emerald-500' />
                3. Install and check
              </div>
              <p className='text-sm text-muted-foreground'>
                Download the signed release, run setup, then prove registration
                and Core connectivity before leaving it online.
              </p>
              <Button asChild variant='outline' size='sm'>
                <a
                  href='https://github.com/AIPowerGrid/grid-validator/releases/tag/v0.1.0-preview'
                  target='_blank'
                  rel='noreferrer'
                >
                  Release downloads <ExternalLink className='ml-2 h-4 w-4' />
                </a>
              </Button>
            </div>
          </div>

          {validatorKey ? (
            <div className='space-y-3 rounded-md border border-emerald-500/30 bg-emerald-500/5 p-4'>
              <p className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>
                Copy this key now. Core stores only its hash.
              </p>
              <div className='flex flex-col gap-2 sm:flex-row'>
                <code className='min-w-0 flex-1 overflow-x-auto rounded bg-background px-3 py-2 text-xs'>
                  {validatorKey}
                </code>
                <Button
                  type='button'
                  variant='secondary'
                  size='sm'
                  onClick={copyValidatorKey}
                >
                  <Copy className='mr-2 h-4 w-4' />
                  {keyCopied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>
          ) : null}

          <div className='flex items-start gap-3 rounded-md bg-muted/60 p-4'>
            <Terminal className='mt-0.5 h-4 w-4 shrink-0' />
            <div className='space-y-1 text-sm'>
              <code className='block'>aipg-validator init</code>
              <code className='block'>aipg-validator check</code>
              <code className='block'>aipg-validator run</code>
            </div>
          </div>
          {onboardingError ? (
            <p className='text-sm text-destructive'>{onboardingError}</p>
          ) : null}
        </CardContent>
      </Card>

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
          label='Pending evidence'
          value={showStats ? (health?.quorum.pending ?? 0) : '—'}
          hint='Awaiting assignment evidence'
          icon={GitBranch}
        />
        <StatCard
          label='Accepted evidence'
          value={showStats ? (health?.quorum.accepted ?? 0) : '—'}
          hint='Single assignment accepted'
          icon={CheckCircle2}
        />
        <StatCard
          label='Disputed evidence'
          value={showStats ? (health?.quorum.disputed ?? 0) : '—'}
          hint='Probe and attestation differ'
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
                Recent Grid-issued assignments and their evidence state. This is
                not shared multi-validator quorum.
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
                    <TableHead>Evidence</TableHead>
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
