import { auth } from '@/lib/auth';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata, Viewport } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import type React from 'react'; // Import React

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dashboard.aipowergrid.io'),
  title: {
    default: 'AI Power Grid Dashboard',
    template: '%s | AI Power Grid'
  },
  description:
    'Manage and monitor your AI Power Grid resources with our advanced dashboard.',
  keywords: ['AI', 'Power Grid', 'Dashboard', 'Machine Learning', 'Analytics'],
  authors: [{ name: 'AI Power Grid Team' }],
  creator: 'AI Power Grid',
  publisher: 'AI Power Grid',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dashboard.aipowergrid.io',
    title: 'AI Power Grid Dashboard',
    description:
      'Manage and monitor your AI Power Grid resources with our advanced dashboard.',
    siteName: 'AI Power Grid Dashboard',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Power Grid Dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Power Grid Dashboard',
    description:
      'Manage and monitor your AI Power Grid resources with our advanced dashboard.',
    images: ['/opengraph-image.png'],
    creator: '@AIPowerGrid'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang='en' className={`${lato.className}`} suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body className={'overflow-hidden'}>
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <Providers session={session}>
            <Toaster />
            {children}
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}
