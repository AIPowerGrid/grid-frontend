// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/page-container';
import ValidatorCompensation from '@/features/validators/components/validator-compensation';
import { compensationIdSchema } from '@/lib/validator-compensation';
export const metadata: Metadata = {
  title: 'Validator Payout',
  referrer: 'no-referrer',
  robots: { index: false, follow: false }
};
export default async function Page({
  params
}: {
  params: Promise<{ requestId: string }>;
}) {
  const { requestId } = await params;
  if (!compensationIdSchema.safeParse(requestId).success) notFound();
  return (
    <PageContainer>
      <ValidatorCompensation requestId={requestId} />
    </PageContainer>
  );
}
