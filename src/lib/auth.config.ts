import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? ''
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
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Use non-null assertion because you expect token.sub to be present.
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    }
  },
  pages: {
    signIn: '/' // sign-in page
  }
} satisfies NextAuthConfig;

export default authConfig;
