'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ethers } from 'ethers';
import { safeCallbackUrl } from '@/lib/safe-callback-url';
import type { WalletProviderOption } from '@/features/funding/components/wallet-providers';
import { watchWalletProviders } from '@/features/funding/components/wallet-providers';

export default function Web3AuthButton({
  returnTo,
  onBeforeSignIn,
  onSignInFailed
}: {
  returnTo?: string;
  onBeforeSignIn?: () => void;
  onSignInFailed?: () => void;
} = {}) {
  const searchParams = useSearchParams();
  const callbackUrl = safeCallbackUrl(
    returnTo ?? searchParams.get('callbackUrl')
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [wallets, setWallets] = useState<WalletProviderOption[]>([]);
  const [choosing, setChoosing] = useState(false);

  useEffect(() => watchWalletProviders(setWallets), []);

  // Wallets that announce themselves (EIP-6963) are listed by name. The legacy
  // `window.ethereum` slot is whichever extension won a race, so it is offered
  // only when no wallet announced itself.
  const announced = wallets.filter((w) => !w.id.startsWith('injected-'));
  const options = announced.length ? announced : wallets.slice(0, 1);

  const handleConnectClick = () => {
    setError(null);
    if (options.length > 1) {
      setChoosing(true);
      return;
    }
    void handleWeb3SignIn(options[0]);
  };

  const handleWeb3SignIn = async (option?: WalletProviderOption) => {
    setChoosing(false);
    setIsLoading(true);
    setError(null);

    try {
      const ethereum = option?.provider;
      if (!ethereum) {
        throw new Error(
          'Please install MetaMask or another Web3 wallet extension'
        );
      }

      // Request account access
      await ethereum.request({ method: 'eth_requestAccounts' });

      // Get the provider and signer
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      // Fetch the complete Core-issued EIP-4361 message. Sign it verbatim;
      // reconstructing it client-side would weaken the origin/time binding.
      const nonceResponse = await fetch('/api/auth/nonce', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address })
      });
      if (!nonceResponse.ok) {
        throw new Error('Failed to fetch authentication challenge');
      }
      const { nonce, message } = await nonceResponse.json();
      if (!nonce || !message) {
        throw new Error('Invalid authentication challenge');
      }

      // Sign the message
      const signature = await signer.signMessage(message);

      // Sign in with NextAuth using credentials
      onBeforeSignIn?.();
      const result = await signIn('web3', {
        address,
        signature,
        nonce,
        message,
        redirect: false,
        callbackUrl
      });

      if (result?.error) {
        onSignInFailed?.();
        throw new Error(result.error);
      }

      // Redirect manually after successful sign in
      if (result?.ok) {
        window.location.href = callbackUrl;
      }
    } catch (err) {
      onSignInFailed?.();
      console.error('Web3 authentication error:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to authenticate with wallet'
      );
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full'>
      <Button
        className='mt-4 w-full'
        variant='outline'
        type='button'
        onClick={handleConnectClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            Connecting...
          </>
        ) : (
          <>
            <Icons.wallet className='mr-2 h-4 w-4' />
            Connect Wallet
          </>
        )}
      </Button>
      {choosing && (
        <div
          className='mt-2 flex flex-col gap-2 rounded-md border p-3'
          role='group'
          aria-label='Choose a wallet'
        >
          <p className='text-center text-xs text-muted-foreground'>
            Choose the wallet to sign in with
          </p>
          {options.map((option) => (
            <Button
              key={option.id}
              className='w-full'
              variant='outline'
              type='button'
              onClick={() => void handleWeb3SignIn(option)}
            >
              {option.name}
            </Button>
          ))}
          <Button
            className='w-full'
            variant='ghost'
            type='button'
            onClick={() => setChoosing(false)}
          >
            Cancel
          </Button>
        </div>
      )}
      {error && (
        <p className='mt-2 text-center text-sm text-red-500'>{error}</p>
      )}
    </div>
  );
}
