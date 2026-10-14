import PageHeader from '../components/PageHeader'
import TeamSection from '../components/sections/TeamSection'
import { site } from '../data/site'

export default function Team() {
  return (
    <>
      <title>{`Our Team | ${site.titleSuffix}`}</title>
      <PageHeader title="Our Team" />
      <TeamSection />
    </>
  )
}
