'use client';
import type React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
      const res = await fetch(
        'https://dashboard.aipowergrid.io/api/generate-text',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: textPrompt,
            apiKey,
            uuid: 'test-uuid',
            model: selectedTextModel
          })
        }
      );
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
      const res = await fetch(
        'https://dashboard.aipowergrid.io/api/generate-image',
        {
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
        }
      );
      const data = await res.json();
      setImageResponse(data.response);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsImageLoading(false);
    }
  };

  const textApiCode = `
curl -X POST https://api.aipowergrid.io/api/v2/generate/text/async \\
-H "Content-Type: application/json" \\
-H "apikey: YOUR_API_KEY" \\
-d '{
  "prompt": "Your prompt here",
  "models": ["${selectedTextModel}"],
  "params": {
    "max_context_length": 512,
    "max_length": 50,
    "temperature": 0.7,
    "top_p": 0.9
  }
}'
  `;

  const imageApiCode = `
curl -X POST https://api.aipowergrid.io/api/v2/generate/async \\
-H "Content-Type: application/json" \\
-H "apikey: YOUR_API_KEY" \\
-d '{
  "prompt": "Your prompt here",
  "models": ["${selectedImageModel}"],
  "params": {
    "n": 1,
    "width": 512,
    "height": 512,
    "steps": 30,
    "sampler_name": "DDIM",
    "cfg_scale": 7.5
  }
}'
  `;

  return (
    <div className='space-y-6 p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>AI Power Grid API Usage</h1>
        <Button onClick={() => setShowCode(!showCode)} variant='outline'>
          <Code className='mr-2 h-4 w-4' />
          {showCode ? 'Hide Code' : 'Show Code'}
        </Button>
      </div>

      {showCode && (
        <Card>
          <CardHeader>
            <CardTitle>API Usage Examples</CardTitle>
            <CardDescription>
              Use these curl commands to interact with the AI Power Grid API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue='text'>
              <TabsList>
                <TabsTrigger value='text'>Text Generation</TabsTrigger>
                <TabsTrigger value='image'>Image Generation</TabsTrigger>
              </TabsList>
              <TabsContent value='text'>
                <pre className='overflow-x-auto rounded-md bg-muted p-4'>
                  <code>{textApiCode}</code>
                </pre>
              </TabsContent>
              <TabsContent value='image'>
                <pre className='overflow-x-auto rounded-md bg-muted p-4'>
                  <code>{imageApiCode}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {/* Text Generation Column */}
        <Card>
          <CardHeader>
            <CardTitle>Text Generation</CardTitle>
            <CardDescription>Generate text using AI models</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTextSubmit} className='space-y-2'>
              <input
                type='text'
                placeholder='Enter API Key'
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className='w-full rounded border p-2'
              />
              <input
                type='text'
                placeholder='Enter Text Prompt'
                value={textPrompt}
                onChange={(e) => setTextPrompt(e.target.value)}
                className='w-full rounded border p-2'
              />
              <select
                value={selectedTextModel}
                onChange={(e) => setSelectedTextModel(e.target.value)}
                className='w-full rounded border p-2'
              >
                <option value=''>Select Text Model</option>
                {textModels.map((model) => (
                  <option key={model.name} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
              <Button type='submit' disabled={isTextLoading} className='w-full'>
                {isTextLoading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Generating...
                  </>
                ) : (
                  'Generate Text'
                )}
              </Button>
            </form>
            {textResponse && (
              <div className='mt-4 rounded border p-2'>
                <h3 className='font-semibold'>Response:</h3>
                <p>{textResponse}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Image Generation Column */}
        <Card>
          <CardHeader>
            <CardTitle>Image Generation</CardTitle>
            <CardDescription>Generate images using AI models</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleImageSubmit} className='space-y-2'>
              <input
                type='text'
                placeholder='Enter API Key'
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className='w-full rounded border p-2'
              />
              <input
                type='text'
                placeholder='Enter Image Prompt'
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)}
                className='w-full rounded border p-2'
              />
              <select
                value={selectedImageModel}
                onChange={(e) => setSelectedImageModel(e.target.value)}
                className='w-full rounded border p-2'
              >
                <option value=''>Select Image Model</option>
                {imageModels.map((model) => (
                  <option key={model.name} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
              <Button
                type='submit'
                disabled={isImageLoading}
                className='w-full'
              >
                {isImageLoading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Generating...
                  </>
                ) : (
                  'Generate Image'
                )}
              </Button>
            </form>
            {imageResponse && (
              <div className='mt-4 rounded border p-2'>
                <h3 className='font-semibold'>Response:</h3>
                <img
                  src={imageResponse || '/placeholder.svg'}
                  alt='Generated'
                  className='mx-auto w-full max-w-md'
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
