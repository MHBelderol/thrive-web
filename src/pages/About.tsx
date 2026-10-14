import PageHeader from '../components/PageHeader'
import AboutSection from '../components/sections/AboutSection'
import TeamSection from '../components/sections/TeamSection'
import { site } from '../data/site'

export default function About() {
  return (
    <>
      <title>{`About Us | ${site.titleSuffix}`}</title>
      <PageHeader title="About Us" crumb="About" />
      <AboutSection />
      <TeamSection />
    </>
  )
}
