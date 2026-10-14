import PageHeader from '../components/PageHeader'
import ServicesSection from '../components/sections/ServicesSection'
import { site } from '../data/site'

export default function Service() {
  return (
    <>
      <title>{`Services | ${site.titleSuffix}`}</title>
      <PageHeader title="Services" />
      <ServicesSection spacing="py-6" />
    </>
  )
}
