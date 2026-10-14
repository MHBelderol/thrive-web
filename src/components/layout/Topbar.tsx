import { site, topbarLinks } from '../../data/site'

export default function Topbar() {
  return (
    <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            {topbarLinks.map((label, i) => {
              const isFirst = i === 0
              const isLast = i === topbarLinks.length - 1
              const spacing = isFirst ? 'pe-3' : isLast ? 'ps-3' : 'px-3'
              return (
                <a key={label} className={`text-body py-2 ${spacing}${isLast ? '' : ' border-end'}`} href="#">
                  <small>{label}</small>
                </a>
              )
            })}
          </div>
        </div>
        <div className="col-md-6 text-center text-lg-end">
          <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
            <div className="me-3 pe-3 border-end py-2">
              <p className="m-0">
                <i className="fa fa-envelope-open me-2"></i>
                {site.email}
              </p>
            </div>
            <div className="py-2">
              <p className="m-0">
                <i className="fa fa-phone-alt me-2"></i>
                {site.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
