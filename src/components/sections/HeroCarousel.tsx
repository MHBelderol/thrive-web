import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { carouselSlides } from "../../data/carousel";

export default function HeroCarousel() {
  return (
    <div className="container-fluid p-0">
      <Carousel id="header-carousel" fade indicators={false}>
        {carouselSlides.map((slide) => (
          <Carousel.Item key={slide.title}>
            <img className="w-100" src={slide.image} alt={slide.title} />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase">{slide.subtitle}</h5>
                <h1 className="display-1 text-white mb-md-4">{slide.title}</h1>
                <Link
                  to="/contact"
                  className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill"
                >
                  Let's Talk!
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-secondary py-md-3 px-md-5 rounded-pill"
                >
                  Contact Us
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
