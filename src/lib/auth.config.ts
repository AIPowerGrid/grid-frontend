import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

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
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
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
