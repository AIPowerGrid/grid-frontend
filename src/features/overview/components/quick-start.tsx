import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Image, MessageSquare, BookOpen } from 'lucide-react';
import Link from 'next/link';

/**
 * QuickStart Component
 *
 * A lightweight set of jump-off points: the apps built on the grid plus the
 * API reference.
 */
export function QuickStart() {
  return (
    <Card className='w-full overflow-hidden'>
      <CardHeader className='bg-gradient-to-r from-primary to-primary/60 p-4'>
        <CardTitle className='text-xl font-bold text-primary-foreground'>
          Quick Resources
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4'>
        <div className='grid gap-4 sm:grid-cols-2'>
          {/* Art Gallery Card */}
          <Link
            href='https://aipg.art'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Card className='group cursor-pointer overflow-hidden transition-all hover:shadow-md hover:ring-2 hover:ring-primary/50'>
              <CardContent className='flex items-center gap-4 p-4'>
                <div className='rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20'>
                  <Image className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold'>Art Gallery</h3>
                  <p className='text-sm text-muted-foreground'>
                    Generate images and video on the grid
                  </p>
                </div>
                <ExternalLink className='ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100' />
              </CardContent>
            </Card>
          </Link>

          {/* AI Chat Card */}
          <Link
            href='https://aipg.chat'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Card className='group cursor-pointer overflow-hidden transition-all hover:shadow-md hover:ring-2 hover:ring-primary/50'>
              <CardContent className='flex items-center gap-4 p-4'>
                <div className='rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20'>
                  <MessageSquare className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold'>AI Chat</h3>
                  <p className='text-sm text-muted-foreground'>
                    Chat with open models, powered by the grid
                  </p>
                </div>
                <ExternalLink className='ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100' />
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className='mt-4 flex items-center justify-between rounded-lg bg-muted p-4'>
          <div className='flex items-center gap-2'>
            <BookOpen className='h-5 w-5 text-primary' />
            <span className='text-sm font-medium'>API documentation</span>
          </div>
          <Link href='/api-doc' target='_blank' rel='noopener noreferrer'>
            <Button variant='outline' size='sm'>
              Open API reference
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
