import { site } from "../../data/site";

export default function Topbar() {
  return (
    <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0"></div>
        <div className="col-md-6 text-center text-lg-end">
          <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
            <div className="me-3 pe-3 border-end py-2">
              <p className="m-0">
                <i className="fa fa-envelope-open me-2"></i>
                <a className="text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div className="py-2">
              <p className="m-0">
                <i className="fa fa-phone-alt me-2"></i>
                {site.phones.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 ? " / " : ""}
                    <a className="text-white" href={`tel:${p.tel}`}>
                      {p.label}: {p.display}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
