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
    title: 'API Usage',
    url: '/dashboard/api-usage',
    icon: 'post',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Account',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'user',
    isActive: true,

    items: [
      // {
      //   title: 'Profile',
      //   url: '/dashboard/profile',
      //   icon: 'userPen',
      //   shortcut: ['m', 'm']
      // },
      {
        title: 'API Key',
        shortcut: ['a', 'a'],
        url: '/dashboard/api-key',
        icon: 'add'
      }
      // {
      //   title: 'Login',
      //   shortcut: ['l', 'l'],
      //   url: '/',
      //   icon: 'login'
      // }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
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
