import axios from 'axios';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

interface GenerationResponse {
  done: boolean;
  generations: { text: string }[];
}

const gridGenerateUrl = `https://api.aipowergrid.io/api/v2/generate/text/async`;
const gridStatusUrl = `https://api.aipowergrid.io/api/v2/generate/text/status`;

// Create an HTTPS agent to ensure the proper servername is used.
const httpsAgent = new https.Agent({
  servername: 'api.aipowergrid.io'
});

export async function POST(request: NextRequest) {
  try {
    // The client can pass parameters similar to the OpenAI API.
    // You may extend this to support more features as needed.
    const {
      prompt,
      model = 'grid-model-default',
      temperature = 0.7,
      max_tokens = 50,
      apiKey, // Pass your API key if required
      sessionId // preserved session (if needed)
    } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Missing required field: prompt' },
        { status: 400 }
      );
    }

    // Build an instruction that the grid understands.
    // (You can modify this template as needed.)
    const instruction = `
system
You are a helpful AI assistant using Markdown formatting.

user
${prompt}

assistant
    `.trim();

    const headers = {
      apikey: apiKey,
      'Content-Type': 'application/json'
    };

    // Prepare the payload for the grid API
    const payload = {
      prompt: instruction,
      models: [model],
      n: 1,
      trusted_workers: false,
      params: {
        max_context_length: 512,
        max_length: max_tokens,
        temperature,
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

    // Initiate the grid generation job.
    const { data: jobData } = await axios.post<{ id: string }>(
      gridGenerateUrl,
      payload,
      { headers, httpsAgent }
    );
    const jobID = jobData.id;

    // Helper to poll the grid status API until the job is done.
    const pollGrid = async (jobID: string): Promise<string> => {
      const statusEndpoint = `${gridStatusUrl}/${jobID}`;
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const { data } = await axios.get<GenerationResponse>(statusEndpoint, {
          headers,
          httpsAgent
        });
        if (data.done) {
          return data.generations[0].text.trim();
        }
      }
    };

    const resultText = await pollGrid(jobID);

    // Compose a response object similar to OpenAI's completions response.
    const responsePayload = {
      id: uuidv4(),
      object: 'text_completion',
      created: Math.floor(Date.now() / 1000),
      model,
      choices: [
        {
          text: resultText,
          index: 0,
          logprobs: null,
          finish_reason: 'stop'
        }
      ],
      usage: {
        prompt_tokens: 0, // Optionally compute based on your needs.
        completion_tokens: resultText.split(' ').length,
        total_tokens: resultText.split(' ').length
      }
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error('Error in grid completion adapter:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
