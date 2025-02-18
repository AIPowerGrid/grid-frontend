import axios from 'axios';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

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
    // Dynamically generate a fingerprint for this request.
    const systemFingerprint =
      'fp_' +
      crypto
        .createHash('md5')
        .update(Date.now().toString() + Math.random().toString())
        .digest('hex');

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
      max_tokens = 50,
      sessionId
    } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Missing messages' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Updated additional context follows the model's recommendations.
    // All instructions are contained within the prompt.
    // The model is instructed to:
    // • Begin its output with "<think>\n"
    // • Provide full, step-by-step reasoning enclosed between "<think>\n" and "\n</think>"
    // • On a new line after the reasoning, provide its final answer enclosed within "\boxed{...}"
    const additionalContext = `Instruction:
- You are a highly intelligent assistant.
- Please perform thorough step-by-step reasoning.
- Begin your output with "<think>\n", then include all your reasoning, and close the reasoning section with "\n</think>".
- On a new line following your reasoning, output your final answer enclosed within "\boxed{...}".
- Do not include any extraneous text or commentary.
- Use a maximum of ${max_tokens} tokens for your final answer.
`;

    // Assemble the full prompt: additional context plus the conversation.
    // All instructions are now part of the user prompt.
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

    const resultText = (await pollGrid(jobID)).trim();

    if (!streamMode) {
      // Non-streaming response: return full payload as JSON
      const responsePayload = {
        id: uuidv4(),
        object: 'chat.completion',
        created: Math.floor(Date.now() / 1000),
        model,
        system_fingerprint: systemFingerprint,
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
          // First event: send an initial event to set the assistant's role.
          const initialChunk = {
            id: commonId,
            object: 'chat.completion.chunk',
            created: createdTime,
            model,
            system_fingerprint: systemFingerprint,
            choices: [
              {
                index: 0,
                delta: { role: 'assistant', content: '' },
                logprobs: null,
                finish_reason: null
              }
            ]
          };
          controller.enqueue(
            encoder.encode('data: ' + JSON.stringify(initialChunk) + '\n\n')
          );

          // Split the entire result text into tokens and stream them.
          const tokens = resultText.split(' ');
          for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const tokenChunk = {
              id: commonId,
              object: 'chat.completion.chunk',
              created: createdTime,
              model,
              system_fingerprint: systemFingerprint,
              choices: [
                {
                  index: 0,
                  delta: {
                    content: token + (i === tokens.length - 1 ? '' : ' ')
                  },
                  logprobs: null,
                  finish_reason: null
                }
              ]
            };
            controller.enqueue(
              encoder.encode('data: ' + JSON.stringify(tokenChunk) + '\n\n')
            );
            await new Promise((resolve) => setTimeout(resolve, 50));
          }

          // Final event: signal the end of the stream.
          const finalChunk = {
            id: commonId,
            object: 'chat.completion.chunk',
            created: createdTime,
            model,
            system_fingerprint: systemFingerprint,
            choices: [
              {
                index: 0,
                delta: {},
                logprobs: null,
                finish_reason: 'stop'
              }
            ]
          };
          controller.enqueue(
            encoder.encode('data: ' + JSON.stringify(finalChunk) + '\n\n')
          );
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
