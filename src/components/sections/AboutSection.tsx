import { Link } from 'react-router-dom'
import { aboutFeatures } from '../../data/services'
import { site } from '../../data/site'

export default function AboutSection() {
  return (
    <div className="container-fluid bg-secondary p-0">
      <div className="row g-0">
        <div className="col-lg-6 py-6 px-5">
          <h1 className="display-5 mb-4">
            Welcome To <span className="text-primary">{site.brandName}</span>
          </h1>
          <h4 className="text-primary mb-4">
            Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore
          </h4>
          <p className="mb-4">
            Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet
            dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet. Accusam nonumy lorem
            kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus
            sanctus invidunt erat ipsum eirmod.
          </p>
          <Link to="/contact" className="btn btn-primary py-md-3 px-md-5 rounded-pill">
            Get A Quote
          </Link>
        </div>
        <div className="col-lg-6">
          <div className="h-100 d-flex flex-column justify-content-center bg-primary p-5">
            {aboutFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className={`d-flex text-white${i < aboutFeatures.length - 1 ? ' mb-5' : ''}`}
              >
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                  style={{ width: 60, height: 60 }}
                >
                  <i className={`${feature.icon} fs-4`}></i>
                </div>
                <div className="ps-4">
                  <h3>{feature.title}</h3>
                  <p className="mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
