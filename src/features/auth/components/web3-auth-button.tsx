'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ethers } from 'ethers';

export default function Web3AuthButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWeb3SignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Safely detect ethereum provider - handle multiple wallet extensions
      let ethereum = null;

      // Check for ethereum on window - use try/catch to handle property definition conflicts
      if (typeof window !== 'undefined') {
        try {
          // Try to access ethereum safely
          const win = window as any;

          // Check if ethereum exists and can be accessed
          if (win.ethereum) {
            // Handle case where multiple wallets are installed (ethereum.providers is an array)
            if (Array.isArray(win.ethereum.providers)) {
              // Prefer MetaMask if available, otherwise use the first provider
              ethereum =
                win.ethereum.providers.find((p: any) => p?.isMetaMask) ||
                win.ethereum.providers[0];
            } else if (Array.isArray(win.ethereum)) {
              // Some wallet extensions expose ethereum as an array directly
              ethereum =
                win.ethereum.find((p: any) => p?.isMetaMask) || win.ethereum[0];
            } else {
              // Single provider or standard format
              ethereum = win.ethereum;
            }
          } else if (win.web3?.currentProvider) {
            // Fallback to older web3 providers
            ethereum = win.web3.currentProvider;
          }
        } catch (err) {
          // If there's an error accessing ethereum, try alternative methods
          console.warn('Error accessing window.ethereum:', err);
          // Try direct property access
          const win = window as any;
          if (win.metamask) {
            ethereum = win.metamask;
          }
        }
      }

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

      // Fetch nonce from server
      const nonceResponse = await fetch('/api/auth/nonce');
      if (!nonceResponse.ok) {
        throw new Error('Failed to fetch authentication challenge');
      }
      const { nonce } = await nonceResponse.json();

      // Create the message to sign
      const message = `Sign in to AIPG Grid\n\nNonce: ${nonce}`;

      // Sign the message
      const signature = await signer.signMessage(message);

      // Sign in with NextAuth using credentials
      const result = await signIn('web3', {
        address,
        signature,
        nonce,
        redirect: false,
        callbackUrl: callbackUrl ?? '/dashboard'
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      // Redirect manually after successful sign in
      if (result?.ok) {
        window.location.href = callbackUrl ?? '/dashboard';
      }
    } catch (err) {
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
        onClick={handleWeb3SignIn}
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
            Continue with Wallet
          </>
        )}
      </Button>
      {error && (
        <p className='mt-2 text-center text-sm text-red-500'>{error}</p>
      )}
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: {
        method: string;
        params?: unknown[];
      }) => Promise<unknown>;
      isMetaMask?: boolean;
      providers?: Array<{
        request: (args: {
          method: string;
          params?: unknown[];
        }) => Promise<unknown>;
        isMetaMask?: boolean;
      }>;
    };
    web3?: {
      currentProvider?: {
        request: (args: {
          method: string;
          params?: unknown[];
        }) => Promise<unknown>;
      };
    };
  }
}
