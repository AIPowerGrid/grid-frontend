// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/page-container';
import OAuthConsent from '@/features/oauth/components/oauth-consent';
import { oauthRequestSchema } from '@/lib/oauth-authorization';

export const metadata: Metadata = {
  title: 'Authorize Agent',
  referrer: 'no-referrer',
  robots: { index: false, follow: false }
};

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ request?: string }>;
}) {
  const request = oauthRequestSchema.safeParse((await searchParams).request);
  if (!request.success) notFound();
  return (
    <PageContainer>
      <OAuthConsent requestCapability={request.data} />
    </PageContainer>
  );
}
