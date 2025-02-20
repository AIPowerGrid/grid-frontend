import { NextResponse } from 'next/server';

// Only consider workers valid if their name matches the AIPG regex.
const aipgAddressRegex = /^[A][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

// Helper function to sanitize worker names by stripping leading/trailing quotes.
function sanitizeWorkerName(name: string): string {
  return name.replace(/^"|"$/g, '');
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

    // Filter out only valid workers based on the given regex after sanitizing the name.
    const validWorkers = data.filter((worker: any) => {
      const sanitizedName = sanitizeWorkerName(worker.name);
      return aipgAddressRegex.test(sanitizedName);
    });

    // Map the valid workers to only include rewards-related details,
    // storing the sanitized worker name.
    const rewardsDetails = validWorkers.map((worker: any) => {
      const sanitizedName = sanitizeWorkerName(worker.name);
      return {
        id: worker.id,
        name: sanitizedName,
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
