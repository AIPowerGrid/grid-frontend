import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { GRID_API_BASE } from '@/lib/grid-api';

/**
 * Exchange a provider proof or service-local subject for a short-lived Core
 * user token. The scoped Console service key never leaves this server.
 */
async function gridSession(body: {
  subject: string;
  googleIdToken?: string | null;
}): Promise<{
  account_id: string;
  access_token: string;
  expires_in: number;
} | null> {
  const serviceKey = process.env.GRID_SERVICE_API_KEY;
  if (!serviceKey) return null;
  const google = Boolean(body.googleIdToken);
  try {
    const res = await fetch(
      `${GRID_API_BASE}${google ? '/v1/auth/google/exchange' : '/v1/auth/service/exchange'}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: serviceKey
        },
        body: JSON.stringify(
          google
            ? { id_token: body.googleIdToken, app_subject: body.subject }
            : { subject: body.subject }
        ),
        cache: 'no-store'
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.error('gridSession:', e);
    return null;
  }
}

async function bindGridSubject(
  subject: string,
  userToken: string
): Promise<boolean> {
  const serviceKey = process.env.GRID_SERVICE_API_KEY;
  if (!serviceKey) return false;
  try {
    const res = await fetch(`${GRID_API_BASE}/v1/auth/service/bind`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: serviceKey },
      body: JSON.stringify({ subject, user_token: userToken }),
      cache: 'no-store'
    });
    return res.ok;
  } catch {
    return false;
  }
}

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
      // Ensure we get consistent profile data
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          // Store Google's unique ID directly in the token
          provider_id: `google_${profile.sub}`
        };
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      // Ensure we get consistent profile data
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          // Store GitHub's unique ID directly in the token
          provider_id: `github_${profile.id}`
        };
      }
    }),
    // Web3 Wallet Authentication
    CredentialProvider({
      id: 'web3',
      name: 'Web3 Wallet',
      credentials: {
        address: {
          label: 'Wallet Address',
          type: 'text'
        },
        signature: {
          label: 'Signature',
          type: 'text'
        },
        nonce: {
          label: 'Nonce',
          type: 'text'
        }
      },
      async authorize(credentials) {
        if (
          !credentials?.address ||
          !credentials?.signature ||
          !credentials?.nonce
        ) {
          return null;
        }

        try {
          const address = credentials.address as string;
          const signature = credentials.signature as string;
          const nonce = credentials.nonce as string;

          // Verify through the grid API: the nonce was minted there
          // (single-use, TTL'd), the signature is recovered server-side,
          // and the wallet gets a short-lived Core account token.
          const message = `Sign in to AIPG Grid\n\nNonce: ${nonce}`;
          const res = await fetch(
            `${GRID_API_BASE}/v1/accounts/wallet/verify`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ message, signature, address }),
              cache: 'no-store'
            }
          );
          if (!res.ok) return null;
          const grid = await res.json();
          const localSubject = `web3_${grid.wallet}`;
          if (!(await bindGridSubject(localSubject, grid.access_token))) {
            return null;
          }

          return {
            id: grid.wallet,
            name:
              grid.username ?? `${address.slice(0, 6)}...${address.slice(-4)}`,
            email: null,
            image: null,
            provider_id: `web3_${grid.wallet}`,
            grid_account_id: grid.account_id,
            grid_access_token: grid.access_token,
            grid_access_token_expires_at:
              Date.now() + Number(grid.expires_in ?? 900) * 1000
          } as any;
        } catch (error) {
          console.error('Web3 authentication error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Persist the provider's user ID to the token right after sign in
      if (account && profile) {
        token.provider = account.provider;

        if (account.provider === 'google') {
          // Use Google's sub field as a stable identifier
          token.provider_id = `google_${profile.sub}`;
        } else if (account.provider === 'github') {
          // Use GitHub's ID as a stable identifier
          token.provider_id = `github_${profile.id}`;
        }

        // Exchange the provider proof/subject for a short Core user token.
        // It lives only in this httpOnly JWT; server proxy routes forward it.
        const grid = await gridSession({
          subject: token.provider_id as string,
          googleIdToken:
            account.provider === 'google'
              ? ((account as any).id_token ?? null)
              : null
        });
        if (grid) {
          (token as any).gridAccountId = grid.account_id;
          (token as any).gridAccessToken = grid.access_token;
          (token as any).gridAccessTokenExpiresAt =
            Date.now() + Number(grid.expires_in ?? 900) * 1000;
        }
      } else if (user && 'provider_id' in user && user.provider_id) {
        // Handle credential-based providers (like Web3)
        token.provider = 'web3';
        token.provider_id = user.provider_id as string;
        if ((user as any).grid_account_id) {
          (token as any).gridAccountId = (user as any).grid_account_id;
          (token as any).gridAccessToken = (user as any).grid_access_token;
          (token as any).gridAccessTokenExpiresAt = (
            user as any
          ).grid_access_token_expires_at;
        }
      }

      // Refresh through the namespaced app identity. This cannot mint account-
      // management authority; sensitive actions require a fresh Google/SIWE proof.
      if (
        token.provider &&
        token.provider_id &&
        (!(token as any).gridAccessToken ||
          Number((token as any).gridAccessTokenExpiresAt ?? 0) <
            Date.now() + 60_000)
      ) {
        const grid = await gridSession({
          subject: token.provider_id as string
        });
        if (grid) {
          (token as any).gridAccountId = grid.account_id;
          (token as any).gridAccessToken = grid.access_token;
          (token as any).gridAccessTokenExpiresAt =
            Date.now() + Number(grid.expires_in ?? 900) * 1000;
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      // If a provider_id exists, use it as the stable ID
      if (token.provider_id) {
        session.user.id = token.provider_id as string;
      } else if (token.sub) {
        // Fallback to token.sub
        session.user.id = token.sub;
      }
      // Account id is safe to expose; Core and service tokens never are.
      (session.user as any).gridAccountId =
        ((token as any).gridAccountId as string) ?? null;
      return session;
    }
  },
  pages: {
    signIn: '/' // sign-in page
  }
} satisfies NextAuthConfig;

export default authConfig;
