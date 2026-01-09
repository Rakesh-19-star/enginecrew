import { useNavigate } from "react-router-dom"
import Slider from "react-slick"
import "./index.css"

import batteryRepair from "../../assets/services/batteryRepair.png"
import brakeRepair from "../../assets/services/brakeRepair.png"
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
    image: brakeRepair,
    tag: "Safety",
    desc: "Brake inspection & repair for safer driving.",
  },
  {
    name: "Breakdown Assistance",
    image: carBreakdown,
    tag: "Emergency",
    desc: "Immediate roadside help when your car breaks down.",
  },
]

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,          // ✅ MOBILE FIRST
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3200,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: true,
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
              <span className={`intent-tag ${service.tag.toLowerCase()}`}>
                {service.tag}
              </span>

              <div className="icon-wrap">
                <div className="icon-glass">
                  <img src={service.image} alt={service.name} />
                </div>
              </div>

              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          </div>
        ))}
      </Slider>

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
