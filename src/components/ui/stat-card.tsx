import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import type { Icon } from '@/components/icons';

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  hint?: string;
  icon?: Icon;
  className?: string;
}

/**
 * Uniform metric tile. Every stat across the console uses this so the cards are
 * always the same height with the same label/value/hint rhythm — no more
 * content-sized boxes of different sizes.
 */
export function StatCard({
  label,
  value,
  hint,
  icon: IconCmp,
  className
}: StatCardProps) {
  return (
    <Card className={cn('h-full', className)}>
      <CardContent className='flex h-full flex-col gap-1 p-5'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-medium text-muted-foreground'>
            {label}
          </span>
          {IconCmp ? (
            <IconCmp className='h-4 w-4 text-muted-foreground' />
          ) : null}
        </div>
        <div className='text-3xl font-semibold tabular-nums tracking-tight'>
          {value}
        </div>
        {hint ? (
          <p className='mt-auto pt-1 text-xs text-muted-foreground'>{hint}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
