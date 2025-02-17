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
    // Extract API key from Authorization header (if available)
    const authHeader = request.headers.get('Authorization');
    let authApiKey: string | undefined;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      authApiKey = authHeader.split(' ')[1];
    }
    const body = await request.json();
    const apiKey = authApiKey || body.apiKey;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Missing API key' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if streaming is requested
    const streamMode = body.stream === true;

    const {
      messages,
      model = 'aphrodite/deepseek-ai/DeepSeek-R1-Distill-Llama-70B',
      temperature = 0.7,
      max_tokens = 150,
      sessionId
    } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Missing messages' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create additional context so the AI knows the output needs to be formatted for the end-user,
    // using no more than max_tokens tokens.
    const additionalContext = `Instruction:
- Generate a response that is clearly formatted for the end user.
- Use a maximum of ${max_tokens} tokens.
`;
    // Combine the additional context with the conversation messages.
    // The messages are transformed into a prompt format, e.g., "role: content" per message.
    const instruction =
      additionalContext +
      '\n' +
      messages
        .map(
          (msg: { role: string; content: string }) =>
            `${msg.role}: ${msg.content}`
        )
        .join('\n\n');

    const headersForGrid = {
      apikey: apiKey,
      'Content-Type': 'application/json'
    };

    // Build the payload for the Grid API.
    const payload = {
      prompt: instruction,
      models: [model],
      n: 1,
      trusted_workers: false,
      params: {
        max_length: max_tokens,
        temperature,
        top_p: 0.9
      }
    };

    // Submit the generation request to the Grid API.
    const { data: jobData } = await axios.post<{ id: string }>(
      gridGenerateUrl,
      payload,
      { headers: headersForGrid }
    );
    const jobID = jobData.id;

    // Poll the Grid API until generation is done.
    const pollGrid = async (jobID: string): Promise<string> => {
      const statusEndpoint = `${gridStatusUrl}/${jobID}`;
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const { data } = await axios.get<GenerationResponse>(statusEndpoint, {
          headers: headersForGrid
        });
        if (data.done && data.generations && data.generations.length > 0) {
          return data.generations[0].text.trim();
        }
      }
    };

    const resultText = await pollGrid(jobID);

    if (!streamMode) {
      // Non-streaming response: return full payload as JSON
      const responsePayload = {
        id: uuidv4(),
        object: 'chat.completion',
        created: Math.floor(Date.now() / 1000),
        model,
        choices: [
          {
            index: 0,
            message: { role: 'assistant', content: resultText },
            finish_reason: 'stop'
          }
        ],
        usage: {
          prompt_tokens: 0,
          completion_tokens: resultText.split(' ').length,
          total_tokens: resultText.split(' ').length
        }
      };
      return new Response(JSON.stringify(responsePayload), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // Streaming mode: Deliver the response as SSE (Server-Sent Events)
      const encoder = new TextEncoder();
      // Use a common ID and creation timestamp for all chunks.
      const commonId = uuidv4();
      const createdTime = Math.floor(Date.now() / 1000);
      const stream = new ReadableStream({
        async start(controller) {
          // Split the generated text by whitespace.
          const tokens = resultText.split(' ');
          // For each token, send an SSE event.
          for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const isLast = i === tokens.length - 1;
            const chunkData = {
              id: commonId,
              object: 'chat.completion.chunk',
              created: createdTime,
              model,
              choices: [
                {
                  delta: { content: token + (isLast ? '' : ' ') },
                  index: 0,
                  finish_reason: isLast ? 'stop' : null
                }
              ]
            };
            const sseChunk = 'data: ' + JSON.stringify(chunkData) + '\n\n';
            controller.enqueue(encoder.encode(sseChunk));
            // Optionally simulate a small delay between chunks.
            await new Promise((resolve) => setTimeout(resolve, 50));
          }
          // Optionally, send a final SSE [DONE] message.
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        }
      });

      return new Response(stream, {
        status: 200,
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive'
        }
      });
    }
  } catch (error: unknown) {
    console.error('Error in chat completions adapter:', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Response data:', error.response.data);
    }
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
