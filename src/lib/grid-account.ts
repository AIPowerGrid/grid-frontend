import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { GRID_API_BASE } from './grid-api';

// NextAuth v5 renamed the session cookie to `authjs.*`; `getToken` defaults to
// the v4 `next-auth.*` name, so it silently returns null and every account
// route 404s. Try the known cookie names (with matching salt) until one
// decodes — robust across the v4→v5 naming and dev/prod (__Secure-) prefixes.
const COOKIE_NAMES = [
  '__Secure-authjs.session-token',
  'authjs.session-token',
  '__Secure-next-auth.session-token',
  'next-auth.session-token'
];

export async function getSessionToken(req: NextRequest): Promise<any | null> {
  const secret = process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET;
  if (!secret) return null;
  for (const cookieName of COOKIE_NAMES) {
    try {
      const token = await getToken({
        req,
        secret,
        cookieName,
        salt: cookieName,
        secureCookie: cookieName.startsWith('__Secure-')
      } as any);
      if (token) return token;
    } catch {
      // wrong salt/name for this cookie — try the next
    }
  }
  return null;
}

/**
 * Resolve a working grid API key for the signed-in user.
 *
 * Prefer the key already on the session JWT. If it's missing — which happens
 * when sign-in raced the backend, and which the jwt callback can't always fix
 * because server-component auth() can't persist a refreshed cookie — re-derive
 * it on demand from the stable OAuth id via the internal session endpoint
 * (find-or-create, so it's idempotent). This makes the account proxy routes
 * self-sufficient: a valid OAuth session always yields a usable key.
 *
 * Returns null only when there's no usable identity at all.
 */
export async function resolveGridKey(token: any): Promise<string | null> {
  const existing = token?.gridApiKey as string | undefined;
  if (existing) return existing;

  const providerId = token?.provider_id as string | undefined;
  const internalToken = process.env.GRID_INTERNAL_TOKEN;
  if (!providerId || !internalToken) return null;

  try {
    const res = await fetch(`${GRID_API_BASE}/v1/accounts/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Internal-Token': internalToken
      },
      body: JSON.stringify({
        oauth_sub: providerId,
        email: token?.email ?? null,
        username: token?.name ?? null
      }),
      cache: 'no-store'
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data?.api_key as string) ?? null;
  } catch {
    return null;
  }
}
