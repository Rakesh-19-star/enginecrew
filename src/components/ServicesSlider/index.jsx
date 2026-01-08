import { useNavigate } from "react-router-dom"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

import batteryRepair from "../../assets/services/batteryRepair.png"
import brakeRepair from  "../../assets/services/brakeRepair.png"
import carBreakdown from "../../assets/services/carBreakdown.png"
import carDiagnostic from "../../assets/services/carDiagnostic.png"
import generalService from "../../assets/services/generalService.png"
const services = [
  {
    name: "General Car Service",
    image: generalService,
    tag: "Recommended",
    desc: "Routine maintenance to keep your car running smoothly.",
  },
  {
    name: "Engine Diagnostics",
    image: carDiagnostic,
    tag: "Popular",
    desc: "Quick diagnosis for engine & performance issues.",
  },
  {
    name: "Battery Replacement",
    image: batteryRepair,
    tag: "Popular",
    desc: "Instant battery check & on-spot replacement.",
  },
  {
    name: "Brake Repair",
    image:brakeRepair,
    tag: "Safety",
    desc: "Brake inspection & repair for safer driving.",
  },
  {
    name: "Breakdown Assistance",
    image:carBreakdown,
    tag: "Emergency",
    desc: "Immediate roadside help when your car breaks down.",
  },
]

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "40px",
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
}

const ServicesSlider = () => {
  const navigate = useNavigate()

  return (
    <section className="services-slider">
      <h2 className="services-title">Our Services</h2>

      <Slider {...settings}>
        {services.map(service => (
          <div key={service.name} className="slide">
            <div className="service-card">
              {/* Intent Tag */}
              <span
                className={`intent-tag ${service.tag.toLowerCase()}`}
              >
                {service.tag}
              </span>

             <div className="service-icon">
  <img src={service.image} alt={service.name} />
</div>

              <h3 className="service-name">{service.name}</h3>

              {/* Micro description (active slide only via CSS) */}
              <p className="service-desc">{service.desc}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Swipe hint (mobile only) */}
      <p className="swipe-hint">← Swipe to explore services →</p>

      <button
        className="see-all-btn"
        onClick={() => navigate("/services")}
      >
        See All Services →
      </button>
    </section>
  )
}

export default ServicesSlider
