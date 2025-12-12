'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface UsernameResponse {
  success?: boolean;
  username?: string;
  error?: string;
  message?: string;
}

interface UsernameChangeSectionProps {
  currentUsername?: string;
  onUsernameUpdate?: (newUsername: string) => void;
}

export default function UsernameChangeSection({
  currentUsername,
  onUsernameUpdate
}: UsernameChangeSectionProps) {
  const [username, setUsername] = useState<string>(currentUsername || '');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Update local state when currentUsername prop changes
  useEffect(() => {
    if (currentUsername) {
      setUsername(currentUsername);
    }
  }, [currentUsername]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic client-side validation
    if (!username.trim()) {
      setError('Username cannot be empty');
      setLoading(false);
      return;
    }

    if (username.trim() === currentUsername) {
      setError('This is already your current username');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/update-username', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim() })
      });

      const data: UsernameResponse = await response.json();

      if (response.ok && data.success) {
        setSuccess(data.message || 'Username updated successfully');
        if (data.username) {
          setUsername(data.username);
          if (onUsernameUpdate) {
            onUsernameUpdate(data.username);
          }
        }
      } else {
        setError(data.error || 'Failed to update username');
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to update username';
      setError(errorMessage);
    }

    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Username</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='username'
              className='mb-2 block text-sm font-medium'
            >
              Username
            </label>
            <Input
              id='username'
              type='text'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(null);
                setSuccess(null);
              }}
              placeholder='Enter your username'
              disabled={loading}
              minLength={3}
              maxLength={100}
              pattern='[a-zA-Z0-9_-]+'
              className='w-full'
            />
            <p className='mt-1 text-xs text-muted-foreground'>
              3-100 characters. Only letters, numbers, underscores, and hyphens
              are allowed.
            </p>
          </div>

          {error && (
            <div className='rounded bg-red-50 p-2 text-sm text-red-600'>
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className='rounded bg-green-50 p-2 text-sm text-green-600'>
              <p>{success}</p>
            </div>
          )}

          <Button type='submit' disabled={loading} className='w-full sm:w-auto'>
            {loading ? 'Updating...' : 'Update Username'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
