// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

'use client';

import { useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { hexlify, toUtf8Bytes } from 'ethers';
import { RefreshCw, ShieldCheck, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import {
  watchWalletProviders,
  WalletProviderOption
} from '@/features/funding/components/wallet-providers';
import {
  CompensationError,
  CompensationView,
  compensationAmount,
  readCompensation,
  recipientSchema
} from '@/lib/validator-compensation';
import { PairingStepUp } from './pairing-step-up';

export default function ValidatorCompensation({
  requestId
}: {
  requestId: string;
}) {
  const { data: session } = useSession();
  const account = (session?.user as { gridAccountId?: string } | undefined)
    ?.gridAccountId;
  const [view, setView] = useState<CompensationView | null>(null);
  const [error, setError] = useState<CompensationError | null>(null);
  const [walletError, setWalletError] = useState<string | null>(null);
  const [providers, setProviders] = useState<WalletProviderOption[]>([]);
  const [selected, setSelected] = useState('');
  const [wallet, setWallet] = useState<{
    option: WalletProviderOption;
    address: string;
  } | null>(null);
  const [busy, setBusy] = useState(false);
  const [revision, setRevision] = useState(0);
  const [now, setNow] = useState(Date.now);
  const operation = useRef(false),
    generation = useRef(0);
  const path = `/api/validator-compensation/${requestId}`;
  const returnTo = `/dashboard/validator-payout/${requestId}`;
  const expired = !!view?.expires_at && Date.parse(view.expires_at) <= now;

  useEffect(() => watchWalletProviders(setProviders), []);
  useEffect(() => {
    generation.current += 1;
    setWallet(null);
    setView(null);
    return () => {
      generation.current += 1;
    };
  }, [account, requestId]);
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (busy) return;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    async function load() {
      try {
        const next = await readCompensation(
          await fetch(path, { cache: 'no-store', signal: controller.signal }),
          requestId
        );
        if (controller.signal.aborted) return;
        setView(next);
        setError(null);
        if (
          ['awaiting_wallet', 'awaiting_node'].includes(next.status) &&
          Date.parse(next.expires_at ?? '') > Date.now()
        )
          timer = setTimeout(load, 6000);
      } catch (err) {
        if (controller.signal.aborted) return;
        setView(null);
        setError(
          err instanceof CompensationError ? err : new CompensationError(502)
        );
      }
    }
    void load();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [path, requestId, account, busy, revision]);

  async function act(kind: 'prepare' | 'approve') {
    if (
      operation.current ||
      !view ||
      view.status !== 'awaiting_wallet' ||
      expired
    )
      return;
    const epoch = generation.current;
    const current = () => {
      if (epoch !== generation.current) throw new CompensationError(409);
    };
    operation.current = true;
    setBusy(true);
    setWalletError(null);
    setError(null);
    try {
      if (kind === 'prepare') {
        const option = providers.find((item) => item.id === selected);
        if (!option) return;
        const accounts: unknown = await option.provider.request({
          method: 'eth_requestAccounts'
        });
        current();
        const address =
          Array.isArray(accounts) && typeof accounts[0] === 'string'
            ? accounts[0].toLowerCase()
            : '';
        if (!recipientSchema.safeParse(address).success)
          throw new Error('Invalid wallet');
        await option.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x2105' }]
        });
        current();
        const next = await readCompensation(
          await fetch(`${path}/prepare`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipient: address }),
            cache: 'no-store'
          }),
          requestId
        );
        current();
        if (
          next.status !== 'awaiting_wallet' ||
          next.consent?.recipient !== address
        )
          throw new CompensationError(409);
        setView(next);
        setWallet({ option, address });
      } else {
        if (!wallet || !view.consent || !view.review_hash) return;
        const fresh = await readCompensation(
          await fetch(path, { cache: 'no-store' }),
          requestId
        );
        current();
        if (
          fresh.status !== 'awaiting_wallet' ||
          fresh.review_hash !== view.review_hash ||
          fresh.consent?.recipient !== wallet.address ||
          !fresh.message ||
          Date.parse(fresh.expires_at ?? '') <= Date.now() ||
          Date.parse(fresh.consent.issued_at) > Date.now() + 30_000
        )
          throw new CompensationError(409);
        const checkWallet = async () => {
          const accounts: unknown = await wallet.option.provider.request({
            method: 'eth_accounts'
          });
          const chain: unknown = await wallet.option.provider.request({
            method: 'eth_chainId'
          });
          current();
          if (
            !Array.isArray(accounts) ||
            typeof accounts[0] !== 'string' ||
            accounts[0].toLowerCase() !== wallet.address ||
            typeof chain !== 'string' ||
            !/^0x[0-9a-f]+$/i.test(chain) ||
            BigInt(chain) !== BigInt(8453)
          )
            throw new CompensationError(409);
        };
        await checkWallet();
        const signature: unknown = await wallet.option.provider.request({
          method: 'personal_sign',
          params: [hexlify(toUtf8Bytes(fresh.message)), wallet.address]
        });
        current();
        await checkWallet();
        if (
          typeof signature !== 'string' ||
          signature.length > 16386 ||
          !/^0x(?:[a-fA-F0-9]{2})+$/.test(signature)
        )
          throw new Error('Invalid signature');
        const next = await readCompensation(
          await fetch(`${path}/approve`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ review_hash: fresh.review_hash, signature }),
            cache: 'no-store'
          }),
          requestId
        );
        current();
        if (
          !['awaiting_node', 'review_required', 'recipient_bound'].includes(
            next.status
          )
        )
          throw new CompensationError(409);
        setView(next);
        setWallet(null);
      }
    } catch (err) {
      if (epoch === generation.current) {
        setWallet(null);
        setView(null);
        if (err instanceof CompensationError) setError(err);
        else
          setWalletError(
            'Wallet approval was cancelled or unavailable. Check your wallet, then refresh. Nothing is automatically retried.'
          );
      }
    } finally {
      operation.current = false;
      setBusy(false);
    }
  }

  return (
    <section className='mx-auto w-full min-w-0 max-w-2xl space-y-6 py-4'>
      <header className='space-y-2'>
        <h1 className='text-2xl font-semibold'>Validator payout</h1>
        <p className='break-words text-sm text-muted-foreground'>
          {session?.user?.email ?? session?.user?.name ?? 'AIPG account'}
        </p>
      </header>
      {(error || walletError) && (
        <Alert variant='destructive'>
          <AlertTitle>Approval not confirmed</AlertTitle>
          <AlertDescription>{error?.message ?? walletError}</AlertDescription>
        </Alert>
      )}
      {error && [401, 403].includes(error.status) && (
        <PairingStepUp returnTo={returnTo} />
      )}
      {!view && !error && !walletError && (
        <p role='status'>Checking payout request...</p>
      )}
      {view && (
        <>
          <dl className='grid gap-3 border-y py-5 text-sm sm:grid-cols-[8rem_minmax(0,1fr)]'>
            <dt className='text-muted-foreground'>Status</dt>
            <dd role='status'>
              {expired && view.status !== 'recipient_bound'
                ? 'Expired'
                : {
                    awaiting_wallet: 'Wallet approval needed',
                    awaiting_node: 'Confirm on your node',
                    review_required: 'Awaiting maintainer review',
                    recipient_bound: 'Destination recorded; payment separate',
                    cancelled: 'Cancelled',
                    expired: 'Expired'
                  }[view.status]}
            </dd>
            <dt className='text-muted-foreground'>Network</dt>
            <dd>Base (8453)</dd>
            {view.consent && (
              <>
                <dt className='text-muted-foreground'>Validator</dt>
                <dd className='min-w-0 break-all font-mono'>
                  {view.consent.validator_id}
                </dd>
                <dt className='text-muted-foreground'>Campaign</dt>
                <dd className='min-w-0 break-all'>
                  {view.consent.campaign_id}
                </dd>
                <dt className='text-muted-foreground'>Earned allocation</dt>
                <dd className='min-w-0 break-all font-semibold'>
                  {compensationAmount(view.consent.amount_atomic)} AIPG
                </dd>
              </>
            )}
            {(view.consent?.recipient || view.recipient) && (
              <>
                <dt className='text-muted-foreground'>Destination</dt>
                <dd className='min-w-0 break-all font-mono'>
                  {view.consent?.recipient ?? view.recipient}
                </dd>
              </>
            )}
            {view.expires_at && (
              <>
                <dt className='text-muted-foreground'>Expires</dt>
                <dd>{new Date(view.expires_at).toLocaleString()}</dd>
              </>
            )}
          </dl>
          {view.status === 'awaiting_wallet' && !expired && (
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='payout-wallet'>Payout wallet</Label>
                <select
                  id='payout-wallet'
                  className='flex h-10 w-full min-w-0 rounded-md border bg-background px-3 text-sm'
                  value={selected}
                  disabled={busy}
                  onChange={(event) => {
                    setSelected(event.target.value);
                    setWallet(null);
                  }}
                >
                  <option value=''>Select a wallet</option>
                  {providers.map((provider) => (
                    <option key={provider.id} value={provider.id}>
                      {provider.name}
                    </option>
                  ))}
                </select>
                {providers.length === 0 && (
                  <p className='text-sm text-muted-foreground'>
                    Open this page in a browser with your Base-compatible wallet
                    installed.
                  </p>
                )}
              </div>
              <Button
                variant='outline'
                disabled={busy || !selected}
                onClick={() => void act('prepare')}
              >
                <Wallet className='mr-2 h-4 w-4' />
                {busy ? 'Waiting...' : 'Connect payout wallet'}
              </Button>
              {wallet && view.consent?.recipient === wallet.address && (
                <div className='space-y-3 border-t pt-4'>
                  <p className='text-sm'>
                    Approve only this earned allocation to the full address
                    above. This signature does not send funds, approve token
                    spending, or change other payouts.
                  </p>
                  <Button disabled={busy} onClick={() => void act('approve')}>
                    <ShieldCheck className='mr-2 h-4 w-4' />
                    Approve payout destination
                  </Button>
                </div>
              )}
            </div>
          )}
          {view.status === 'awaiting_node' && !expired && (
            <p>
              Wallet approved. Confirm the same amount and destination in your
              validator app.
            </p>
          )}
          {view.status === 'review_required' && !expired && (
            <p>
              Both confirmations received. Maintainer review and payment are
              separate steps.
            </p>
          )}
          {(expired || ['expired', 'cancelled'].includes(view.status)) && (
            <p>
              This request is closed. Return to your validator app to check the
              allocation.
            </p>
          )}
        </>
      )}
      <div className='flex flex-wrap items-center gap-4'>
        <Button
          variant='outline'
          disabled={busy}
          onClick={() => {
            setWalletError(null);
            setRevision((n) => n + 1);
          }}
        >
          <RefreshCw className='mr-2 h-4 w-4' />
          Refresh status
        </Button>
        <a
          href='/dashboard/validators'
          className='text-sm text-primary underline underline-offset-4'
        >
          Your validators
        </a>
      </div>
    </section>
  );
}
