import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Grid, Cpu, Network, Workflow, Code, Users } from 'lucide-react';

/**
 * AboutGrid Component
 *
 * This component provides an overview of the AI Power Grid dashboard, its purpose, and functionality.
 * It explains the core features and how the system works, using a visually appealing and informative layout.
 */
export function AboutGrid() {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Cpu className='mr-2 h-4 w-4' /> Core Functionality
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>AI Image and Text Generation</AccordionTrigger>
              <AccordionContent>
                Generate high-quality images and coherent text using
                state-of-the-art machine learning models through our API.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>API Abstraction</AccordionTrigger>
              <AccordionContent>
                Our API simplifies interaction with complex AI systems, making
                it easy for users to submit tasks and retrieve results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Workflow Customization</AccordionTrigger>
              <AccordionContent>
                Create advanced &quot;apps&quot; that combine abilities of
                different nodes or route text prompts based on knowledge
                domains.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Network className='mr-2 h-4 w-4' /> The Grid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='ml-5 list-disc space-y-2'>
            <li>Distributed network of AI workers</li>
            <li>Central director servers for job distribution</li>
            <li>Blockchain-validated and incentivized models</li>
            <li>Open access fostering innovation and creativity</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='col-span-full'>
        <CardHeader>
          <CardTitle className='flex items-center'>
            <Workflow className='mr-2 h-4 w-4' /> Dashboard Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            This dashboard provides a comprehensive view of the AI Power Grid
            system, including:
          </p>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='flex items-center space-x-2'>
              <Code className='h-4 w-4 text-primary' />
              <span>Real-time performance metrics</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Users className='h-4 w-4 text-primary' />
              <span>Active worker counts and statuses</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Cpu className='h-4 w-4 text-primary' />
              <span>Model utilization and statistics</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Network className='h-4 w-4 text-primary' />
              <span>Network health and job distribution</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
