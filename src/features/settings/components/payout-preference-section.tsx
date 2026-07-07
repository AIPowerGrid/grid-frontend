'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface PayoutPref {
  asset: string;
  aipg_bps: number;
  assets: string[];
  par_assets: string[];
  conversion_fee_bps: number;
}

/**
 * Which asset a worker is paid in. USDC + AIPG are par (free); USDS + ETH are
 * batch-converted for a small swap fee. Saved as a preference — consumed when
 * multi-asset payout goes live (payouts settle in AIPG until then).
 */
export default function PayoutPreferenceSection() {
  const [pref, setPref] = useState<PayoutPref | null>(null);
  const [asset, setAsset] = useState('USDC');
  const [aipgPct, setAipgPct] = useState(0);
  const [savedAsset, setSavedAsset] = useState('USDC');
  const [savedPct, setSavedPct] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/account', { cache: 'no-store' });
        const data = await res.json();
        const p: PayoutPref | undefined = data?.payout;
        if (p) {
          setPref(p);
          setAsset(p.asset);
          setSavedAsset(p.asset);
          const pct = Math.round((p.aipg_bps ?? 0) / 100);
          setAipgPct(pct);
          setSavedPct(pct);
        }
      } catch {
        /* leave defaults */
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const feePct = ((pref?.conversion_fee_bps ?? 50) / 100).toFixed(2);
  const parAssets = pref?.par_assets ?? ['USDC', 'AIPG'];
  const assets = pref?.assets ?? ['USDC', 'USDS', 'ETH', 'AIPG'];
  const isPar = (a: string) => parAssets.includes(a);
  const dirty = asset !== savedAsset || aipgPct !== savedPct;

  const save = async () => {
    setError(null);
    setOk(false);
    setSaving(true);
    try {
      const res = await fetch('/api/account/payout-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ asset, aipg_bps: aipgPct * 100 })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.detail || data?.error || 'Could not save preference.');
        return;
      }
      setSavedAsset(asset);
      setSavedPct(aipgPct);
      setOk(true);
    } catch {
      setError('Could not save preference.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payout preference</CardTitle>
        <CardDescription>
          Choose the asset you&apos;re paid in. USDC and AIPG are free; USDS and
          ETH are converted for you for a {feePct}% swap fee (batched across
          payouts, so it&apos;s cheaper than doing it yourself). A free asset is
          always available if you&apos;d rather not pay the fee.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-5'>
        <div className='space-y-2'>
          <Label>Paid in</Label>
          <div className='flex flex-wrap gap-2'>
            {assets.map((a) => (
              <button
                key={a}
                type='button'
                onClick={() => {
                  setAsset(a);
                  setOk(false);
                }}
                disabled={loading || saving}
                className={[
                  'rounded-xl border px-4 py-2 text-sm transition-colors',
                  asset === a
                    ? 'border-indigo-500 bg-indigo-600 text-white'
                    : 'border-zinc-700 bg-zinc-800/40 text-zinc-200 hover:border-zinc-500'
                ].join(' ')}
              >
                <span className='font-medium'>{a}</span>
                <span
                  className={`ml-2 text-xs ${asset === a ? 'text-indigo-100' : 'text-muted-foreground'}`}
                >
                  {isPar(a) ? 'free' : `${feePct}% fee`}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <Label htmlFor='aipg-slice'>AIPG slice</Label>
            <span className='text-sm tabular-nums text-muted-foreground'>
              {aipgPct}% in AIPG
            </span>
          </div>
          <input
            id='aipg-slice'
            type='range'
            min={0}
            max={100}
            step={5}
            value={aipgPct}
            disabled={loading || saving}
            onChange={(e) => {
              setAipgPct(parseInt(e.target.value, 10));
              setOk(false);
            }}
            className='w-full accent-indigo-500'
          />
          <p className='text-xs text-muted-foreground'>
            How much of each payout is paid in AIPG (always free) vs your chosen
            asset above. More AIPG = more upside + network alignment.
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <Button onClick={save} disabled={!dirty || saving || loading}>
            {saving ? 'Saving…' : 'Save preference'}
          </Button>
          {ok && <span className='text-sm text-emerald-500'>Saved ✓</span>}
          {error && <span className='text-sm text-red-400'>{error}</span>}
        </div>

        <p className='text-xs text-muted-foreground'>
          Heads up: payouts currently settle in AIPG while multi-asset payout is
          being finished. Your choice here is saved and applies the moment it
          goes live.
        </p>
      </CardContent>
    </Card>
  );
}
