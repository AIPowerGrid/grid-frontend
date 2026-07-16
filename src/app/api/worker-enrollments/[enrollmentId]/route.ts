import { NextRequest } from 'next/server';
import {
  badEnrollmentId,
  callEnrollment,
  enrollmentUrl,
  ENROLLMENT_ID_RE,
  proxyEnrollmentResponse
} from '../_shared';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ enrollmentId: string }> }
) {
  const { enrollmentId } = await params;
  if (!ENROLLMENT_ID_RE.test(enrollmentId)) return badEnrollmentId();
  const response = await callEnrollment(enrollmentUrl(enrollmentId));
  return proxyEnrollmentResponse(response);
}
