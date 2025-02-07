'use client';

import GoogleSignInButton from './google-auth-button';
import GithubSignInButton from './github-auth-button';

export default function UserAuthForm() {
  return (
    <div className='flex flex-col items-center'>
      {/* Only OAuth sign in is supported */}
      <GoogleSignInButton />
      <GithubSignInButton />
    </div>
  );
}
