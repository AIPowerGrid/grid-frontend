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

// Helper function that extracts the final answer.
// It searches for "Final Answer:" in the text and returns only the text that follows.
function filterFinalAnswer(text: string): string {
  const marker = 'Final Answer:';
  const index = text.indexOf(marker);
  if (index !== -1) {
    return text.slice(index + marker.length).trim();
  }
  // If the marker isn't found, return the entire text trimmed.
  return text.trim();
}

export async function POST(request: NextRequest) {
  try {
    // Generate a dynamic fingerprint for this request.
    const systemFingerprint =
      'fp_' +
      crypto
        .createHash('md5')
        .update(Date.now().toString() + Math.random().toString())
        .digest('hex');

    // Get API key from Authorization header if present.
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

    // Determine whether streaming mode is requested.
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

    // Updated instructions: the model must perform all internal reasoning silently.
    // It must output exactly one line starting with "Final Answer:" having no additional text.
    const additionalContext = `Instruction:
- You are a highly efficient assistant.
- Do all internal reasoning silently and do NOT output any chain-of-thought or intermediate notes.
- Only provide a single final answer without any explanation.
- Your OUTPUT MUST be exactly one line that begins with "Final Answer:" immediately followed by your final answer.
- Do not include any text before "Final Answer:".
- Use a maximum of ${max_tokens} tokens for your final answer.
`;
    // Assemble the full prompt.
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

    // Create payload for the Grid API.
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

    // Submit the generation request.
    const { data: jobData } = await axios.post<{ id: string }>(
      gridGenerateUrl,
      payload,
      { headers: headersForGrid }
    );
    const jobID = jobData.id;

    // Poll the grid API until generation finishes.
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

    // Retrieve generated text and filter it.
    const generatedText = await pollGrid(jobID);
    const finalResultText = filterFinalAnswer(generatedText);

    if (!streamMode) {
      // Build non-streaming JSON response.
      const responsePayload = {
        id: uuidv4(),
        object: 'chat.completion',
        created: Math.floor(Date.now() / 1000),
        model,
        system_fingerprint: systemFingerprint,
        choices: [
          {
            index: 0,
            message: { role: 'assistant', content: finalResultText },
            finish_reason: 'stop'
          }
        ],
        usage: {
          prompt_tokens: 0,
          completion_tokens: finalResultText.split(' ').length,
          total_tokens: finalResultText.split(' ').length
        }
      };
      return new Response(JSON.stringify(responsePayload), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // Build streaming response that outputs token by token.
      const encoder = new TextEncoder();
      const commonId = uuidv4();
      const createdTime = Math.floor(Date.now() / 1000);

      const stream = new ReadableStream({
        async start(controller) {
          // Initial event sets the assistant role.
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

          // Stream the final answer token by token.
          const tokens = finalResultText.split(' ');
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

          // Final event to indicate completion.
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
