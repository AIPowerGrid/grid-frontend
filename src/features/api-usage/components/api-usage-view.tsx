'use client';
import type React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Loader2, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function ApiUsageView() {
  const [textPrompt, setTextPrompt] = useState('');
  const [imagePrompt, setImagePrompt] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [selectedTextModel, setSelectedTextModel] = useState('');
  const [selectedImageModel, setSelectedImageModel] = useState('');
  const [textResponse, setTextResponse] = useState('');
  const [imageResponse, setImageResponse] = useState('');
  const [textModels, setTextModels] = useState<any[]>([]);
  const [imageModels, setImageModels] = useState<any[]>([]);
  const [isTextLoading, setIsTextLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    async function fetchModels() {
      try {
        const [textRes, imageRes] = await Promise.all([
          fetch('/api/models?type=text'),
          fetch('/api/models?type=image')
        ]);
        const textData = await textRes.json();
        const imageData = await imageRes.json();
        setTextModels(textData);
        setImageModels(imageData);
      } catch (error) {
        console.error('Failed to fetch models', error);
      }
    }
    fetchModels();
  }, []);

  const handleTextSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTextLoading(true);
    try {
      const res = await fetch('/api/generate-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textPrompt,
          apiKey,
          uuid: 'test-uuid',
          model: selectedTextModel
        })
      });
      const data = await res.json();
      setTextResponse(data.response);
    } catch (error) {
      console.error('Error generating text:', error);
    } finally {
      setIsTextLoading(false);
    }
  };

  const handleImageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsImageLoading(true);
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: imagePrompt,
          apiKey,
          uuid: 'test-uuid',
          model: selectedImageModel,
          customSettings: {
            nsfw: false,
            batchSize: 1,
            width: 512,
            height: 512,
            steps: 30,
            sampler: 'default',
            tiling: false,
            clipSkip: 0,
            karras: false,
            hiResFix: false
          }
        })
      });
      const data = await res.json();
      setImageResponse(data.response);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsImageLoading(false);
    }
  };

  const textApiCode = `curl https://api.aipowergrid.io/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "${selectedTextModel || 'MODEL_NAME'}",
    "messages": [
      { "role": "user", "content": "Your prompt here" }
    ],
    "stream": true
  }'`;

  const imageApiCode = `curl https://api.aipowergrid.io/v1/images/generations \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "${selectedImageModel || 'MODEL_NAME'}",
    "prompt": "Your prompt here",
    "n": 1,
    "size": "1024x1024"
  }'`;

  return (
    <div className='mx-auto w-full max-w-5xl space-y-6'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>API Playground</h1>
          <p className='text-sm text-muted-foreground'>
            Try a live call against the grid. The grid is OpenAI-compatible —
            point any OpenAI SDK at{' '}
            <code className='rounded bg-muted px-1 py-0.5 text-xs'>
              https://api.aipowergrid.io/v1
            </code>{' '}
            and reuse the code below.
          </p>
        </div>
        <Button
          onClick={() => setShowCode(!showCode)}
          variant='outline'
          className='shrink-0'
        >
          <Code className='mr-2 h-4 w-4' />
          {showCode ? 'Hide code' : 'Show code'}
        </Button>
      </div>

      {showCode && (
        <Card>
          <CardHeader>
            <CardTitle>Copy-paste examples</CardTitle>
            <CardDescription>
              Swap in your API key and a model name from the lists below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue='text'>
              <TabsList>
                <TabsTrigger value='text'>Text generation</TabsTrigger>
                <TabsTrigger value='image'>Image generation</TabsTrigger>
              </TabsList>
              <TabsContent value='text'>
                <pre className='overflow-x-auto rounded-md bg-muted p-4 text-xs'>
                  <code>{textApiCode}</code>
                </pre>
              </TabsContent>
              <TabsContent value='image'>
                <pre className='overflow-x-auto rounded-md bg-muted p-4 text-xs'>
                  <code>{imageApiCode}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {/* Text Generation */}
        <Card>
          <CardHeader>
            <CardTitle>Text generation</CardTitle>
            <CardDescription>
              Send a chat completion to a live text model.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTextSubmit} className='space-y-3'>
              <div className='space-y-1.5'>
                <Label htmlFor='text-api-key'>API key</Label>
                <Input
                  id='text-api-key'
                  type='password'
                  placeholder='Paste your API key'
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <div className='space-y-1.5'>
                <Label htmlFor='text-model'>Model</Label>
                <Select
                  value={selectedTextModel}
                  onValueChange={setSelectedTextModel}
                >
                  <SelectTrigger id='text-model'>
                    <SelectValue placeholder='Select a text model' />
                  </SelectTrigger>
                  <SelectContent>
                    {textModels.map((model) => (
                      <SelectItem key={model.name} value={model.name}>
                        {model.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-1.5'>
                <Label htmlFor='text-prompt'>Prompt</Label>
                <Input
                  id='text-prompt'
                  type='text'
                  placeholder='Ask the model something…'
                  value={textPrompt}
                  onChange={(e) => setTextPrompt(e.target.value)}
                />
              </div>
              <Button type='submit' disabled={isTextLoading} className='w-full'>
                {isTextLoading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Generating…
                  </>
                ) : (
                  'Generate text'
                )}
              </Button>
            </form>
            {textResponse && (
              <div className='mt-4 rounded-md border p-3'>
                <h3 className='mb-1 text-sm font-semibold'>Response</h3>
                <p className='whitespace-pre-wrap text-sm'>{textResponse}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Image Generation */}
        <Card>
          <CardHeader>
            <CardTitle>Image generation</CardTitle>
            <CardDescription>
              Render a prompt with a live image model.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleImageSubmit} className='space-y-3'>
              <div className='space-y-1.5'>
                <Label htmlFor='image-api-key'>API key</Label>
                <Input
                  id='image-api-key'
                  type='password'
                  placeholder='Paste your API key'
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <div className='space-y-1.5'>
                <Label htmlFor='image-model'>Model</Label>
                <Select
                  value={selectedImageModel}
                  onValueChange={setSelectedImageModel}
                >
                  <SelectTrigger id='image-model'>
                    <SelectValue placeholder='Select an image model' />
                  </SelectTrigger>
                  <SelectContent>
                    {imageModels.map((model) => (
                      <SelectItem key={model.name} value={model.name}>
                        {model.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-1.5'>
                <Label htmlFor='image-prompt'>Prompt</Label>
                <Input
                  id='image-prompt'
                  type='text'
                  placeholder='Describe the image…'
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                />
              </div>
              <Button
                type='submit'
                disabled={isImageLoading}
                className='w-full'
              >
                {isImageLoading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Generating…
                  </>
                ) : (
                  'Generate image'
                )}
              </Button>
            </form>
            {imageResponse && (
              <div className='mt-4 rounded-md border p-3'>
                <h3 className='mb-2 text-sm font-semibold'>Response</h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageResponse || '/placeholder.svg'}
                  alt='Generated'
                  className='mx-auto w-full max-w-md rounded-md'
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
