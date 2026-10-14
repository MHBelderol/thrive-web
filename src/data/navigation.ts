import type { NavItem, NavLinkItem } from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Service', to: '/service' },
  {
    label: 'Pages',
    children: [
      { label: 'Blog Grid', to: '/blog' },
      { label: 'The Team', to: '/team' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/service' },
  { label: 'Latest Blog Post', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]
