import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { site } from '../data/site'

export default function NotFound() {
  return (
    <>
      <title>{`Page Not Found | ${site.titleSuffix}`}</title>
      <PageHeader title="404 Error" crumb="Not Found" />
      <div className="container-fluid py-6 px-5 text-center">
        <h1 className="display-5 mb-4">Page Not Found</h1>
        <p className="mb-4">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn btn-primary py-md-3 px-md-5 rounded-pill">
          Go Back To Home
        </Link>
      </div>
    </>
  )
}
