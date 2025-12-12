'use client';
import React, { useState, useEffect } from 'react';
// These imports assume you're using shadcn components.
// Adjust the import paths based on your project structure.
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface ApiResponse {
  apiKey?: string;
  trusted: boolean;
  userId?: number;
  username?: string;
  error?: string;
  message?: string;
  keyStored?: boolean; // True if key exists but is hashed and can't be shown
  requiresRegeneration?: boolean;
  debug?: {
    clientId: string;
    oauthId: string;
  };
}

export default function ApiKeyGenerator() {
  const [apiKey, setApiKey] = useState<string>('');
  const [trusted, setTrusted] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [userId, setUserId] = useState<number | null>(null);
  const [generated, setGenerated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [regenerating, setRegenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [showRegenerateWarning, setShowRegenerateWarning] =
    useState<boolean>(false);
  const { status } = useSession();

  // Fetch the API key when the component loads (if the user is authenticated)
  useEffect(() => {
    if (status === 'authenticated') {
      fetchApiKey();
    }
  }, [status]);

  // Calls the API route to get or generate an API key.
  const fetchApiKey = async (regenerate: boolean = false) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-api-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ regenerate })
      });

      const data: ApiResponse = await response.json();

      if (data.apiKey) {
        setApiKey(data.apiKey);
        setTrusted(!!data.trusted);
        setGenerated(true);

        if (data.username) setUsername(data.username);
        if (data.userId) setUserId(data.userId);

        if (regenerate) {
          // Success message for regeneration
          setError(
            'Your API key has been regenerated. The old key is no longer valid.'
          );
        }
      } else if (data.keyStored) {
        // User has a key but it's hashed and can't be shown
        setGenerated(true); // Mark as generated so UI shows regenerate option
        setTrusted(!!data.trusted);
        if (data.username) setUsername(data.username);
        if (data.userId) setUserId(data.userId);

        // Show informational message (not an error)
        setError(
          data.message ||
            'Your API key is stored securely and cannot be retrieved. Use "Create New Key" if you need a new one.'
        );
      } else {
        const errorMessage =
          data.message || data.error || 'Unknown error occurred';
        console.error('Error generating API key:', errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to connect to API';
      console.error('Error fetching API key:', errorMessage);
      setError(errorMessage);
    }
    setLoading(false);
    setRegenerating(false);
    setShowRegenerateWarning(false);
  };

  const handleRegenerateClick = () => {
    setShowRegenerateWarning(true);
  };

  const confirmRegenerate = () => {
    setRegenerating(true);
    fetchApiKey(true);
  };

  const cancelRegenerate = () => {
    setShowRegenerateWarning(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className='space-y-4 p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Your API Key</h1>
        {generated && trusted && (
          <Badge className='bg-green-500 text-white'>Trusted</Badge>
        )}
        {generated && !trusted && (
          <Badge variant='secondary' className='bg-yellow-500 text-white'>
            Standard
          </Badge>
        )}
      </div>

      <p>
        This API key grants you access to our AI services. Please note: you are
        responsible for securely storing this key. If you lose it, you&apos;ll
        have to generate a new one.
      </p>

      {status !== 'authenticated' ? (
        <div className='py-4 text-center'>
          <p className='mb-2 text-amber-500'>
            You need to be logged in to generate an API key
          </p>
          <Link href='/auth/signin'>
            <Button variant='default'>Log In</Button>
          </Link>
        </div>
      ) : !generated ? (
        <Button
          onClick={() => fetchApiKey(false)}
          variant='default'
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate API Key'}
        </Button>
      ) : (
        <div className='space-y-3'>
          {username && (
            <div className='text-sm text-muted-foreground'>
              User: {username} (ID: {userId})
            </div>
          )}
          <div>
            <label className='block text-sm font-medium'>Your API Key:</label>
            {apiKey ? (
              <Input readOnly value={apiKey} className='mt-1 w-full' />
            ) : (
              <Input
                readOnly
                value='••••••••••••••••••••••••'
                className='mt-1 w-full bg-muted'
                disabled
              />
            )}
          </div>
          <div className='flex items-center space-x-2'>
            <Button onClick={handleCopy} variant='outline'>
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            {!showRegenerateWarning ? (
              <Button
                onClick={handleRegenerateClick}
                variant='secondary'
                disabled={regenerating}
              >
                Create New Key
              </Button>
            ) : (
              <>
                <Button
                  onClick={confirmRegenerate}
                  variant='destructive'
                  disabled={regenerating}
                >
                  {regenerating ? 'Creating...' : 'Yes, Create New Key'}
                </Button>
                <Button
                  onClick={cancelRegenerate}
                  variant='outline'
                  disabled={regenerating}
                >
                  Cancel
                </Button>
              </>
            )}
          </div>

          {showRegenerateWarning && !regenerating && (
            <div className='mt-1 rounded bg-amber-50 p-2 text-sm text-amber-600'>
              <p>
                <strong>Warning:</strong> Creating a new key will invalidate
                your current key. Any systems using the current key will need to
                be updated. Are you sure?
              </p>
            </div>
          )}

          {regenerating && (
            <div className='mt-1 text-sm text-blue-600'>
              <p>Creating a new API key...</p>
            </div>
          )}
        </div>
      )}

      {error && (
        <div
          className={`mt-2 rounded p-2 text-sm ${
            error.includes('regenerated') || error.includes('stored securely')
              ? 'bg-blue-50 text-blue-600'
              : 'bg-red-50 text-red-600'
          }`}
        >
          <p>{error}</p>
        </div>
      )}

      {trusted && (
        <div className='mt-2 text-sm text-green-600'>
          <p>✓ This is a trusted API key with higher rate limits</p>
        </div>
      )}

      <p className='text-sm text-muted-foreground'>
        Tip: Keep your API key private and never share it publicly!
      </p>
    </Card>
  );
}
