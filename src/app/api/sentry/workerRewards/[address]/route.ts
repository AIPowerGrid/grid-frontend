import { NextResponse, NextRequest } from 'next/server';

const aipgAddressRegex = /^[A][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

export async function GET(
  request: NextRequest,
  { params }: { params: { address: string } }
) {
  const { address } = params;

  // Validate the AIPG address.
  if (!aipgAddressRegex.test(address)) {
    return NextResponse.json(
      { error: 'Invalid AIPG address format' },
      { status: 400 }
    );
  }

  // Build the external API URL.
  const externalUrl = `http://172.22.22.33:5300/api/worker/${address}/payments`;

  try {
    const externalRes = await fetch(externalUrl, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (!externalRes.ok) {
      throw new Error(
        `Failed to fetch from external API: ${externalRes.status}`
      );
    }

    const data = await externalRes.json();

    // Optionally, sort by timestamp (newest first).
    data.sort(
      (a: any, b: any) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching worker payments:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
