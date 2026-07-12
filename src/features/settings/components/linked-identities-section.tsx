'use client';

import { useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CheckCircle2, Link2, Loader2, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LinkedIdentity {
  kind: string;
  display_hint?: string | null;
  primary: boolean;
  verified: boolean;
}

function identityLabel(kind: string) {
  return { google: 'Google', github: 'GitHub', wallet: 'Wallet' }[kind] ?? kind;
}

export default function LinkedIdentitiesSection() {
  const [identities, setIdentities] = useState<LinkedIdentity[]>([]);
  const [loading, setLoading] = useState(true);
  const [linking, setLinking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const response = await fetch('/api/account', { cache: 'no-store' });
    if (!response.ok) throw new Error('Could not load linked identities');
    const account = await response.json();
    setIdentities(account.identities ?? []);
  }, []);

  useEffect(() => {
    void refresh()
      .catch((reason) =>
        setError(
          reason instanceof Error ? reason.message : 'Could not load account'
        )
      )
      .finally(() => setLoading(false));
  }, [refresh]);

  async function linkWallet() {
    setLinking(true);
    setError(null);
    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum?.request) {
        throw new Error('Install or open an Ethereum wallet to continue');
      }
      await ethereum.request({ method: 'eth_requestAccounts' });
      const signer = await new ethers.BrowserProvider(ethereum).getSigner();
      const address = await signer.getAddress();
      const nonceResponse = await fetch(
        '/api/account/identities/wallet/nonce',
        { method: 'POST' }
      );
      if (!nonceResponse.ok) throw new Error('Could not create wallet proof');
      const challenge = await nonceResponse.json();
      const message = `Link wallet to AIPG Grid account ${challenge.account_id}\n\nNonce: ${challenge.nonce}`;
      const signature = await signer.signMessage(message);
      const response = await fetch('/api/account/identities/wallet/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature, address })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.detail ?? result.error ?? 'Wallet link failed');
      }
      await refresh();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Wallet link failed');
    } finally {
      setLinking(false);
    }
  }

  return (
    <section className='space-y-4 border-b pb-6'>
      <div>
        <h2 className='flex items-center gap-2 text-lg font-semibold'>
          <Link2 className='h-4 w-4' /> Linked sign-in methods
        </h2>
        <p className='mt-1 text-sm text-muted-foreground'>
          Google and wallet sign-in can share one Grid account, credit balance,
          workers, and payout history.
        </p>
      </div>

      <div className='space-y-2'>
        {loading ? (
          <Loader2 className='h-4 w-4 animate-spin text-muted-foreground' />
        ) : (
          identities.map((identity) => (
            <div
              key={`${identity.kind}:${identity.display_hint ?? ''}`}
              className='flex items-center justify-between border-b py-2 last:border-0'
            >
              <div>
                <p className='font-medium'>{identityLabel(identity.kind)}</p>
                {identity.kind === 'wallet' && identity.display_hint && (
                  <p className='font-mono text-xs text-muted-foreground'>
                    {identity.display_hint}
                  </p>
                )}
              </div>
              {identity.verified && (
                <span className='flex items-center gap-1 text-xs text-muted-foreground'>
                  <CheckCircle2 className='h-3.5 w-3.5' /> Verified
                </span>
              )}
            </div>
          ))
        )}
      </div>

      <Button
        type='button'
        variant='outline'
        className='gap-2'
        onClick={linkWallet}
        disabled={linking}
      >
        {linking ? (
          <Loader2 className='h-4 w-4 animate-spin' />
        ) : (
          <Wallet className='h-4 w-4' />
        )}
        Link wallet
      </Button>
      <p className='text-xs text-muted-foreground'>
        If the wallet already owns a Grid account, Core merges it only after
        both this session and the wallet signature are verified.
      </p>
      {error && <p className='text-sm text-destructive'>{error}</p>}
    </section>
  );
}
