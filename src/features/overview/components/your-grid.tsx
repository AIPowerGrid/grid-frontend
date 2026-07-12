'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StatCard } from '@/components/ui/stat-card';
import {
  Cpu,
  Gauge,
  KeyRound,
  Briefcase,
  ExternalLink,
  Gift,
  Coins,
  Sparkles
} from 'lucide-react';

interface WorkerRow {
  name: string;
  type: string;
  models: string[];
  online: boolean;
  den_earned: number;
  jobs_completed: number;
}
interface AccountWorkers {
  count: number;
  online: number;
  den_earned: number;
  jobs_completed: number;
  workers: WorkerRow[];
}

export function YourGrid() {
  const [acct, setAcct] = useState<any>(null);
  const [w, setW] = useState<AccountWorkers | null>(null);
  const [credits, setCredits] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [a, wr, cr] = await Promise.all([
          fetch('/api/account').then((r) => (r.ok ? r.json() : null)),
          fetch('/api/account/workers').then((r) => (r.ok ? r.json() : null)),
          fetch('/api/account/credits').then((r) => (r.ok ? r.json() : null))
        ]);
        setAcct(a);
        setW(wr);
        setCredits(cr);
      } catch {
        /* leave nulls — section degrades to keys CTA */
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const activeKeys = (acct?.keys ?? []).filter(
    (k: any) => !k.revoked && k.label !== 'dashboard-session'
  ).length;
  const hasWorkers = (w?.count ?? 0) > 0;

  return (
    <section className='space-y-3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold tracking-tight'>Your account</h2>
        <Button asChild variant='ghost' size='sm' className='gap-1.5'>
          <Link href='/dashboard/api-key'>
            <KeyRound className='h-3.5 w-3.5' /> API keys
          </Link>
        </Button>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <StatCard
          label='Your workers'
          value={loading ? '—' : `${w?.online ?? 0} / ${w?.count ?? 0}`}
          hint='Online / total you run'
          icon={Cpu}
        />
        <StatCard
          label='Your den earned'
          value={
            loading ? '—' : Math.round(w?.den_earned ?? 0).toLocaleString()
          }
          hint='Lifetime, settles to AIPG/USDC'
          icon={Gauge}
        />
        <StatCard
          label='Jobs completed'
          value={loading ? '—' : (w?.jobs_completed ?? 0).toLocaleString()}
          hint='By your workers'
          icon={Briefcase}
        />
        <StatCard
          label='API keys'
          value={loading ? '—' : activeKeys}
          hint='Active keys on your account'
          icon={KeyRound}
        />
      </div>

      {/* Credits — promotional, daily free, and purchased pockets */}
      <Card>
        <CardContent className='flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-wrap items-center gap-8'>
            <div>
              <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                <Sparkles className='h-3.5 w-3.5' /> Promotional
              </div>
              <div className='text-2xl font-semibold tabular-nums'>
                {loading || !credits
                  ? '—'
                  : `$${Number(credits.promotional?.remaining_usd ?? 0).toFixed(2)}`}
              </div>
              <div className='text-xs text-muted-foreground'>
                Campaign credit
              </div>
            </div>

            <div>
              <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                <Gift className='h-3.5 w-3.5' /> Free today
                {credits?.free?.holder_bonus_active && (
                  <Badge variant='secondary' className='ml-1'>
                    holder bonus
                  </Badge>
                )}
              </div>
              <div className='text-2xl font-semibold tabular-nums'>
                {loading || !credits
                  ? '—'
                  : `$${Number(credits.free?.remaining_usd ?? 0).toFixed(2)}`}
                {!loading && credits && (
                  <span className='text-sm font-normal text-muted-foreground'>
                    {' '}
                    / ${Number(credits.free?.daily_cap_usd ?? 0).toFixed(2)}
                  </span>
                )}
              </div>
              <div className='text-xs text-muted-foreground'>
                Resets at UTC midnight
              </div>
            </div>

            <div>
              <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                <Coins className='h-3.5 w-3.5' /> Balance
              </div>
              <div className='text-2xl font-semibold tabular-nums'>
                {loading || !credits
                  ? '—'
                  : `$${Number(credits.paid?.balance_usd ?? 0).toFixed(2)}`}
              </div>
              <div className='text-xs text-muted-foreground'>
                Purchased, never expires
              </div>
            </div>
          </div>

          {!loading && credits && !credits.charging_enabled && (
            <p className='max-w-[16rem] text-xs text-muted-foreground'>
              Metering preview. No credits are charged while billing is off.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Worker list, or a run-a-worker nudge */}
      {!loading && hasWorkers && (
        <Card>
          <CardContent className='p-5'>
            <div className='space-y-2'>
              {w!.workers.map((wk) => (
                <div
                  key={wk.name}
                  className='flex items-center justify-between gap-3 border-b py-2 last:border-0'
                >
                  <div className='flex items-center gap-2'>
                    <span
                      className={`h-2 w-2 rounded-full ${wk.online ? 'bg-green-500' : 'bg-muted-foreground/40'}`}
                    />
                    <span className='font-medium'>{wk.name}</span>
                    <span className='text-xs capitalize text-muted-foreground'>
                      {wk.type}
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs tabular-nums text-muted-foreground'>
                      {Math.round(wk.den_earned).toLocaleString()} den
                    </span>
                    <Badge variant={wk.online ? 'default' : 'secondary'}>
                      {wk.online ? 'online' : 'offline'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {!loading && !hasWorkers && (
        <Card>
          <CardContent className='flex flex-col items-start gap-2 p-5 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='font-medium'>Run a worker, earn from the grid</p>
              <p className='text-sm text-muted-foreground'>
                Point a GPU at the grid and your workers + earnings show up
                here.
              </p>
            </div>
            <Button asChild variant='outline' className='gap-1.5'>
              <Link
                href='https://docs.aipowergrid.io/worker-llm'
                target='_blank'
                rel='noopener noreferrer'
              >
                Run a worker <ExternalLink className='h-3.5 w-3.5' />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
