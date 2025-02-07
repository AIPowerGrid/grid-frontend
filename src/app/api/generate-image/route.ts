import axios from 'axios';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

interface CheckResponse {
  done: boolean;
}

interface GenerationResponse {
  done: boolean;
  generations: { img: string; id: string }[];
}

const apiUrl = `https://api.aipowergrid.io/api/v2/generate/async`;
const checkUrl = `https://api.aipowergrid.io/api/v2/generate/check`;
const statusUrl = `https://api.aipowergrid.io/api/v2/generate/status`;

// Create a custom HTTPS agent with the proper servername.
const httpsAgent = new https.Agent({
  servername: 'api.aipowergrid.io'
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, apiKey, uuid, model, sessionId, customSettings } =
      await request.json();

    if (!prompt || !uuid || !model) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const currentSessionId = sessionId || uuidv4();
    const headers = {
      apikey: apiKey,
      'Content-Type': 'application/json'
    };

    const pollApi = async (jobID: string): Promise<string> => {
      const checkEndpoint = `${checkUrl}/${jobID}`;
      const statusEndpoint = `${statusUrl}/${jobID}`;
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const { data: jsonResponse } = await axios.get<CheckResponse>(
          checkEndpoint,
          { headers, httpsAgent }
        );
        if (jsonResponse.done) {
          const { data: imageResponse } = await axios.get<GenerationResponse>(
            statusEndpoint,
            { headers, httpsAgent }
          );
          const id = imageResponse.generations[0].id;
          return `https://images.aipg.art/${id}.webp`;
        }
      }
    };

    const payload = {
      prompt,
      allow_downgrade: false,
      nsfw: customSettings.nsfw,
      censor_nsfw: !customSettings.nsfw,
      trusted_workers: false,
      models: [model],
      source_processing: 'img2img',
      r2: true,
      params: {
        n: 1,
        width: 512,
        height: 512,
        steps: 30,
        sampler_name: 'DDIM',
        cfg_scale: 7.5,
        tiling: false,
        clip_skip: 1,
        post_processing: [],
        karras: false,
        hires_fix: false
      }
    };

    const { data: jobData } = await axios.post<{ id: string }>(
      apiUrl,
      payload,
      { headers, httpsAgent }
    );
    const jobID = jobData.id;

    const result = await pollApi(jobID);

    return NextResponse.json(
      { response: result, sessionId: currentSessionId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in image generation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
