import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/page-container';
import WorkerEnrollment from '@/features/workers/components/worker-enrollment';

const ENROLLMENT_ID_RE = /^[A-Za-z0-9_-]{20,80}$/;

export const metadata: Metadata = {
  title: 'Connect Worker'
};

export default async function Page({
  params
}: {
  params: Promise<{ enrollmentId: string }>;
}) {
  const { enrollmentId } = await params;
  if (!ENROLLMENT_ID_RE.test(enrollmentId)) notFound();
  return (
    <PageContainer>
      <WorkerEnrollment enrollmentId={enrollmentId} />
    </PageContainer>
  );
}
