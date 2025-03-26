import { NextResponse } from 'next/server';

// Pattern to match valid AIPG addresses
const aipgAddressRegex = /[A][a-km-zA-HJ-NP-Z1-9]{25,34}/;

// Helper function to extract valid AIPG addresses from worker names
function extractAIPGAddress(name: string): string | null {
  // First, strip any quotes
  const unquotedName = name.replace(/^"|"$/g, '');

  // Try to find a valid AIPG address within the name
  const match = unquotedName.match(aipgAddressRegex);

  // Return the matched address or null if none found
  return match ? match[0] : null;
}

export async function GET(request: Request) {
  try {
    // Fetch the external workers data
    const externalRes = await fetch(
      'https://api.aipowergrid.io/api/v2/workers',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!externalRes.ok) {
      throw new Error(`Failed to fetch: ${externalRes.status}`);
    }

    const data = await externalRes.json();

    // Filter out only workers that contain a valid AIPG address
    const validWorkers = data.filter((worker: any) => {
      const extractedAddress = extractAIPGAddress(worker.name);
      return extractedAddress !== null;
    });

    // Map the valid workers to only include rewards-related details,
    // using the extracted AIPG address as the name
    const rewardsDetails = validWorkers.map((worker: any) => {
      const extractedAddress = extractAIPGAddress(worker.name);
      return {
        id: worker.id,
        name: extractedAddress,
        original_name: worker.name, // Optionally keep the original name for reference
        requests_fulfilled: worker.requests_fulfilled,
        kudos_rewards: worker.kudos_rewards,
        kudos_generated: worker.kudos_details?.generated ?? null,
        kudos_uptime: worker.kudos_details?.uptime ?? null
      };
    });

    return NextResponse.json(rewardsDetails);
  } catch (error) {
    console.error('Error fetching workers rewards:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
