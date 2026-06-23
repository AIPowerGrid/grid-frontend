'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

/**
 * v2 key management: list, create (plaintext shown exactly once), revoke.
 * Falls back to the legacy single-key generator for sessions that predate
 * grid accounts.
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

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/account');
      if (res.status === 404) {
        // No grid account on this session (pre-v2 login) — legacy flow.
        setLegacy(true);
        return;
      }
      if (!res.ok) throw new Error('Account fetch failed');
      setAccount(await res.json());
    } catch (e: any) {
      setError(e.message ?? 'Could not load account');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  async function createKey(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    setError('');
    try {
      const res = await fetch('/api/account/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ label: label || 'api' })
      });
      if (!res.ok) throw new Error('Key creation failed');
      const data = await res.json();
      setFreshKey(data.api_key);
      setLabel('');
      await refresh();
    } catch (e: any) {
      setError(e.message ?? 'Key creation failed');
    } finally {
      setCreating(false);
    }
  }

  async function revoke(id: string) {
    if (
      !confirm('Revoke this key? Anything using it stops working immediately.')
    )
      return;
    await fetch(`/api/account/keys/${id}`, { method: 'DELETE' });
    await refresh();
  }

  async function copyKey() {
    if (!freshKey) return;
    await navigator.clipboard.writeText(freshKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (loading) return <p className='text-muted-foreground'>Loading account…</p>;
  if (legacy)
    return (
      <div className='mx-auto w-full max-w-4xl'>
        <Card>
          <CardHeader>
            <CardTitle>Reconnect your account</CardTitle>
          </CardHeader>
          <CardContent className='space-y-3'>
            <p className='text-sm text-muted-foreground'>
              We couldn&apos;t find a grid account for this session. Sign out
              and sign back in to provision one, then your API keys will appear
              here.
            </p>
            <Button asChild variant='outline'>
              <a href='/api/auth/signout'>Sign out</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );

  return (
    <div className='mx-auto w-full max-w-4xl space-y-6'>
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
              <code className='text-green-500'>{account.wallet}</code>
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

          <form onSubmit={createKey} className='flex gap-2'>
            <Input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder='Key label (e.g. my-agent, prod, laptop)'
              className='max-w-xs'
            />
            <Button type='submit' disabled={creating}>
              {creating ? 'Creating…' : 'Create key'}
            </Button>
          </form>
          {error && <p className='text-sm text-red-500'>{error}</p>}

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
              {(account?.keys ?? []).map((k) => (
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
                    {!k.revoked && k.label !== 'dashboard-session' && (
                      <Button
                        variant='ghost'
                        size='sm'
                        onClick={() => revoke(k.id)}
                      >
                        Revoke
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {(account?.keys ?? []).length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className='text-center'>
                    No keys yet — create your first one above.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <p className='text-xs text-muted-foreground'>
            The <code>dashboard-session</code> key powers this console and
            rotates automatically on every login.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
