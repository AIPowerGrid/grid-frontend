'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className='w-full'
      variant='outline'
      type='button'
      onClick={() =>
        signIn('google', { callbackUrl: callbackUrl ?? '/dashboard' })
      }
    >
      <Icons.google className='mr-2 h-4 w-4' />
      Continue with Google
    </Button>
  );
}
