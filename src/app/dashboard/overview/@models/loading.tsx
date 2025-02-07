import { Skeleton } from '@/components/ui/skeleton';
import { RecentModelsSkeleton } from '@/features/overview/components/recent-models-skeleton';
import React from 'react';

export default function Loading() {
  return <RecentModelsSkeleton />;
}
