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

// Create a custom HTTPS agent with the proper servername.
const httpsAgent = new https.Agent({
  servername: 'api.aipowergrid.io'
});

export async function POST(request: NextRequest) {
  try {
    // First, attempt to extract the API key from the Authorization header.
    const authHeader = request.headers.get('Authorization');
    let authApiKey: string | undefined;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      authApiKey = authHeader.split(' ')[1];
    }

    // Parse the request body.
    const body = await request.json();

    // Use the API key from the header if provided; otherwise, fall back to the body.
    const apiKey = authApiKey || body.apiKey;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing API key in Authorization header or body.' },
        { status: 401 }
      );
    }

    const {
      messages,
      model = 'aphrodite/deepseek-ai/DeepSeek-R1-Distill-Llama-70B',
      temperature = 0.7,
      max_tokens = 50,
      sessionId
    } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Missing or empty "messages" array.' },
        { status: 400 }
      );
    }

    // Convert the chat messages into a single instruction prompt.
    const instruction = messages
      .map(
        (msg: { role: string; content: string }) =>
          `${msg.role}: ${msg.content}`
      )
      .join('\n\n');

    // Optionally, generate or reuse a session ID.
    const currentSessionId = sessionId || uuidv4();

    // Prepare headers for the grid API.
    const headers = {
      apikey: apiKey,
      'Content-Type': 'application/json'
    };

    // Prepare the payload to send to the grid API.
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

    // Submit the job to the grid API.
    const { data: jobData } = await axios.post<{ id: string }>(
      gridGenerateUrl,
      payload,
      { headers, httpsAgent }
    );
    const jobID = jobData.id;

    // Poll the grid API until the generation is complete.
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

    // Construct a response that mimics the OpenAI Chat Completions response.
    const responsePayload = {
      id: uuidv4(),
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model,
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content: resultText
          },
          finish_reason: 'stop'
        }
      ],
      usage: {
        prompt_tokens: 0,
        completion_tokens: resultText.split(' ').length,
        total_tokens: resultText.split(' ').length
      }
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error('Error in chat completions adapter:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
