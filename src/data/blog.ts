import blog1 from '../assets/img/blog-1.jpg'
import blog2 from '../assets/img/blog-2.jpg'
import blog3 from '../assets/img/blog-3.jpg'
import type { BlogPost } from '../types'

const images = [blog1, blog2, blog3]

/** The template's Blog Grid page shows 9 posts cycling through 3 images. */
export const blogPosts: BlogPost[] = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: 'Magna sea dolor ipsum amet lorem eos',
  image: images[i % images.length],
  day: '01',
  month: 'Jan',
  year: '2045',
  author: 'Admin',
  category: 'Web Design',
}))
