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
 * Resolve a working short-lived Core token for the signed-in user.
 *
 * Prefer the token already on the session JWT. If it's missing — which happens
 * when sign-in raced the backend, and which the jwt callback can't always fix
 * because server-component auth() can't persist a refreshed cookie — re-derive
 * it on demand from the stable provider id through the Console service
 * exchange. This makes account proxy routes self-sufficient without restoring
 * the retired shared internal-session token.
 *
 * Returns null only when there's no usable identity at all.
 */
export async function resolveGridKey(token: any): Promise<string | null> {
  const existing = (token?.gridAccessToken ?? token?.gridApiKey) as
    | string
    | undefined;
  const expiresAt = Number(token?.gridAccessTokenExpiresAt ?? 0);
  if (existing && (!expiresAt || expiresAt > Date.now() + 60_000))
    return existing;

  const providerId = token?.provider_id as string | undefined;
  const serviceKey = process.env.GRID_SERVICE_API_KEY;
  if (!providerId || !serviceKey) return null;

  try {
    const res = await fetch(`${GRID_API_BASE}/v1/auth/service/exchange`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: serviceKey
      },
      body: JSON.stringify({
        subject: providerId
      }),
      cache: 'no-store'
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data?.access_token as string) ?? null;
  } catch {
    return null;
  }
}
