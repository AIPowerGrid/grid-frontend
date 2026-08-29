// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

'use client';

import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { RefreshCw } from 'lucide-react';
import GoogleSignInButton from '@/features/auth/components/google-auth-button';
import Web3AuthButton from '@/features/auth/components/web3-auth-button';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import {
  clearPendingKeyCreation,
  rememberPendingKeyCreation,
  takePendingKeyCreation
} from '@/features/api-key/lib/pending-key-creation.mjs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
interface KeyRow {
  id: string;
  label: string | null;
  created: string | null;
  last_used: string | null;
  revoked: boolean;
}

interface AccountInfo {
  account_id: string;
  username: string;
  wallet: string;
  keys: KeyRow[];
}

interface PendingCreate {
  accountId: string;
  label: string;
}

function mutationError(status: number, action: 'create' | 'revoke') {
  if (
    status === 401 ||
    status === 403 ||
    (status === 404 && action === 'create')
  ) {
    return 'Sign in again with Google or a linked wallet to manage API keys.';
  }
  if (status === 429) return 'Too many requests. Wait a moment and try again.';
  if (status >= 500)
    return 'Grid is temporarily unavailable. Refresh the key list before retrying.';
  return `Could not ${action} this key. Refresh the key list and try again.`;
}

/**
 * v2 key management: list, create (plaintext shown exactly once), revoke.
 * Account management requires fresh Core-verified Google or wallet proof.
 * A definitely rejected creation may be retried once after fresh proof. The
 * intent is account-bound and consumed before sending; revokes and uncertain
 * failures always require another explicit click.
 */
export default function AccountKeys() {
  const [account, setAccount] = useState<AccountInfo | null>(null);
  const [legacy, setLegacy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [label, setLabel] = useState('');
  const [creating, setCreating] = useState(false);
  const [freshKey, setFreshKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [needsSignIn, setNeedsSignIn] = useState(false);
  const [revoking, setRevoking] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [pendingCreate, setPendingCreate] = useState<PendingCreate | null>(
    null
  );
  const pendingRetryChecked = useRef(false);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch('/api/account');
      if (res.status === 404) {
        // A readable website session does not guarantee a Core account token.
        setAccount(null);
        setLegacy(true);
        return;
      }
      if (!res.ok) throw new Error('Account fetch failed');
      setAccount(await res.json());
      setLegacy(false);
    } catch {
      setError('Could not refresh the key list. Try again.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const issueKey = useCallback(
    async (requestedLabel: string) => {
      const keyLabel = requestedLabel.trim() || 'api';
      setCreating(true);
      setError('');
      setNeedsSignIn(false);
      setPendingCreate(null);
      try {
        const res = await fetch('/api/account/keys', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ label: keyLabel })
        });
        if (!res.ok) {
          if (
            (res.status === 401 || res.status === 403 || res.status === 404) &&
            account
          ) {
            setNeedsSignIn(true);
          }
          if ((res.status === 401 || res.status === 403) && account) {
            setPendingCreate({
              accountId: account.account_id,
              label: keyLabel
            });
          }
          setError(mutationError(res.status, 'create'));
          return;
        }
        const data = await res.json();
        if (typeof data.api_key !== 'string' || !data.api_key) {
          throw new Error('Missing new key');
        }
        setPendingCreate(null);
        setFreshKey(data.api_key);
        setCopied(false);
        setLabel('');
        await refresh();
      } catch {
        setError(
          'Could not confirm key creation. Refresh the key list before trying again.'
        );
      } finally {
        setCreating(false);
      }
    },
    [account, refresh]
  );

  useEffect(() => {
    void refresh();
  }, [refresh]);

  useEffect(() => {
    if (loading || !account || pendingRetryChecked.current) return;
    pendingRetryChecked.current = true;
    const pending = takePendingKeyCreation(window.sessionStorage);
    if (!pending) return;
    if (pending.accountId !== account.account_id) {
      setError(
        'The signed-in account changed, so the pending key was not created.'
      );
      return;
    }
    void issueKey(pending.label);
  }, [account, issueKey, loading]);

  function createKey(e: React.FormEvent) {
    e.preventDefault();
    void issueKey(label);
  }

  function rememberRejectedCreation() {
    if (!pendingCreate) return;
    try {
      rememberPendingKeyCreation(window.sessionStorage, pendingCreate);
    } catch {
      setError(
        'Your browser could not preserve the pending request. Sign in, then click Create key again.'
      );
    }
  }

  function forgetRejectedCreation() {
    clearPendingKeyCreation(window.sessionStorage);
  }

  async function revoke(id: string) {
    if (
      !confirm('Revoke this key? Anything using it stops working immediately.')
    )
      return;
    setRevoking(id);
    setError('');
    setNeedsSignIn(false);
    setPendingCreate(null);
    try {
      const res = await fetch(`/api/account/keys/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) setNeedsSignIn(true);
        setError(mutationError(res.status, 'revoke'));
        return;
      }
      await refresh();
    } catch {
      setError(
        'Could not confirm revocation. Refresh the key list before trying again.'
      );
    } finally {
      setRevoking(null);
    }
  }

  async function copyKey() {
    if (!freshKey) return;
    try {
      await navigator.clipboard.writeText(freshKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Clipboard unavailable. Select and copy the displayed key.');
    }
  }

  if (loading) return <p className='text-muted-foreground'>Loading account…</p>;
  if (legacy)
    return (
      <div className='mx-auto w-full max-w-5xl'>
        <Card>
          <CardHeader>
            <CardTitle>Reconnect your account</CardTitle>
          </CardHeader>
          <CardContent className='space-y-3'>
            <p className='text-sm text-muted-foreground'>
              We couldn&apos;t find a Grid account proof for this session.
              Continue with the Google account or wallet already linked to your
              account.
            </p>
            <Suspense
              fallback={<p className='text-sm'>Loading sign-in options...</p>}
            >
              <div className='grid max-w-sm gap-3 [&_button]:mt-0'>
                <GoogleSignInButton returnTo='/dashboard/api-key' />
                <Web3AuthButton returnTo='/dashboard/api-key' />
              </div>
            </Suspense>
            <Button asChild variant='ghost'>
              <Link href='/api/auth/signout'>Use a different account</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );

  // Hide the internal dashboard-session key — it's console plumbing that
  // powers this UI and rotates on login, not a key the user manages.
  const userKeys = (account?.keys ?? []).filter(
    (k) => k.label !== 'dashboard-session'
  );

  return (
    <div className='mx-auto w-full max-w-5xl space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <p className='text-sm text-muted-foreground'>
            Keys are shown once at creation and stored only as hashes. Create
            one per app; revoke any of them independently.
          </p>
        </CardHeader>
        <CardContent className='space-y-6'>
          {account?.wallet && (
            <p className='text-sm'>
              <span className='text-muted-foreground'>Linked wallet: </span>
              <code className='break-all text-green-500'>{account.wallet}</code>
            </p>
          )}

          {/* One-time plaintext reveal */}
          {freshKey && (
            <div className='rounded-lg border border-green-600/40 bg-green-950/30 p-4'>
              <p className='mb-2 text-sm font-medium text-green-400'>
                New key created — copy it now, it won&apos;t be shown again.
              </p>
              <div className='flex items-center gap-2'>
                <Input readOnly value={freshKey} className='font-mono' />
                <Button onClick={copyKey} variant='secondary'>
                  {copied ? 'Copied ✓' : 'Copy'}
                </Button>
                <Button onClick={() => setFreshKey(null)} variant='ghost'>
                  Done
                </Button>
              </div>
            </div>
          )}

          <form onSubmit={createKey} className='flex flex-wrap gap-2'>
            <Input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder='Key label (e.g. my-agent, prod, laptop)'
              className='max-w-xs'
            />
            <Button type='submit' disabled={creating || revoking !== null}>
              {creating ? 'Creating…' : 'Create key'}
            </Button>
            <Button
              type='button'
              variant='outline'
              size='icon'
              title='Refresh key list'
              aria-label='Refresh key list'
              disabled={refreshing || creating || revoking !== null}
              onClick={() => void refresh()}
            >
              <RefreshCw className='h-4 w-4' />
            </Button>
          </form>
          {error && (
            <p role='alert' className='text-sm text-red-500'>
              {error}
            </p>
          )}
          {needsSignIn && (
            <div className='max-w-sm space-y-3'>
              <p className='text-sm text-muted-foreground'>
                Use the Google account or wallet already linked to this account.
                {pendingCreate
                  ? ' After fresh proof, this rejected creation will retry once.'
                  : ' After signing in, click Revoke again.'}
              </p>
              <Suspense
                fallback={<p className='text-sm'>Loading sign-in options...</p>}
              >
                <div className='grid gap-3 [&_button]:mt-0'>
                  <GoogleSignInButton
                    returnTo='/dashboard/api-key'
                    onBeforeSignIn={rememberRejectedCreation}
                    onSignInFailed={forgetRejectedCreation}
                  />
                  <Web3AuthButton
                    returnTo='/dashboard/api-key'
                    onBeforeSignIn={rememberRejectedCreation}
                    onSignInFailed={forgetRejectedCreation}
                  />
                </div>
              </Suspense>
            </div>
          )}

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key</TableHead>
                <TableHead>Label</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last used</TableHead>
                <TableHead>Status</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {userKeys.map((k) => (
                <TableRow key={k.id}>
                  <TableCell className='font-mono'>{k.id}…</TableCell>
                  <TableCell>{k.label ?? '—'}</TableCell>
                  <TableCell>
                    {k.created ? new Date(k.created).toLocaleDateString() : '—'}
                  </TableCell>
                  <TableCell>
                    {k.last_used
                      ? new Date(k.last_used).toLocaleString()
                      : 'never'}
                  </TableCell>
                  <TableCell>
                    <Badge variant={k.revoked ? 'destructive' : 'default'}>
                      {k.revoked ? 'revoked' : 'active'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {!k.revoked && (
                      <Button
                        variant='ghost'
                        size='sm'
                        disabled={creating || revoking !== null}
                        onClick={() => void revoke(k.id)}
                      >
                        {revoking === k.id ? 'Revoking...' : 'Revoke'}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {userKeys.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className='text-center'>
                    No keys yet — create your first one above.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
