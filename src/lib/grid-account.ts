import { GRID_API_BASE } from './grid-api';

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
