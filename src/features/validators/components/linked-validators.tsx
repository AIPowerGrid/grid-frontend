// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

'use client';

import { useEffect, useState } from 'react';
import { z } from 'zod';
import { Link2Off, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from '@/components/ui/alert-dialog';
import {
  LinkedValidator,
  PairingRequestError,
  linkedValidatorsSchema,
  readPairingResponse
} from '@/lib/validator-pairing';
import { PairingStepUp } from './pairing-step-up';

export default function LinkedValidators() {
  const [nodes, setNodes] = useState<LinkedValidator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PairingRequestError | null>(null);
  const [revision, setRevision] = useState(0);
  const [selected, setSelected] = useState<LinkedValidator | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    async function load() {
      try {
        const result = await readPairingResponse(
          await fetch('/api/account/validators', {
            cache: 'no-store',
            signal: controller.signal
          }),
          linkedValidatorsSchema
        );
        if (controller.signal.aborted) return;
        setNodes(result.nodes);
        setError(null);
      } catch (err) {
        if (controller.signal.aborted) return;
        setNodes([]);
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
    return () => controller.abort();
  }, [revision]);

  async function unlink() {
    if (!selected || busy) return;
    setBusy(true);
    try {
      await readPairingResponse(
        await fetch(`/api/account/validators/${selected.validator_id}/unlink`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pairing_id: selected.pairing_id }),
          cache: 'no-store'
        }),
        z.object({ status: z.literal('unlinked') })
      );
      setNodes((items) =>
        items.filter((item) => item.pairing_id !== selected.pairing_id)
      );
      setError(null);
      setRevision((value) => value + 1);
    } catch (err) {
      setError(
        err instanceof PairingRequestError ? err : new PairingRequestError(502)
      );
    } finally {
      setBusy(false);
      setSelected(null);
    }
  }

  return (
    <section
      className='min-w-0 space-y-4 border-y py-6'
      aria-labelledby='linked-validators-heading'
    >
      <div className='flex items-center justify-between gap-3'>
        <h2 id='linked-validators-heading' className='font-semibold'>
          Your linked validators
        </h2>
        <Button
          variant='outline'
          size='icon'
          title='Refresh linked validators'
          aria-label='Refresh linked validators'
          disabled={loading || busy}
          onClick={() => setRevision((value) => value + 1)}
        >
          <RefreshCw className='h-4 w-4' />
        </Button>
      </div>
      {loading && (
        <p role='status' className='text-sm text-muted-foreground'>
          Loading linked nodes...
        </p>
      )}
      {error && (
        <div className='space-y-4'>
          <p role='alert' className='text-sm text-muted-foreground'>
            {error.message}
          </p>
          {[401, 403].includes(error.status) && (
            <PairingStepUp returnTo='/dashboard/validators' />
          )}
        </div>
      )}
      {!loading && !error && nodes.length === 0 && (
        <p className='text-sm text-muted-foreground'>
          No nodes linked to this account. Running a validator does not require
          an account link.
        </p>
      )}
      <ul className='divide-y'>
        {nodes.map((node) => (
          <li
            key={node.validator_id}
            className='flex min-w-0 flex-col gap-4 py-4 sm:flex-row sm:items-start'
          >
            <dl className='grid min-w-0 flex-1 gap-x-4 gap-y-2 text-sm sm:grid-cols-[7rem_minmax(0,1fr)]'>
              <dt className='text-muted-foreground'>Validator</dt>
              <dd className='break-all font-mono'>{node.validator_id}</dd>
              <dt className='text-muted-foreground'>Signer</dt>
              <dd className='break-all font-mono'>{node.signing_wallet}</dd>
              <dt className='text-muted-foreground'>Registration</dt>
              <dd className='break-words capitalize'>{node.status}</dd>
              <dt className='text-muted-foreground'>Last heartbeat</dt>
              <dd>
                {node.last_heartbeat ? (
                  <time dateTime={node.last_heartbeat}>
                    {new Date(node.last_heartbeat).toLocaleString()}
                  </time>
                ) : (
                  'Not received'
                )}
              </dd>
              <dt className='text-muted-foreground'>Version</dt>
              <dd className='break-all'>
                {node.software_version ?? 'Not reported'}
              </dd>
            </dl>
            <Button
              className='self-start'
              variant='outline'
              size='sm'
              disabled={busy}
              onClick={() => setSelected(node)}
            >
              <Link2Off className='mr-2 h-4 w-4' />
              Remove link
            </Button>
          </li>
        ))}
      </ul>
      <AlertDialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open && !busy) setSelected(null);
        }}
      >
        <AlertDialogContent className='w-[calc(100%-2rem)] max-w-lg rounded-lg'>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove this account link?</AlertDialogTitle>
            <AlertDialogDescription>
              This removes visibility in your account. The validator keeps
              running with the same keys, evidence history, and payout settings.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <p className='min-w-0 break-all font-mono text-sm'>
            {selected?.validator_id}
          </p>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={busy}>Keep link</AlertDialogCancel>
            <AlertDialogAction
              disabled={busy}
              onClick={(event) => {
                event.preventDefault();
                void unlink();
              }}
            >
              <Link2Off className='mr-2 h-4 w-4' />
              {busy ? 'Removing...' : 'Remove link'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
