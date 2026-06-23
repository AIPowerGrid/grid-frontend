import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Cpu, Network, Workflow, Code, Users } from 'lucide-react';

/**
 * AboutGrid Component
 *
 * A short orientation panel for the console: what the API does, how the grid
 * works, and what this console gives you. Kept in sync with current product
 * positioning (OpenAI-compatible /v1, decentralized GPU network, on-chain
 * settlement).
 */
export function AboutGrid() {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Cpu className='mr-2 h-4 w-4' /> What you can build
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>OpenAI-compatible API</AccordionTrigger>
              <AccordionContent>
                Point any OpenAI SDK at{' '}
                <code>https://api.aipowergrid.io/v1</code> and change the base
                URL. Chat, completions, images, and video use the request and
                response shapes you already know.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Text, image &amp; video</AccordionTrigger>
              <AccordionContent>
                Open models for chat and reasoning, image generation, and video,
                all behind one API key. No per-model accounts or separate
                billing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Streaming &amp; agents</AccordionTrigger>
              <AccordionContent>
                Token streaming over SSE and tool calls out of the box, on an
                agent-friendly surface built to plug into apps and autonomous
                workflows.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Network className='mr-2 h-4 w-4' /> How the grid works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='ml-5 list-disc space-y-2'>
            <li>A decentralized network of GPU workers serving open models</li>
            <li>One OpenAI-compatible /v1 endpoint, no vendor lock-in</li>
            <li>Every job metered and settled on-chain on Base</li>
            <li>Open participation: run a worker, earn rewards</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='col-span-full'>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Workflow className='mr-2 h-4 w-4' /> Your console
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Everything you need to build on the grid, in one place:
          </p>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='flex items-center space-x-2'>
              <Code className='h-4 w-4 text-primary' />
              <span>API keys — one per app, revoke anytime</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Users className='h-4 w-4 text-primary' />
              <span>Workers and models online right now</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Cpu className='h-4 w-4 text-primary' />
              <span>A playground to test calls against live models</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Network className='h-4 w-4 text-primary' />
              <span>Worker rewards from the settlement ledger</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
