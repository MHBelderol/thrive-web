import { services } from '../../data/services'
import ServiceCard from '../cards/ServiceCard'
import SectionTitle from '../SectionTitle'

interface ServicesSectionProps {
  /** Home page uses `pt-6` (team section follows); Service page uses `py-6`. */
  spacing?: 'pt-6' | 'py-6'
}

export default function ServicesSection({ spacing = 'py-6' }: ServicesSectionProps) {
  return (
    <div className={`container-fluid ${spacing} px-5`}>
      <SectionTitle title="What We Offer" />
      <div className="row g-5">
        {services.map((service) => (
          <div key={service.title} className="col-lg-4 col-md-6">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}
