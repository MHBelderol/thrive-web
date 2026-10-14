import PageHeader from '../components/PageHeader'
import ContactSection from '../components/sections/ContactSection'
import { site } from '../data/site'

export default function Contact() {
  return (
    <>
      <title>{`Contact Us | ${site.titleSuffix}`}</title>
      <PageHeader title="Contact Us" crumb="Contact" />
      <ContactSection />
    </>
  )
}
