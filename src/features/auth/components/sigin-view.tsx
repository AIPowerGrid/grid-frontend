import type { Metadata } from 'next';
import UserAuthForm from './user-auth-form';

export const metadata: Metadata = {
  title: 'Sign in — AI Power Grid Console',
  description: 'Sign in to the AI Power Grid developer console.'
};

export default function SignInViewPage() {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
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
          <blockquote className='space-y-3'>
            <p className='text-2xl font-medium leading-snug'>
              The last revolution was metered in kilowatt-hours.
              <br />
              This one is metered in tokens.
            </p>
            <footer className='text-sm text-white/70'>
              AI Power Grid — open, decentralized GenAI on Base
            </footer>
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
