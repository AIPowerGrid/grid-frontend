'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import {
  Activity,
  AlertTriangle,
  Blocks,
  CheckCircle2,
  Coins,
  Cpu,
  ExternalLink,
  Gauge,
  RefreshCw,
  Server,
  ShieldCheck,
  Users
} from 'lucide-react';

interface ModelCapacity {
  name: string;
  type: string;
  workers: number;
  capabilities: string[];
}

interface ValidatorStatus {
  window_hours: number;
  registered_active: number;
  heartbeat_fresh: number;
  participating: number;
  verified_independent: number;
  participating_independent?: number;
  independence_proven: boolean;
  quorum: Record<'pending' | 'accepted' | 'disputed' | 'finalized', number>;
  assignments_completed: number;
  authoritative_votes: number;
  agreement_rate: number | null;
  disputed_rate: number | null;
  coverage: { workers: number; models: number };
  software_versions: { version: string; validators: number }[];
  economic_effect: string;
}

interface Notice {
  code: string;
  component?: string;
  severity: string;
  summary: string;
  affected_models?: string[];
}

interface NetworkStatus {
  schema: string;
  generated_at: string;
  status: 'operational' | 'degraded';
  build_commit: string | null;
  core: { api: string; redis: boolean };
  capacity: {
    workers_online: number;
    models_online: number;
    redundancy_target: number;
    models_below_target: string[];
    models: ModelCapacity[];
  };
  validators: ValidatorStatus | null;
  payouts: {
    aipg_paid: number;
    payouts: number;
    workers_paid: number;
    last_paid: string | null;
  } | null;
  charging: { mode: 'off' | 'allowlist' | 'on'; global: boolean };
  incidents: Notice[];
  incident_history_available: boolean;
  advisories: Notice[];
  architecture: {
    coordinator_federated: boolean;
    validator_economic_effect: string;
    staking_required: boolean;
  };
}

const pct = (value: number | null | undefined) =>
  value === null || value === undefined ? '—' : `${Math.round(value * 100)}%`;

const shortCommit = (value: string | null) =>
  value ? value.slice(0, 12) : 'unreported';

function capacityState(workers: number, target: number) {
  if (workers >= target)
    return { label: 'Replicated', variant: 'secondary' as const };
  if (workers === 2) return { label: 'Needs one', variant: 'outline' as const };
  return { label: 'Single worker', variant: 'destructive' as const };
}

export default function NetworkStatusView() {
  const [data, setData] = useState<NetworkStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (quiet = false) => {
    if (quiet) setRefreshing(true);
    else setLoading(true);
    try {
      const response = await fetch('/api/network/status', {
        cache: 'no-store'
      });
      if (!response.ok)
        throw new Error('Network status is temporarily unavailable.');
      setData(await response.json());
      setError(null);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : 'Network status is unavailable.'
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void load();
    const timer = window.setInterval(() => void load(true), 60_000);
    return () => window.clearInterval(timer);
  }, [load]);

  return (
    <div className='mx-auto w-full max-w-6xl space-y-8'>
      <header className='flex flex-col gap-5 border-b pb-6 sm:flex-row sm:items-end sm:justify-between'>
        <div className='space-y-2'>
          <div className='flex flex-wrap items-center gap-2'>
            <h1 className='text-2xl font-semibold'>Network Status</h1>
            {data && (
              <Badge
                variant={
                  data.status === 'operational' ? 'secondary' : 'destructive'
                }
              >
                {data.status === 'operational' ? 'Operational' : 'Degraded'}
              </Badge>
            )}
          </div>
          <p className='max-w-2xl text-sm text-muted-foreground'>
            Live capacity, validator evidence, charging state, and worker
            payouts from the Grid source of truth.
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Button asChild variant='outline' size='sm'>
            <Link href='/payouts'>Payouts</Link>
          </Button>
          <Button
            variant='outline'
            size='icon'
            title='Refresh network status'
            aria-label='Refresh network status'
            disabled={refreshing}
            onClick={() => void load(true)}
          >
            <RefreshCw
              className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`}
            />
          </Button>
        </div>
      </header>

      {loading && (
        <div className='space-y-6'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className='h-28' />
            ))}
          </div>
          <Skeleton className='h-80' />
        </div>
      )}

      {error && !data && !loading && (
        <div className='border border-destructive/40 bg-destructive/5 p-5 text-sm'>
          <p className='font-semibold text-destructive'>Status unavailable</p>
          <p className='mt-1 text-muted-foreground'>{error}</p>
        </div>
      )}

      {data && (
        <>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <StatCard
              label='Workers online'
              value={data.capacity.workers_online.toLocaleString()}
              hint={`${data.capacity.models_online} model lanes`}
              icon={Cpu}
            />
            <StatCard
              label='Participating validators'
              value={(data.validators?.participating ?? 0).toLocaleString()}
              hint={`${data.validators?.registered_active ?? 0} registered active`}
              icon={ShieldCheck}
            />
            <StatCard
              label='Charging mode'
              value={data.charging.mode}
              hint={data.charging.global ? 'Global charging' : 'Not global'}
              icon={Coins}
            />
            <StatCard
              label='Current incidents'
              value={data.incidents.length.toLocaleString()}
              hint={
                data.incidents.length
                  ? 'Action required'
                  : 'No derived incidents'
              }
              icon={Activity}
            />
          </div>

          {data.incidents.length > 0 && (
            <section className='space-y-3' aria-labelledby='incidents-heading'>
              <h2 id='incidents-heading' className='text-lg font-semibold'>
                Active incidents
              </h2>
              <div className='divide-y border border-destructive/30'>
                {data.incidents.map((item) => (
                  <div
                    key={item.code}
                    className='flex gap-3 bg-destructive/5 p-4'
                  >
                    <AlertTriangle className='mt-0.5 h-4 w-4 shrink-0 text-destructive' />
                    <div>
                      <p className='font-medium'>{item.summary}</p>
                      <p className='text-xs uppercase text-muted-foreground'>
                        {item.component} · {item.severity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className='space-y-3' aria-labelledby='capacity-heading'>
            <div className='flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between'>
              <div>
                <h2 id='capacity-heading' className='text-lg font-semibold'>
                  Model capacity
                </h2>
                <p className='text-sm text-muted-foreground'>
                  Replication target: {data.capacity.redundancy_target}{' '}
                  independent workers per model.
                </p>
              </div>
              <span className='text-xs text-muted-foreground'>
                Updated {new Date(data.generated_at).toLocaleString()}
              </span>
            </div>
            <div className='overflow-x-auto border'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className='text-right'>Workers</TableHead>
                    <TableHead>Capabilities</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.capacity.models.map((model) => {
                    const state = capacityState(
                      model.workers,
                      data.capacity.redundancy_target
                    );
                    return (
                      <TableRow key={`${model.type}:${model.name}`}>
                        <TableCell className='font-medium'>
                          {model.name}
                        </TableCell>
                        <TableCell className='capitalize text-muted-foreground'>
                          {model.type}
                        </TableCell>
                        <TableCell className='text-right font-mono'>
                          {model.workers}
                        </TableCell>
                        <TableCell className='text-muted-foreground'>
                          {model.capabilities.length
                            ? model.capabilities.join(', ')
                            : '—'}
                        </TableCell>
                        <TableCell>
                          <Badge variant={state.variant}>{state.label}</Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {data.capacity.models.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className='py-8 text-center text-muted-foreground'
                      >
                        No model capacity is currently reported.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </section>

          <section
            className='space-y-4 border-y py-6'
            aria-labelledby='validator-heading'
          >
            <div>
              <h2 id='validator-heading' className='text-lg font-semibold'>
                Validator preview
              </h2>
              <p className='text-sm text-muted-foreground'>
                Evidence only. Validator results cannot change routing, rewards,
                strikes, or slashing.
              </p>
            </div>
            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
              <Metric
                label='Registered active'
                value={data.validators?.registered_active ?? 0}
                detail='Accounts, not operator independence'
                icon={Users}
              />
              <Metric
                label='Verified independent'
                value={data.validators?.verified_independent ?? 0}
                detail={
                  data.validators?.independence_proven
                    ? `${data.validators.participating_independent ?? 0} participating in this window`
                    : 'Reviewed operator quorum not yet proven'
                }
                icon={ShieldCheck}
              />
              <Metric
                label='Agreement rate'
                value={pct(data.validators?.agreement_rate)}
                detail={`${data.validators?.authoritative_votes ?? 0} authoritative votes`}
                icon={Gauge}
              />
              <Metric
                label='Finalized groups'
                value={data.validators?.quorum.finalized ?? 0}
                detail={`${data.validators?.quorum.disputed ?? 0} disputed`}
                icon={Blocks}
              />
            </div>
            <div className='flex flex-wrap gap-2'>
              {data.validators?.software_versions.map((item) => (
                <Badge key={item.version} variant='outline'>
                  {item.version} · {item.validators}
                </Badge>
              ))}
              {!data.validators?.software_versions.length && (
                <span className='text-sm text-muted-foreground'>
                  No fresh validator versions reported.
                </span>
              )}
            </div>
          </section>

          <section className='grid gap-6 lg:grid-cols-2'>
            <div className='space-y-4'>
              <h2 className='text-lg font-semibold'>Economy</h2>
              <div className='grid gap-4 sm:grid-cols-2'>
                <Metric
                  label='AIPG paid'
                  value={
                    data.payouts?.aipg_paid.toLocaleString(undefined, {
                      maximumFractionDigits: 2
                    }) ?? '—'
                  }
                  detail={`${data.payouts?.payouts ?? 0} verified payouts`}
                  icon={Coins}
                />
                <Metric
                  label='Workers paid'
                  value={data.payouts?.workers_paid ?? '—'}
                  detail={
                    data.payouts?.last_paid
                      ? `Last ${new Date(data.payouts.last_paid).toLocaleString()}`
                      : 'No settled payout reported'
                  }
                  icon={Users}
                />
              </div>
              <Link
                href='/payouts'
                className='inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline'
              >
                Verify payouts on Base <ExternalLink className='h-3.5 w-3.5' />
              </Link>
            </div>

            <div className='space-y-4'>
              <h2 className='text-lg font-semibold'>Current limitations</h2>
              <div className='divide-y border'>
                {data.advisories.map((item) => (
                  <div key={item.code} className='flex gap-3 p-4'>
                    <AlertTriangle className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                    <div>
                      <p className='text-sm font-medium'>{item.summary}</p>
                      {item.affected_models?.length ? (
                        <p className='mt-1 text-xs text-muted-foreground'>
                          {item.affected_models.join(', ')}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
                {!data.advisories.length && (
                  <div className='flex gap-3 p-4 text-sm text-muted-foreground'>
                    <CheckCircle2 className='h-4 w-4 text-green-500' />
                    No active readiness advisories.
                  </div>
                )}
              </div>
            </div>
          </section>

          <footer className='flex flex-col gap-1 border-t pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
            <span>Core release {shortCommit(data.build_commit)}</span>
            <span>
              Coordinator federation:{' '}
              {data.architecture.coordinator_federated
                ? 'active'
                : 'not active'}
              {' · '}Validator staking:{' '}
              {data.architecture.staking_required ? 'required' : 'not required'}
            </span>
          </footer>
        </>
      )}
    </div>
  );
}

function Metric({
  label,
  value,
  detail,
  icon: Icon
}: {
  label: string;
  value: string | number;
  detail: string;
  icon: typeof Server;
}) {
  return (
    <div className='flex min-h-24 gap-3 border-l-2 border-primary pl-4'>
      <Icon className='mt-1 h-4 w-4 shrink-0 text-primary' />
      <div className='min-w-0'>
        <p className='text-xs font-medium uppercase text-muted-foreground'>
          {label}
        </p>
        <p className='mt-1 text-2xl font-semibold'>{value}</p>
        <p className='mt-1 text-xs text-muted-foreground'>{detail}</p>
      </div>
    </div>
  );
}
