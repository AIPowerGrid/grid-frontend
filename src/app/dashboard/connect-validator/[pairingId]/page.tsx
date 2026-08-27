// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/page-container';
import ValidatorPairing from '@/features/validators/components/validator-pairing';
import { pairingIdSchema } from '@/lib/validator-pairing';

export const metadata: Metadata = {
  title: 'Link Validator',
  referrer: 'no-referrer',
  robots: { index: false, follow: false }
};

export default async function Page({
  params
}: {
  params: Promise<{ pairingId: string }>;
}) {
  const { pairingId } = await params;
  if (!pairingIdSchema.safeParse(pairingId).success) notFound();
  return (
    <PageContainer>
      <ValidatorPairing pairingId={pairingId} />
    </PageContainer>
  );
}
