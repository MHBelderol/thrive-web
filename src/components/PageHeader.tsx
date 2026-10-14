import { Link, useLocation } from 'react-router-dom'

interface PageHeaderProps {
  title: string
  /** Breadcrumb label for the current page; defaults to `title`. */
  crumb?: string
}

export default function PageHeader({ title, crumb = title }: PageHeaderProps) {
  const { pathname } = useLocation()

  return (
    <div className="container-fluid bg-dark p-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4 text-white">{title}</h1>
          <Link to="/">Home</Link>
          <i className="far fa-square text-primary px-2"></i>
          <Link to={pathname}>{crumb}</Link>
        </div>
      </div>
    </div>
  )
}
