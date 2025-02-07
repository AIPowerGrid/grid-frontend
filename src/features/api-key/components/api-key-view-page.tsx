'use client';
import React, { useState } from 'react';
// These imports assume you're using shadcn components.
// Adjust the import paths based on your project structure.
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ApiKeyGenerator() {
  const [apiKey, setApiKey] = useState<string>('');
  const [generated, setGenerated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Calls the new API route to generate an API key.
  const generateApiKey = async () => {
    setLoading(true);
    try {
      // Generate a random hash on the client to pass as the username.
      // Alternatively, you can omit sending username to let the server handle it.
      const randomHash = crypto.randomUUID(); // or use another method like crypto.getRandomValues()
      const response = await fetch('/api/generate-api-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: randomHash })
      });
      const data = await response.json();
      if (data.apiKey) {
        setApiKey(data.apiKey);
        setGenerated(true);
      } else {
        console.error('Error generating API key:', data.error);
      }
    } catch (error) {
      console.error('Error generating API key:', error);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
  };

  return (
    <Card className='space-y-4 p-6'>
      <h1 className='text-2xl font-bold'>Generate Your API Key</h1>
      <p>
        This API key grants you access to our AI services. Please note: you are
        responsible for securely storing this key. If you lose it, you&apos;ll
        have to generate a new one.
      </p>
      <p className='text-sm text-muted-foreground'>
        Tip: Keep your API key private and never share it publicly!
      </p>
      {!generated ? (
        <Button onClick={generateApiKey} variant='default' disabled={loading}>
          {loading ? 'Generating...' : 'Generate API Key'}
        </Button>
      ) : (
        <div className='space-y-3'>
          <div>
            <label className='block text-sm font-medium'>Your API Key:</label>
            <Input readOnly value={apiKey} className='mt-1 w-full' />
          </div>
          <div className='flex items-center space-x-2'>
            <Button onClick={handleCopy} variant='outline'>
              Copy
            </Button>
            <Button onClick={generateApiKey} variant='secondary'>
              Regenerate
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
