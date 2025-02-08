import { NavItem } from 'types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'API Playground',
    url: '/dashboard/api-usage',
    icon: 'flask',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'API Documentation ↗',
    url: 'https://dashboard.aipowergrid.io/api-doc',
    icon: 'network',
    shortcut: ['r', 'r'],
    isActive: false,
    external: true,
    items: []
  },
  {
    title: 'API Key Generator',
    url: '/dashboard/api-key',
    icon: 'settings',
    isActive: true,
    shortcut: ['a', 'a'],
    items: [] // Now a standalone top-level item
  }
];

export interface Models {
  name: string;
  type: string;
  count: number;
}

export const recentModelsData: Models[] = [
  {
    name: 'Olivia Martin',
    type: 'olivia.martin@email.com',
    count: 100
  },
  {
    name: 'Jackson Lee',
    type: 'jackson.lee@email.com',
    count: 100
  },
  {
    name: 'Isabella Nguyen',
    type: 'isabella.nguyen@email.com',
    count: 100
  },
  {
    name: 'William Kim',
    type: 'will@email.com',
    count: 100
  },
  {
    name: 'Sofia Davis',
    type: 'sofia.davis@email.com',
    count: 100
  }
];
