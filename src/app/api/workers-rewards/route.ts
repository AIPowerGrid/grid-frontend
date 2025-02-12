import { NextResponse } from 'next/server';

// Only consider workers valid if their name matches the AIPG regex.
const aipgAddressRegex = /^[A][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

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

    // Filter out only valid workers based on the given regex.
    const validWorkers = data.filter((worker: any) =>
      aipgAddressRegex.test(worker.name)
    );

    // Map the valid workers to only include rewards-related details.
    const rewardsDetails = validWorkers.map((worker: any) => ({
      id: worker.id,
      name: worker.name,
      requests_fulfilled: worker.requests_fulfilled,
      kudos_rewards: worker.kudos_rewards,
      kudos_generated: worker.kudos_details?.generated ?? null,
      kudos_uptime: worker.kudos_details?.uptime ?? null
    }));

    return NextResponse.json(rewardsDetails);
  } catch (error) {
    console.error('Error fetching workers rewards:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
