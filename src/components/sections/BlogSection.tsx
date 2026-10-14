import { blogPosts } from '../../data/blog'
import BlogCard from '../cards/BlogCard'
import SectionTitle from '../SectionTitle'

interface BlogSectionProps {
  /** `latest`: home page teaser (3 posts with title). `grid`: full Blog Grid page. */
  variant?: 'latest' | 'grid'
}

export default function BlogSection({ variant = 'grid' }: BlogSectionProps) {
  const isLatest = variant === 'latest'
  const posts = isLatest ? blogPosts.slice(0, 3) : blogPosts

  return (
    <div className={`container-fluid ${isLatest ? 'pb-6' : 'py-6'} px-5`}>
      {isLatest && <SectionTitle title="Latest Blog Post" />}
      <div className="row g-5">
        {posts.map((post) => (
          <div key={post.id} className={isLatest ? 'col-lg-4' : 'col-lg-4 col-md-6'}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}
