import { NextRequest, NextResponse } from 'next/server';

// Helper function to generate a random string containing only letters (A-Z, a-z)
function generateRandomLetters(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Local function to generate the API key. Note: it's not exported.
async function fetchApiKey(): Promise<string | null> {
  try {
    // Generate a random username of 14 letters.
    const username = generateRandomLetters(14);
    const response = await fetch('https://api.aipowergrid.io/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        Origin: 'https://api.aipowergrid.io',
        Referer: 'https://api.aipowergrid.io/register'
      },
      body: `username=${username}`
    });

    const responseText = await response.text();

    // Use a regex to extract the API key (adjust if the HTML structure changes)
    const apiKeyRegex =
      /<p\s+style="background-color:\s*darkorange\s*;">\s*(.*?)\s*<\/p>/i;
    const match = responseText.match(apiKeyRegex);
    const apiKey = match?.[1];
    return apiKey || null;
  } catch (error) {
    console.error('Error fetching API key:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = await fetchApiKey();
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Failed to fetch API key' },
        { status: 500 }
      );
    }
    return NextResponse.json({ apiKey });
  } catch (error) {
    console.error('Error in generate-api-key:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
