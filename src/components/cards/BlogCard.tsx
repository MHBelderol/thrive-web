import { Link } from 'react-router-dom'
import type { BlogPost } from '../../types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="blog-item">
      <div className="position-relative overflow-hidden">
        <img className="img-fluid" src={post.image} alt={post.title} />
      </div>
      <div className="bg-secondary d-flex">
        <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
          <span>{post.day}</span>
          <h5 className="text-uppercase m-0">{post.month}</h5>
          <span>{post.year}</span>
        </div>
        <div className="d-flex flex-column justify-content-center py-3 px-4">
          <div className="d-flex mb-2">
            <small className="text-uppercase me-3">
              <i className="bi bi-person me-2"></i>
              {post.author}
            </small>
            <small className="text-uppercase me-3">
              <i className="bi bi-bookmarks me-2"></i>
              {post.category}
            </small>
          </div>
          {/* TODO: point to a post detail route once blog posts have their own pages. */}
          <Link className="h4" to="/blog">
            {post.title}
          </Link>
        </div>
      </div>
    </div>
  )
}
