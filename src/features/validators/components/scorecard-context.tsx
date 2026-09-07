// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later
'use client';

import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import {
  evidenceContext,
  evidenceCount,
  probeAge,
  type EvidenceMetadata
} from '../evidence-context';

interface ContextProps {
  item: EvidenceMetadata & { total: number; subject_id: string };
}

export function ScorecardSamples({ item }: ContextProps) {
  const context = evidenceContext(item, item.total);
  return (
    <div className='min-w-40 space-y-1 text-xs tabular-nums'>
      <div className='flex items-center gap-1 text-sm font-medium'>
        {evidenceCount(context.votes)} votes
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='h-8 w-8 shrink-0'
              aria-label={`Evidence limits for ${item.subject_id}`}
              title='Evidence counts and limits'
            >
              <Info className='h-4 w-4' aria-hidden='true' />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            collisionPadding={12}
            className='max-h-[70dvh] w-80 max-w-[calc(100vw-24px)] space-y-3 overflow-y-auto text-sm'
          >
            <h3 className='font-semibold'>Evidence counts and limits</h3>
            <dl className='grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 text-xs'>
              <dt>Retained assignments</dt>
              <dd>{evidenceCount(context.assignments)}</dd>
              <dt>Distinct probe groups</dt>
              <dd>{evidenceCount(context.groups)}</dd>
              <dt>Registered validators</dt>
              <dd>{evidenceCount(context.validators)}</dd>
              <dt>Votes without a group</dt>
              <dd>{evidenceCount(context.ungrouped)}</dd>
              <dt>Votes without registration</dt>
              <dd>{evidenceCount(context.unregistered)}</dd>
            </dl>
            <p>
              Independent samples: unknown. Confidence interval: not estimated.
            </p>
            <p className='text-xs text-muted-foreground'>
              Votes may be correlated, registrations do not establish
              independent operators, and probes are not a random sample of user
              workloads. Counts across rows may overlap. Passing probes do not
              prove model identity.
            </p>
          </PopoverContent>
        </Popover>
      </div>
      <div>{evidenceCount(context.groups)} groups</div>
      <div>{evidenceCount(context.validators)} registered validators</div>
      <div className='text-muted-foreground'>Independence unknown</div>
    </div>
  );
}

export function ScorecardFreshness({ item }: ContextProps) {
  const context = evidenceContext(item, item.total);
  return (
    <div className='min-w-40 space-y-1 text-xs'>
      <div className='font-medium'>{probeAge(context.ageSeconds)}</div>
      {context.latestProbe ? (
        <time dateTime={context.latestProbe}>
          {new Date(context.latestProbe).toLocaleString()}
        </time>
      ) : null}
      <div className='text-muted-foreground'>
        {evidenceCount(context.timedVotes)} / {evidenceCount(context.votes)}{' '}
        votes with probe time
      </div>
      {context.partialTiming ? (
        <div className='text-muted-foreground'>Some probe times missing</div>
      ) : null}
      {context.timingIssue ? (
        <div className='text-muted-foreground'>Probe clock needs review</div>
      ) : null}
    </div>
  );
}
