import axios from 'axios';
import https from 'https';
import { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

interface GenerationResponse {
  done: boolean;
  generations: { text: string }[];
}

const gridGenerateUrl = `https://api.aipowergrid.io/api/v2/generate/text/async`;
const gridStatusUrl = `https://api.aipowergrid.io/api/v2/generate/text/status`;

// Create an HTTPS agent with the required servername.
const httpsAgent = new https.Agent({
  servername: 'api.aipowergrid.io'
});

export async function POST(request: NextRequest) {
  try {
    // Extract the API key from the Authorization header if present.
    const authHeader = request.headers.get('Authorization');
    let authApiKey: string | undefined;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      authApiKey = authHeader.split(' ')[1];
    }

    // Parse the request body.
    const body = await request.json();

    // Use API key from the header or the body.
    const apiKey = authApiKey || body.apiKey;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Missing API key in header or body.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // When forcePrompt is true, Librechat will send a "prompt" property instead of "messages".
    const prompt = body.prompt;
    if (!prompt) {
      return new Response(
        JSON.stringify({ error: 'Missing required prompt field.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Extract other parameters.
    const {
      model = 'aphrodite/deepseek-ai/DeepSeek-R1-Distill-Llama-70B',
      temperature = 0.7,
      max_tokens = 50,
      sessionId
    } = body;

    // Generate or reuse a session Id.
    const currentSessionId = sessionId || uuidv4();

    const headersForGrid = {
      apikey: apiKey,
      'Content-Type': 'application/json'
    };

    // Build the payload for the grid API using the prompt directly.
    const payload = {
      prompt,
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

    // Submit the generation job to the grid API.
    const { data: jobData } = await axios.post<{ id: string }>(
      gridGenerateUrl,
      payload,
      { headers: headersForGrid, httpsAgent }
    );
    const jobID = jobData.id;

    // Poll the grid API until the generation is ready.
    const pollGrid = async (jobID: string): Promise<string> => {
      const statusEndpoint = `${gridStatusUrl}/${jobID}`;
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const { data } = await axios.get<GenerationResponse>(statusEndpoint, {
          headers: headersForGrid,
          httpsAgent
        });
        if (data.done) {
          return data.generations[0].text.trim();
        }
      }
    };

    const resultText = await pollGrid(jobID);

    // Build a response payload following OpenAI's text completions format.
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
        prompt_tokens: 0,
        completion_tokens: resultText.split(' ').length,
        total_tokens: resultText.split(' ').length
      }
    };

    // Create a streaming response using a ReadableStream.
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Enqueue the entire JSON payload as one chunk.
        controller.enqueue(encoder.encode(JSON.stringify(responsePayload)));
        controller.close();
      }
    });

    return new Response(stream, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in completions adapter:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
