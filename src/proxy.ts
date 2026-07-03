// Protecting dashboard routes with Next.js Proxy.
// https://nextjs.org/docs/app/getting-started/proxy

import NextAuth from 'next-auth';
import authConfig from '@/lib/auth.config';

const { auth } = NextAuth(authConfig);

export const proxy = auth((req) => {
  if (!req.auth) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    url.search = '';
    return Response.redirect(url);
  }
});

export const config = { matcher: ['/dashboard/:path*'] };
