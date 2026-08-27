// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

'use client';

import { Suspense } from 'react';
import GoogleSignInButton from '@/features/auth/components/google-auth-button';
import Web3AuthButton from '@/features/auth/components/web3-auth-button';

export function PairingStepUp({ returnTo }: { returnTo: string }) {
  return (
    <div className='max-w-sm space-y-3'>
      <p className='text-sm text-muted-foreground'>
        Use the Google account or wallet already linked to your AIPG account.
        Signing in does not approve or remove a node.
      </p>
      <Suspense
        fallback={<p className='text-sm'>Loading sign-in options...</p>}
      >
        <div className='grid gap-3 [&_button]:mt-0'>
          <GoogleSignInButton returnTo={returnTo} />
          <Web3AuthButton returnTo={returnTo} />
        </div>
      </Suspense>
    </div>
  );
}
