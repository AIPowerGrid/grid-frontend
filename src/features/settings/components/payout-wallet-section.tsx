'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const ADDR_RE = /^0x[0-9a-fA-F]{40}$/;

/**
 * Where worker earnings are paid. Like a miner's payout config — you point it
 * at any Base address, no signature needed. Separate from your login wallet.
 */
export default function PayoutWalletSection() {
  const [wallet, setWallet] = useState('');
  const [saved, setSaved] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/account', { cache: 'no-store' });
        const data = await res.json();
        const current = data?.payout_wallet || '';
        setWallet(current);
        setSaved(current);
      } catch {
        /* leave blank */
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const dirty = wallet.trim().toLowerCase() !== saved.toLowerCase();
  const valid = wallet.trim() === '' || ADDR_RE.test(wallet.trim());

  const save = async () => {
    setError(null);
    setOk(false);
    if (!valid) {
      setError('Enter a valid Base address (0x + 40 hex characters).');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet: wallet.trim() })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(
          data?.detail || data?.error || 'Could not save payout wallet.'
        );
        return;
      }
      setSaved(data?.payout_wallet || '');
      setWallet(data?.payout_wallet || '');
      setOk(true);
    } catch {
      setError('Could not save payout wallet.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payout wallet</CardTitle>
        <CardDescription>
          The Base address your worker earnings are paid to. No signature needed
          — like a miner&apos;s payout config. Leave blank if you don&apos;t run
          workers.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-3'>
        <div className='space-y-1.5'>
          <Label htmlFor='payout-wallet'>Base address (USDC)</Label>
          <Input
            id='payout-wallet'
            placeholder='0x…'
            value={wallet}
            disabled={loading || saving}
            onChange={(e) => {
              setWallet(e.target.value);
              setOk(false);
              setError(null);
            }}
            className='font-mono'
          />
          {!valid && (
            <p className='text-xs text-red-400'>
              Must be a 0x-prefixed 40-hex address.
            </p>
          )}
        </div>
        <div className='flex items-center gap-3'>
          <Button
            onClick={save}
            disabled={!dirty || !valid || saving || loading}
          >
            {saving ? 'Saving…' : 'Save payout wallet'}
          </Button>
          {ok && <span className='text-sm text-emerald-500'>Saved ✓</span>}
          {error && <span className='text-sm text-red-400'>{error}</span>}
        </div>
        <p className='text-xs text-muted-foreground'>
          Earnings accrue from work your workers complete and settle on Base
          each epoch. Until you set an address, your earnings accrue but
          can&apos;t be paid out.
        </p>
      </CardContent>
    </Card>
  );
}
