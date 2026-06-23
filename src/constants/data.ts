import { NavItem } from 'types';

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
    title: 'API Keys',
    url: '/dashboard/api-key',
    icon: 'key',
    shortcut: ['k', 'k'],
    isActive: false,
    items: []
  },
  {
    title: 'Grid Workers',
    url: '/dashboard/workers',
    icon: 'user2',
    shortcut: ['w', 'w'],
    isActive: false,
    items: [] // Empty array as there are no child items for Workers
  },
  {
    title: 'Rewards (Beta)',
    url: '/dashboard/rewards',
    icon: 'billing',
    shortcut: ['w', 'w'],
    isActive: false,
    items: [] // Empty array as there are no child items for Rewards
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
    url: 'https://docs.aipowergrid.io',
    icon: 'network',
    shortcut: ['r', 'r'],
    isActive: false,
    external: true,
    items: []
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: 'settings',
    isActive: true,
    shortcut: ['s', 's'],
    items: [] // Now a standalone top-level item
  }
];
