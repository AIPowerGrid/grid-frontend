'use client';
import React from 'react';
import Link from 'next/link';
import PayoutWalletSection from './payout-wallet-section';
import PayoutPreferenceSection from './payout-preference-section';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { KeyRound } from 'lucide-react';

export default function SettingsViewPage() {
  return (
    <div className='mx-auto w-full max-w-3xl space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Settings</h1>
        <p className='mt-2 text-muted-foreground'>
          Manage your account and payout details.
        </p>
      </div>

      <PayoutWalletSection />

      <PayoutPreferenceSection />

      <Separator className='my-6' />

      <div className='flex items-center justify-between rounded-lg border p-4'>
        <div>
          <h3 className='font-semibold'>API keys</h3>
          <p className='text-sm text-muted-foreground'>
            Create and manage your keys on the API Keys page.
          </p>
        </div>
        <Button asChild variant='outline' className='gap-2'>
          <Link href='/dashboard/api-key'>
            <KeyRound className='h-4 w-4' />
            Manage keys
          </Link>
        </Button>
      </div>
    </div>
  );
}
