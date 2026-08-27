// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ValidatorOnboarding() {
  return (
    <section
      className='space-y-4 py-2'
      aria-labelledby='validator-onboarding-heading'
    >
      <div className='flex flex-wrap items-center gap-3'>
        <h2 id='validator-onboarding-heading' className='font-semibold'>
          Run a preview validator
        </h2>
        <Badge variant='outline'>Unsigned preview</Badge>
      </div>
      <ol className='grid list-inside list-decimal gap-4 text-sm md:grid-cols-3'>
        <li>
          <span className='font-medium'>Open the local operator app</span>
          <p className='mt-2 text-muted-foreground'>
            Windows: open the executable and choose Open local operator app.
            Linux and macOS: run <code>aipg-validator app</code>.
          </p>
        </li>
        <li>
          <span className='font-medium'>Set up node</span>
          <p className='mt-2 text-muted-foreground'>
            Approve a new dedicated identity on that machine. Keep existing
            configuration when upgrading. Never enter a funded wallet&apos;s
            private key.
          </p>
        </li>
        <li>
          <span className='font-medium'>Start validator</span>
          <p className='mt-2 text-muted-foreground'>
            Check registration, recent heartbeats, and accepted evidence in the
            local app. Google login and a Console key are not required.
          </p>
        </li>
      </ol>
      <div className='flex flex-wrap gap-3'>
        <Button asChild variant='outline' size='sm'>
          <a href='https://aipowergrid.io/validate'>
            <Download className='mr-2 h-4 w-4' />
            Downloads
          </a>
        </Button>
        <Button asChild variant='outline' size='sm'>
          <a href='https://aipowergrid.io/docs/validator-node'>
            <ExternalLink className='mr-2 h-4 w-4' />
            Setup guide
          </a>
        </Button>
      </div>
    </section>
  );
}
