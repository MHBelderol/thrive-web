export interface NavLinkItem {
  label: string
  to: string
}

export interface NavDropdownItem {
  label: string
  children: NavLinkItem[]
}

export type NavItem = NavLinkItem | NavDropdownItem

export interface Feature {
  title: string
  description: string
  icon: string
}

export type Service = Feature

export interface TeamMember {
  name: string
  designation: string
  image: string
}

export interface BlogPost {
  id: number
  title: string
  image: string
  day: string
  month: string
  year: string
  author: string
  category: string
}

export interface CarouselSlide {
  image: string
  subtitle: string
  title: string
}

export interface SocialLink {
  label: string
  icon: string
  href: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
