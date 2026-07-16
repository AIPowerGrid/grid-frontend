'use client';

import { useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Cpu,
  KeyRound,
  Loader2,
  ShieldCheck,
  Wallet
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GoogleSignInButton from '@/features/auth/components/google-auth-button';
import Web3AuthButton from '@/features/auth/components/web3-auth-button';

interface EnrollmentIntent {
  enrollment_id: string;
  status: 'pending' | 'prepared' | 'complete' | 'activated';
  worker_signer: string;
  worker_name: string;
  profile_id: string;
  expires_at: number;
  chain_id: number;
  audience: string;
}

interface DelegationPayload {
  version: number;
  chain_id: number;
  audience: string;
  delegation_id: string;
  payout_wallet: string;
  worker_signer: string;
  worker_name: string;
  issued_at: number;
  expires_at: number;
}

type ViewState = 'loading' | 'ready' | 'signing' | 'complete' | 'failed';

export default function WorkerEnrollment({
  enrollmentId
}: {
  enrollmentId: string;
}) {
  const [intent, setIntent] = useState<EnrollmentIntent | null>(null);
  const [view, setView] = useState<ViewState>('loading');
  const [error, setError] = useState<string | null>(null);
  const [needsStepUp, setNeedsStepUp] = useState(false);
  const [replacementWallet, setReplacementWallet] = useState<string | null>(
    null
  );
  const returnTo = `/dashboard/connect-worker/${enrollmentId}`;

  const loadIntent = useCallback(async () => {
    setError(null);
    const response = await fetch(`/api/worker-enrollments/${enrollmentId}`, {
      cache: 'no-store'
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(
        apiMessage(body, 'This pairing link is invalid or expired.')
      );
    }
    const value = parseEnrollmentIntent(body, enrollmentId);
    setIntent(value);
    setView(
      value.status === 'complete' || value.status === 'activated'
        ? 'complete'
        : 'ready'
    );
  }, [enrollmentId]);

  useEffect(() => {
    void loadIntent().catch((reason) => {
      setError(
        reason instanceof Error ? reason.message : 'Could not load worker'
      );
      setView('failed');
    });
  }, [loadIntent]);

  async function approveWorker(replacePayoutWallet: boolean) {
    if (!intent) return;
    setView('signing');
    setError(null);
    setNeedsStepUp(false);
    let payoutWallet = '';
    try {
      const signer = await browserSigner();
      payoutWallet = (await signer.getAddress()).toLowerCase();
      const prepared = await postJson(
        `/api/worker-enrollments/${enrollmentId}/prepare`,
        {
          payout_wallet: payoutWallet,
          replace_payout_wallet: replacePayoutWallet
        }
      );
      const delegation = verifiedDelegation(prepared, intent, payoutWallet);
      const signature = await signer.signMessage(delegation.message);
      const recovered = ethers.verifyMessage(delegation.message, signature);
      if (recovered.toLowerCase() !== payoutWallet) {
        throw new Error(
          'The connected wallet did not produce the expected signature.'
        );
      }
      await postJson(`/api/worker-enrollments/${enrollmentId}/approve`, {
        signature
      });
      setReplacementWallet(null);
      setView('complete');
    } catch (reason) {
      if (reason instanceof EnrollmentHttpError) {
        if (reason.status === 401 || reason.status === 403) {
          setNeedsStepUp(true);
        }
        if (reason.status === 409 && !replacePayoutWallet) {
          setReplacementWallet(payoutWallet);
        }
      }
      setError(
        reason instanceof Error ? reason.message : 'Worker approval failed'
      );
      setView('ready');
    }
  }

  if (view === 'loading') {
    return (
      <div className='flex min-h-64 w-full items-center justify-center'>
        <Loader2 className='h-6 w-6 animate-spin text-muted-foreground' />
      </div>
    );
  }

  if (!intent) {
    return (
      <Alert variant='destructive' className='mx-auto max-w-2xl'>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>Pairing unavailable</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  const expired = intent.expires_at * 1000 <= Date.now();
  const complete = view === 'complete';

  return (
    <div className='mx-auto w-full max-w-3xl space-y-6'>
      <div className='space-y-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <Badge variant={complete ? 'default' : 'secondary'}>
            {complete ? 'Approved' : 'Waiting for approval'}
          </Badge>
          <span className='flex items-center gap-1 text-xs text-muted-foreground'>
            <Clock3 className='h-3.5 w-3.5' />
            Expires {formatTime(intent.expires_at)}
          </span>
        </div>
        <h1 className='text-2xl font-bold'>Connect {intent.worker_name}</h1>
        <p className='text-sm text-muted-foreground'>
          Verify this rig and choose the Base wallet that receives its worker
          rewards.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-base'>
            <Cpu className='h-4 w-4' /> Worker identity
          </CardTitle>
        </CardHeader>
        <CardContent className='divide-y p-0'>
          <Detail label='Worker' value={intent.worker_name} />
          <Detail label='Profile' value={intent.profile_id} />
          <Detail
            label='Worker signer'
            value={shortAddress(intent.worker_signer)}
            mono
          />
          <Detail label='Network' value={`Base · chain ${intent.chain_id}`} />
        </CardContent>
      </Card>

      {complete ? (
        <Alert>
          <CheckCircle2 className='h-4 w-4' />
          <AlertTitle>Worker approved</AlertTitle>
          <AlertDescription>
            The manager is verifying the delegation and activating its
            worker-only credential. You can close this page.
          </AlertDescription>
        </Alert>
      ) : (
        <section className='space-y-4 border-t pt-5'>
          <div className='flex gap-3'>
            <ShieldCheck className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
            <div>
              <h2 className='font-semibold'>Approve a limited delegation</h2>
              <p className='mt-1 text-sm text-muted-foreground'>
                This signs a message, not a transaction. The rig receives only a
                worker connection key. It cannot spend credits or manage your
                account.
              </p>
            </div>
          </div>

          {error && (
            <Alert variant='destructive'>
              <AlertCircle className='h-4 w-4' />
              <AlertTitle>Could not approve worker</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {replacementWallet && (
            <Alert>
              <Wallet className='h-4 w-4' />
              <AlertTitle>Replace the payout wallet?</AlertTitle>
              <AlertDescription className='space-y-3'>
                <p>
                  This account already pays another wallet. Continuing changes
                  future worker rewards to {shortAddress(replacementWallet)}.
                </p>
                <Button
                  type='button'
                  size='sm'
                  variant='outline'
                  onClick={() => void approveWorker(true)}
                  disabled={view === 'signing'}
                >
                  Confirm replacement
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {needsStepUp && (
            <div className='grid gap-2 sm:grid-cols-2'>
              <GoogleSignInButton returnTo={returnTo} />
              <Web3AuthButton returnTo={returnTo} />
            </div>
          )}

          <Button
            type='button'
            className='gap-2'
            onClick={() => void approveWorker(false)}
            disabled={view === 'signing' || expired}
          >
            {view === 'signing' ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <KeyRound className='h-4 w-4' />
            )}
            {expired ? 'Pairing link expired' : 'Connect payout wallet'}
          </Button>
        </section>
      )}
    </div>
  );
}

function Detail({
  label,
  value,
  mono = false
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className='grid gap-1 px-6 py-4 sm:grid-cols-[9rem_1fr] sm:items-center'>
      <span className='text-sm text-muted-foreground'>{label}</span>
      <span className={mono ? 'font-mono text-sm' : 'text-sm font-medium'}>
        {value}
      </span>
    </div>
  );
}

class EnrollmentHttpError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
  }
}

async function postJson(url: string, body: unknown) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new EnrollmentHttpError(
      response.status,
      apiMessage(result, 'Core rejected the worker approval.')
    );
  }
  return result;
}

async function browserSigner() {
  const injected = (window as any).ethereum;
  const provider = Array.isArray(injected?.providers)
    ? (injected.providers.find((item: any) => item?.isMetaMask) ??
      injected.providers[0])
    : injected;
  if (!provider?.request) {
    throw new Error('Install or open an Ethereum wallet to continue.');
  }
  await provider.request({ method: 'eth_requestAccounts' });
  return new ethers.BrowserProvider(provider).getSigner();
}

function apiMessage(body: any, fallback: string) {
  return typeof body?.detail === 'string'
    ? body.detail
    : typeof body?.error === 'string'
      ? body.error
      : fallback;
}

function shortAddress(value: string) {
  return value ? `${value.slice(0, 8)}…${value.slice(-6)}` : 'Unknown';
}

function formatTime(timestamp: number) {
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date(timestamp * 1000));
}

function verifiedDelegation(
  value: unknown,
  intent: EnrollmentIntent,
  payoutWallet: string
): { message: string; payload: DelegationPayload } {
  if (!isRecord(value) || typeof value.message !== 'string') {
    throw new Error('Core returned a malformed worker delegation.');
  }
  const payload = value.payload;
  if (!isRecord(payload)) {
    throw new Error('Core returned a malformed worker delegation.');
  }
  const expectedFields = [
    'audience',
    'chain_id',
    'delegation_id',
    'expires_at',
    'issued_at',
    'payout_wallet',
    'version',
    'worker_name',
    'worker_signer'
  ];
  if (Object.keys(payload).sort().join(',') !== expectedFields.join(',')) {
    throw new Error('Core returned unsupported worker delegation fields.');
  }
  const issuedAt = payload.issued_at;
  const expiresAt = payload.expires_at;
  if (
    payload.version !== 1 ||
    payload.chain_id !== intent.chain_id ||
    payload.audience !== intent.audience ||
    payload.payout_wallet !== payoutWallet ||
    payload.worker_signer !== intent.worker_signer.toLowerCase() ||
    payload.worker_name !== intent.worker_name ||
    typeof payload.delegation_id !== 'string' ||
    !/^[0-9a-f]{32}$/.test(payload.delegation_id) ||
    typeof issuedAt !== 'number' ||
    !Number.isInteger(issuedAt) ||
    typeof expiresAt !== 'number' ||
    !Number.isInteger(expiresAt) ||
    expiresAt <= issuedAt ||
    expiresAt - issuedAt > 365 * 24 * 60 * 60
  ) {
    throw new Error('Worker delegation does not match this pairing request.');
  }
  const message = `aipg-worker-delegation:v1:${canonicalJson(payload)}`;
  if (value.message !== message) {
    throw new Error('Worker delegation message is not canonical.');
  }
  return { message, payload: payload as unknown as DelegationPayload };
}

function parseEnrollmentIntent(
  value: unknown,
  enrollmentId: string
): EnrollmentIntent {
  if (!isRecord(value)) {
    throw new Error('Core returned a malformed worker pairing request.');
  }
  const statuses = new Set(['pending', 'prepared', 'complete', 'activated']);
  if (
    value.enrollment_id !== enrollmentId ||
    typeof value.status !== 'string' ||
    !statuses.has(value.status) ||
    typeof value.worker_signer !== 'string' ||
    !/^0x[0-9a-f]{40}$/.test(value.worker_signer) ||
    typeof value.worker_name !== 'string' ||
    !value.worker_name ||
    value.worker_name.length > 120 ||
    typeof value.profile_id !== 'string' ||
    !value.profile_id ||
    value.profile_id.length > 128 ||
    typeof value.expires_at !== 'number' ||
    !Number.isInteger(value.expires_at) ||
    typeof value.chain_id !== 'number' ||
    !Number.isSafeInteger(value.chain_id) ||
    value.chain_id <= 0 ||
    typeof value.audience !== 'string' ||
    !value.audience ||
    value.audience.length > 200
  ) {
    throw new Error('Core returned a malformed worker pairing request.');
  }
  return value as unknown as EnrollmentIntent;
}

function canonicalJson(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalJson).join(',')}]`;
  }
  if (isRecord(value)) {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${asciiJson(key)}:${canonicalJson(value[key])}`)
      .join(',')}}`;
  }
  return asciiJson(value);
}

function asciiJson(value: unknown): string {
  const encoded = JSON.stringify(value);
  if (encoded === undefined) {
    throw new Error('Core returned a non-canonical worker delegation value.');
  }
  return encoded.replace(
    /[\u0080-\uFFFF]/g,
    (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, '0')}`
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
