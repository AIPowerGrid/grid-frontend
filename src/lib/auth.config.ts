import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { verifyMessage } from 'ethers';

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

          // Verify the signature
          // The message format should match what the client signed
          const message = `Sign in to AIPG Grid\n\nNonce: ${nonce}`;
          const recoveredAddress = verifyMessage(message, signature);

          // Verify that the recovered address matches the provided address (case-insensitive)
          if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
            return null;
          }

          // Return user object - address is the unique identifier for Web3
          return {
            id: address.toLowerCase(),
            name: `${address.slice(0, 6)}...${address.slice(-4)}`, // Shortened address as display name
            email: null,
            image: null,
            provider_id: `web3_${address.toLowerCase()}`
          };
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
      } else if (user && 'provider_id' in user && user.provider_id) {
        // Handle credential-based providers (like Web3)
        token.provider = 'web3';
        token.provider_id = user.provider_id as string;
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
      return session;
    }
  },
  pages: {
    signIn: '/' // sign-in page
  }
} satisfies NextAuthConfig;

export default authConfig;
