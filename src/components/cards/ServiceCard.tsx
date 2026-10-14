import type { Service } from '../../types'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="service-item bg-secondary text-center px-5">
      <div
        className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
        style={{ width: 90, height: 90 }}
      >
        <i className={`${service.icon} fa-2x`}></i>
      </div>
      <h3 className="mb-3">{service.title}</h3>
      <p className="mb-0">{service.description}</p>
    </div>
  )
}
