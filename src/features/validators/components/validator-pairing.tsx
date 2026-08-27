// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { CheckCircle2, Link2, RefreshCw, ShieldCheck } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  PairingRequestError,
  PairingView,
  pairingViewSchema,
  readPairingResponse
} from '@/lib/validator-pairing';
import { PairingStepUp } from './pairing-step-up';

export default function ValidatorPairing({ pairingId }: { pairingId: string }) {
  const { data: session } = useSession();
  const [view, setView] = useState<PairingView | null>(null);
  const [error, setError] = useState<PairingRequestError | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [revision, setRevision] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const path = `/api/validator-pairings/${pairingId}`;
  const returnTo = `/dashboard/connect-validator/${pairingId}`;
  const expired =
    !!view && view.status !== 'linked' && now >= view.expires_at * 1000;

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (busy) return;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    async function load() {
      try {
        const next = await readPairingResponse(
          await fetch(path, { cache: 'no-store', signal: controller.signal }),
          pairingViewSchema.refine((item) => item.pairing_id === pairingId)
        );
        if (controller.signal.aborted) return;
        setView(next);
        setError(null);
        if (
          ['pending', 'approved'].includes(next.status) &&
          Date.now() < next.expires_at * 1000
        ) {
          timer = setTimeout(load, 5000);
        }
      } catch (err) {
        if (controller.signal.aborted) return;
        setView(null);
        setError(
          err instanceof PairingRequestError
            ? err
            : new PairingRequestError(502)
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void load();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [path, pairingId, revision, busy]);

  async function approve() {
    if (!view || view.status !== 'pending' || expired || busy) return;
    setBusy(true);
    setError(null);
    try {
      const next = await readPairingResponse(
        await fetch(`${path}/approve`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: '{}',
          cache: 'no-store'
        }),
        pairingViewSchema.refine((item) => item.pairing_id === pairingId)
      );
      setView(next);
    } catch (err) {
      setView(null);
      setError(
        err instanceof PairingRequestError ? err : new PairingRequestError(502)
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className='mx-auto w-full min-w-0 max-w-2xl space-y-6 py-4'>
      <header className='space-y-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <Link2 className='h-5 w-5 text-primary' aria-hidden='true' />
          <h1 className='text-2xl font-semibold'>Link validator</h1>
          <Badge variant='outline'>Account visibility only</Badge>
        </div>
        <p className='break-words text-sm text-muted-foreground'>
          AIPG account:{' '}
          {session?.user?.email ?? session?.user?.name ?? 'Signed in'}
        </p>
      </header>

      {loading && (
        <p role='status' className='text-sm'>
          Checking request...
        </p>
      )}
      {error && (
        <div className='space-y-4'>
          <Alert variant='destructive'>
            <AlertTitle>Link not confirmed</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
          {[401, 403].includes(error.status) && (
            <PairingStepUp returnTo={returnTo} />
          )}
          <Button
            variant='outline'
            onClick={() => {
              setLoading(true);
              setRevision((value) => value + 1);
            }}
          >
            <RefreshCw className='mr-2 h-4 w-4' />
            Retry
          </Button>
        </div>
      )}

      {view && (
        <>
          <dl className='grid gap-4 border-y py-5 text-sm sm:grid-cols-[8rem_minmax(0,1fr)]'>
            <dt className='text-muted-foreground'>Validator</dt>
            <dd className='min-w-0 break-all font-mono'>{view.validator_id}</dd>
            <dt className='text-muted-foreground'>Node signer</dt>
            <dd className='min-w-0 break-all font-mono'>
              {view.signing_wallet}
            </dd>
            <dt className='text-muted-foreground'>Status</dt>
            <dd className='capitalize' role='status'>
              {expired ? 'Expired' : view.status}
            </dd>
            {view.status !== 'linked' && (
              <>
                <dt className='text-muted-foreground'>Time remaining</dt>
                <dd className='tabular-nums'>
                  {Math.max(
                    0,
                    Math.ceil((view.expires_at * 1000 - now) / 1000)
                  )}{' '}
                  seconds
                </dd>
              </>
            )}
          </dl>

          {view.status === 'pending' && !expired && (
            <div className='space-y-4'>
              <p className='text-sm'>
                Approve only a request you started on your own validator. Its
                status will become visible in this account. No keys, funds,
                payout wallets, or node controls are transferred.
              </p>
              <Button onClick={approve} disabled={busy}>
                <ShieldCheck className='mr-2 h-4 w-4' />
                {busy ? 'Approving...' : 'Approve this node'}
              </Button>
            </div>
          )}

          {view.status === 'approved' && !expired && (
            <div className='space-y-4'>
              <h2 className='text-lg font-semibold'>
                Confirm in your local app
              </h2>
              <p className='text-sm'>
                Compare this code with the code on your validator machine.
                Confirm there only if both codes match. If not, cancel in the
                local app.
              </p>
              <output
                aria-label='Comparison code'
                className='block break-all font-mono text-3xl font-semibold'
              >
                {view.comparison_code}
              </output>
              <p role='status' className='text-sm text-muted-foreground'>
                Waiting for your node to confirm...
              </p>
            </div>
          )}

          {view.status === 'linked' && (
            <div className='flex items-start gap-3' role='status'>
              <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-600' />
              <div>
                <h2 className='font-semibold'>Validator linked</h2>
                <p className='mt-1 text-sm text-muted-foreground'>
                  Node keys and operation are unchanged.
                </p>
              </div>
            </div>
          )}
          {(expired || ['cancelled', 'expired'].includes(view.status)) && (
            <p className='text-sm'>
              This request is closed. Check your linked nodes before starting
              again in the local app.
            </p>
          )}
        </>
      )}
      <a
        className='inline-block text-sm text-primary underline underline-offset-4'
        href='/dashboard/validators'
      >
        View linked nodes
      </a>
    </section>
  );
}
