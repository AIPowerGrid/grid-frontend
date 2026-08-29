// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

'use client';

import { Suspense, useEffect, useState } from 'react';
import { Bot, Check, ExternalLink, KeyRound, RefreshCw, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import GoogleSignInButton from '@/features/auth/components/google-auth-button';
import Web3AuthButton from '@/features/auth/components/web3-auth-button';
import {
  OAuthAuthorizationView,
  OAuthRequestError,
  oauthAuthorizationViewSchema,
  oauthRedirectSchema,
  readOAuthResponse
} from '@/lib/oauth-authorization';

const scopeCopy = {
  'account.read': {
    title: 'Read account status',
    description: 'View your Grid credit balance and available models.'
  },
  'inference.submit': {
    title: 'Run AI jobs',
    description: 'Submit metered text, image, video, and audio requests.'
  }
} as const;

export default function OAuthConsent({
  requestCapability
}: {
  requestCapability: string;
}) {
  const [view, setView] = useState<OAuthAuthorizationView | null>(null);
  const [error, setError] = useState<OAuthRequestError | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<'approve' | 'deny' | null>(null);
  const [revision, setRevision] = useState(0);
  const returnTo = `/oauth/authorize?request=${encodeURIComponent(requestCapability)}`;

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const next = await readOAuthResponse(
          await fetch(
            `/api/oauth/authorization?request=${encodeURIComponent(requestCapability)}`,
            { cache: 'no-store', signal: controller.signal }
          ),
          oauthAuthorizationViewSchema
        );
        if (controller.signal.aborted) return;
        setView(next);
        setError(null);
      } catch (cause) {
        if (controller.signal.aborted) return;
        setView(null);
        setError(
          cause instanceof OAuthRequestError
            ? cause
            : new OAuthRequestError(502)
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void load();
    return () => controller.abort();
  }, [requestCapability, revision]);

  async function decide(approve: boolean) {
    if (!view || busy) return;
    setBusy(approve ? 'approve' : 'deny');
    setError(null);
    try {
      const result = await readOAuthResponse(
        await fetch('/api/oauth/authorization', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ request: requestCapability, approve }),
          cache: 'no-store'
        }),
        oauthRedirectSchema
      );
      window.location.assign(result.redirect_to);
    } catch (cause) {
      setError(
        cause instanceof OAuthRequestError ? cause : new OAuthRequestError(502)
      );
      setBusy(null);
    }
  }

  return (
    <section className='mx-auto w-full min-w-0 max-w-2xl space-y-6 py-6'>
      <header className='space-y-3'>
        <div className='flex items-center gap-3'>
          <Bot className='h-6 w-6 text-primary' aria-hidden='true' />
          <h1 className='text-2xl font-semibold'>Authorize agent</h1>
        </div>
        <p className='text-sm text-muted-foreground'>
          Review the access request before connecting this agent to your AI
          Power Grid account.
        </p>
      </header>

      {loading && (
        <p role='status' className='text-sm'>
          Checking authorization request...
        </p>
      )}

      {error && (
        <div className='space-y-4'>
          <Alert variant='destructive'>
            <AlertTitle>Authorization not completed</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
          {[401, 403].includes(error.status) && (
            <div className='max-w-sm space-y-3'>
              <p className='text-sm text-muted-foreground'>
                Confirm with the Google account or wallet linked to this Grid
                account. Signing in does not approve the agent.
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
          )}
          <Button
            variant='outline'
            onClick={() => {
              setLoading(true);
              setRevision((value) => value + 1);
            }}
          >
            <RefreshCw className='mr-2 h-4 w-4' />
            Retry
          </Button>
        </div>
      )}

      {view && (
        <>
          <div className='border-y py-5'>
            <p className='text-sm text-muted-foreground'>Application</p>
            <p className='mt-1 break-words text-lg font-semibold'>
              {view.client_name}
            </p>
            <p className='mt-3 flex min-w-0 items-center gap-2 text-sm text-muted-foreground'>
              <ExternalLink className='h-4 w-4 shrink-0' aria-hidden='true' />
              <span className='min-w-0 break-all'>
                Returns to {view.redirect_host}
              </span>
            </p>
          </div>

          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <KeyRound className='h-5 w-5 text-primary' aria-hidden='true' />
              <h2 className='text-lg font-semibold'>Requested access</h2>
            </div>
            <ul className='divide-y border-y'>
              {view.scopes.map((scope) => (
                <li key={scope} className='flex gap-3 py-4'>
                  <Check
                    className='mt-0.5 h-4 w-4 shrink-0 text-emerald-600'
                    aria-hidden='true'
                  />
                  <div>
                    <p className='font-medium'>{scopeCopy[scope].title}</p>
                    <p className='mt-1 text-sm text-muted-foreground'>
                      {scopeCopy[scope].description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className='text-sm text-muted-foreground'>
            Access expires after 15 minutes. The agent receives no password,
            wallet key, API key, or permission to manage your account.
          </p>

          <div className='flex flex-wrap gap-3'>
            <Button onClick={() => void decide(true)} disabled={busy !== null}>
              <Check className='mr-2 h-4 w-4' />
              {busy === 'approve' ? 'Authorizing...' : 'Authorize agent'}
            </Button>
            <Button
              variant='outline'
              onClick={() => void decide(false)}
              disabled={busy !== null}
            >
              <X className='mr-2 h-4 w-4' />
              {busy === 'deny' ? 'Denying...' : 'Deny'}
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
