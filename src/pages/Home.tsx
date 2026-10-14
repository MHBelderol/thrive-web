import AboutSection from '../components/sections/AboutSection'
import BlogSection from '../components/sections/BlogSection'
import HeroCarousel from '../components/sections/HeroCarousel'
import ServicesSection from '../components/sections/ServicesSection'
import TeamSection from '../components/sections/TeamSection'
import { site } from '../data/site'

export default function Home() {
  return (
    <>
      <title>{site.titleSuffix}</title>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection spacing="pt-6" />
      <TeamSection />
      <BlogSection variant="latest" />
    </>
  )
}
