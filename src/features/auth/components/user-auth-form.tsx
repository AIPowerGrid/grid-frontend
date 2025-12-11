'use client';

import GoogleSignInButton from './google-auth-button';
import GithubSignInButton from './github-auth-button';
import Web3AuthButton from './web3-auth-button';

export default function UserAuthForm() {
  return (
    <div className='flex flex-col items-center'>
      <GoogleSignInButton />
      <GithubSignInButton />
      <Web3AuthButton />
    </div>
  );
}
