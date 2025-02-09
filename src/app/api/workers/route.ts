import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Fetch external workers data
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

    // Simplify the worker data to only include a subset of fields.
    const simplifiedWorkers = data.map((worker: any) => ({
      id: worker.id,
      name: worker.name,
      type: worker.type,
      online: worker.online,
      performance: worker.performance,
      requests_fulfilled: worker.requests_fulfilled,
      //uncompleted_jobs: worker.uncompleted_jobs,
      uptime: worker.uptime,
      models: worker.models,
      bridge_agent: worker.bridge_agent
    }));

    return NextResponse.json(simplifiedWorkers);
  } catch (error) {
    console.error('Error fetching workers:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
