import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

interface GenerationResponse {
  done: boolean;
  generations: { text: string }[];
}

const gridGenerateUrl = `https://api.aipowergrid.io/api/v2/generate/text/async`;
const gridStatusUrl = `https://api.aipowergrid.io/api/v2/generate/text/status`;

export async function POST(request: NextRequest) {
  try {
    // Extract the API key from the Authorization header (if provided).
    const authHeader = request.headers.get('Authorization');
    let authApiKey: string | undefined;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      authApiKey = authHeader.split(' ')[1];
    }

    // Parse the incoming request body.
    const body = await request.json();

    // Use API key from the header if provided; otherwise, try the body.
    const apiKey = authApiKey || body.apiKey;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing API key in header or body.' },
        { status: 401 }
      );
    }

    // Expect a "prompt" field (used when forcePrompt is enabled).
    const prompt = body.prompt;
    if (!prompt) {
      return NextResponse.json(
        { error: 'Missing required prompt field.' },
        { status: 400 }
      );
    }

    // Extract other parameters; use defaults if not provided.
    const {
      model = 'aphrodite/deepseek-ai/DeepSeek-R1-Distill-Llama-70B',
      temperature = 0.7,
      max_tokens = 50,
      sessionId
    } = body;

    // Generate or reuse a session ID (if needed for your internal tracking).
    const currentSessionId = sessionId || uuidv4();

    const headersForGrid = {
      apikey: apiKey,
      'Content-Type': 'application/json'
    };

    // Build a simplified payload for the Grid API.
    const payload = {
      prompt,
      models: [model],
      n: 1,
      trusted_workers: false,
      params: {
        max_length: max_tokens,
        temperature,
        top_p: 0.9
      }
    };

    // Submit the generation request to the grid API.
    const { data: jobData } = await axios.post<{ id: string }>(
      gridGenerateUrl,
      payload,
      { headers: headersForGrid }
    );
    const jobID = jobData.id;

    // Poll the grid API until the generation is complete.
    const pollGrid = async (jobID: string): Promise<string> => {
      const statusEndpoint = `${gridStatusUrl}/${jobID}`;
      while (true) {
        // Wait 2 seconds between polls.
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const { data } = await axios.get<GenerationResponse>(statusEndpoint, {
          headers: headersForGrid
        });
        if (data.done) {
          return data.generations[0].text.trim();
        }
      }
    };

    const resultText = await pollGrid(jobID);

    // Construct the legacy completions response.
    const responsePayload = {
      id: uuidv4(),
      object: 'text_completion',
      created: Math.floor(Date.now() / 1000),
      model,
      // Optional: you may add a system_fingerprint property if available.
      choices: [
        {
          text: resultText,
          index: 0,
          logprobs: null,
          finish_reason: 'stop'
        }
      ],
      usage: {
        prompt_tokens: 0, // Replace with an actual count if available.
        completion_tokens: resultText.split(' ').length,
        total_tokens: resultText.split(' ').length
      }
    };

    // Return the response as a single JSON payload (no streaming).
    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error('Error in completions adapter:', error);
    // Log the detailed response from the Grid API to help diagnose the 400 error:
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
