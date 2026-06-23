'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type BreadcrumbItem = {
  title: string;
  link: string;
};

// Custom titles for routes whose slug doesn't title-case cleanly
// (e.g. "api-usage" → "API Playground"). Anything not listed here falls back
// to a title-cased version of the path segments.
const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/dashboard': [{ title: 'Dashboard', link: '/dashboard' }],
  '/dashboard/overview': [{ title: 'Dashboard', link: '/dashboard/overview' }],
  '/dashboard/workers': [{ title: 'Grid Workers', link: '/dashboard/workers' }],
  '/dashboard/api-usage': [
    { title: 'API Playground', link: '/dashboard/api-usage' }
  ],
  '/dashboard/api-key': [{ title: 'API Keys', link: '/dashboard/api-key' }],
  '/dashboard/rewards': [{ title: 'Rewards', link: '/dashboard/rewards' }],
  '/dashboard/settings': [{ title: 'Settings', link: '/dashboard/settings' }]
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
