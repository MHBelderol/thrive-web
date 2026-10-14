import PageHeader from '../components/PageHeader'
import BlogSection from '../components/sections/BlogSection'
import { site } from '../data/site'

export default function Blog() {
  return (
    <>
      <title>{`Blog Grid | ${site.titleSuffix}`}</title>
      <PageHeader title="Blog Grid" />
      <BlogSection variant="grid" />
    </>
  )
}
