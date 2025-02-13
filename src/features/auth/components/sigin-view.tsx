import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage() {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/examples/authentication'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: 'url(/imagegenexample.png)' }}
        />
        <div className='absolute inset-0 bg-black/60' />{' '}
        {/* Darkening overlay */}
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <img src='/aipgweblogo.png' alt='AI Power Grid' className='h-6' />
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;The Grid is powered by the revolutionary AI Power
              Grid—using decentralization and artificial intelligence to form a
              dynamic network of workers that power your next application
              seamlessly.&rdquo;
            </p>
            <footer className='text-sm'>AI Grid Network</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]'>
          <div className='mb-6 flex justify-center'>
            <img
              src='/aipg-main.png'
              alt='AIPG Main Logo'
              className='h-16 w-auto'
            />
          </div>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
            <p className='text-sm text-muted-foreground'>
              Authenticate to enter The Grid
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
