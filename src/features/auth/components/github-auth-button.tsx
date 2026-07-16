'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { safeCallbackUrl } from '@/lib/safe-callback-url';

export default function GithubSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = safeCallbackUrl(searchParams.get('callbackUrl'));

  return (
    <Button
      className='mt-4 w-full'
      variant='outline'
      type='button'
      onClick={() => signIn('github', { callbackUrl })}
    >
      <Icons.gitHub className='mr-2 h-4 w-4' />
      Continue with Github
    </Button>
  );
}
