import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

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
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          name: 'John',
          email: credentials?.email as string
        };
        return user || null;
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
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          name: 'John',
          email: credentials?.email as string
        };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
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
