import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { GRID_API_BASE } from '@/lib/grid-api';

/**
 * Provision a grid account + dashboard-session API key on login.
 * Find-or-create by oauth_sub; the API rotates the session key so old ones
 * die on every fresh login. Soft-fails (returns null) if the grid API or
 * internal token is unavailable — login still works, key features degrade.
 */
async function gridSession(body: {
  oauth_sub?: string;
  email?: string | null;
  wallet?: string;
  username?: string | null;
}): Promise<{ account_id: string; api_key: string } | null> {
  const internalToken = process.env.GRID_INTERNAL_TOKEN;
  if (!internalToken) return null;
  try {
    const res = await fetch(`${GRID_API_BASE}/v1/accounts/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Internal-Token': internalToken
      },
      body: JSON.stringify(body),
      cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.error('gridSession:', e);
    return null;
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
          // and the wallet gets a grid account + API key in one step.
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

          return {
            id: grid.wallet,
            name:
              grid.username ?? `${address.slice(0, 6)}...${address.slice(-4)}`,
            email: null,
            image: null,
            provider_id: `web3_${grid.wallet}`,
            grid_account_id: grid.account_id,
            grid_api_key: grid.api_key
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

        // Provision the grid account (find-or-create + fresh session key).
        // The key lives only in this httpOnly JWT; server proxy routes
        // forward it, the browser never sees it.
        const grid = await gridSession({
          oauth_sub: token.provider_id as string,
          email: (profile as any).email ?? null,
          username: (profile as any).name ?? null
        });
        if (grid) {
          (token as any).gridAccountId = grid.account_id;
          (token as any).gridApiKey = grid.api_key;
        }
      } else if (user && 'provider_id' in user && user.provider_id) {
        // Handle credential-based providers (like Web3)
        token.provider = 'web3';
        token.provider_id = user.provider_id as string;
        if ((user as any).grid_account_id) {
          (token as any).gridAccountId = (user as any).grid_account_id;
          (token as any).gridApiKey = (user as any).grid_api_key;
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
      // Account id is safe to expose; the API key never is.
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
