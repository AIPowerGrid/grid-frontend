// Protecting dashboard routes with Next.js Proxy.
// https://nextjs.org/docs/app/getting-started/proxy

import NextAuth from 'next-auth';
import authConfig from '@/lib/auth.config';

const { auth } = NextAuth(authConfig);

export const proxy = auth((req) => {
  if (!req.auth) {
    const url = req.nextUrl.clone();
    const callbackUrl = `${req.nextUrl.pathname}${req.nextUrl.search}`;
    url.pathname = '/';
    url.search = '';
    url.searchParams.set('callbackUrl', callbackUrl);
    return Response.redirect(url);
  }
});

export const config = { matcher: ['/dashboard/:path*'] };
