'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { safeCallbackUrl } from '@/lib/safe-callback-url';

export default function GoogleSignInButton({
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

  return (
    <Button
      className='w-full'
      variant='outline'
      type='button'
      onClick={async () => {
        onBeforeSignIn?.();
        try {
          await signIn('google', { callbackUrl });
        } catch {
          onSignInFailed?.();
        }
      }}
    >
      <Icons.google className='mr-2 h-4 w-4' />
      Continue with Google
    </Button>
  );
}
