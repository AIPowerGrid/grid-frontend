import axios from 'axios';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

interface GenerationResponse {
  done: boolean;
  generations: { text: string }[];
}

const apiUrl = `https://api.aipowergrid.io/api/v2/generate/text/async`;
const statusUrl = `https://api.aipowergrid.io/api/v2/generate/text/status`;

// Create a custom HTTPS agent with the proper servername.
const httpsAgent = new https.Agent({
  servername: 'api.aipowergrid.io'
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, apiKey, uuid, model, sessionId } = await request.json();

    if (!prompt || !uuid || !model) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const currentSessionId = sessionId || uuidv4();

    // Build a simple instruction from the user prompt.
    const instruction = `
      system
      You are a helpful AI assistant using Markdown formatting.
      
      user
      ${prompt}
      
      assistant
    `;

    const headers = {
      apikey: apiKey,
      'Content-Type': 'application/json'
    };

    const pollApi = async (jobID: string): Promise<string> => {
      const statusEndpoint = `${statusUrl}/${jobID}`;
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const { data: jsonResponse } = await axios.get<GenerationResponse>(
          statusEndpoint,
          { headers, httpsAgent }
        );
        if (jsonResponse.done) {
          return jsonResponse.generations[0].text.trim();
        }
      }
    };

    const payload = {
      prompt: instruction,
      models: [model],
      n: 1,
      trusted_workers: false,
      params: {
        max_context_length: 512,
        max_length: 50,
        temperature: 0.7,
        top_p: 0.9,
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
    console.error('Error in text generation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
