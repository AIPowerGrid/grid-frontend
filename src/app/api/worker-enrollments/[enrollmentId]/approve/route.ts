import { NextRequest, NextResponse } from 'next/server';
import {
  badEnrollmentId,
  callEnrollment,
  enrollmentUrl,
  ENROLLMENT_ID_RE,
  gridUserKey,
  proxyEnrollmentResponse
} from '../../_shared';

const SIGNATURE_RE = /^0x[0-9a-fA-F]{130}$/;

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ enrollmentId: string }> }
) {
  const { enrollmentId } = await params;
  if (!ENROLLMENT_ID_RE.test(enrollmentId)) return badEnrollmentId();
  const key = await gridUserKey(req);
  if (!key) {
    return NextResponse.json(
      { error: 'A recent Google or wallet sign-in is required' },
      { status: 401 }
    );
  }
  const body = await req.json().catch(() => null);
  if (
    !body ||
    typeof body.signature !== 'string' ||
    !SIGNATURE_RE.test(body.signature)
  ) {
    return NextResponse.json(
      { error: 'Invalid wallet signature' },
      { status: 400 }
    );
  }
  const response = await callEnrollment(
    enrollmentUrl(enrollmentId, '/approve'),
    {
      method: 'POST',
      headers: { apikey: key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ signature: body.signature })
    }
  );
  return proxyEnrollmentResponse(response);
}
