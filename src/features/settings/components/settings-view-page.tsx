'use client';
import React, { useState, useEffect } from 'react';
import UsernameChangeSection from './username-change-section';
import ApiKeyGenerator from '@/features/api-key/components/api-key-view-page';
import { Separator } from '@/components/ui/separator';

interface ApiResponse {
  apiKey?: string;
  trusted: boolean;
  userId?: number;
  username?: string;
  error?: string;
  message?: string;
  keyStored?: boolean;
  requiresRegeneration?: boolean;
}

export default function SettingsViewPage() {
  const [currentUsername, setCurrentUsername] = useState<string>('');

  // Fetch username from API key endpoint (which returns user info)
  // This ensures the username change section has the current username
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/api/generate-api-key', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });

        const data: ApiResponse = await response.json();
        if (data.username) {
          setCurrentUsername(data.username);
        }
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleUsernameUpdate = (newUsername: string) => {
    setCurrentUsername(newUsername);
    // The API key component will show the updated username when it next fetches
    // (e.g., when user interacts with it or page is refreshed)
  };

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Settings</h1>
        <p className='mt-2 text-muted-foreground'>
          Manage your account settings and API keys
        </p>
      </div>

      <UsernameChangeSection
        currentUsername={currentUsername}
        onUsernameUpdate={handleUsernameUpdate}
      />

      <Separator className='my-6' />

      <ApiKeyGenerator />
    </div>
  );
}
