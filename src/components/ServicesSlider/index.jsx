import { useEffect } from "react"
import Slider from "react-slick"
import { useNavigate } from "react-router-dom"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

const services = [
  { name: "General Car Service", icon: "🔧" },
  { name: "Engine Diagnostics", icon: "🧠" },
  { name: "Battery Replacement", icon: "🔋" },
  { name: "Brake Repair", icon: "🛑" },
  { name: "Breakdown Assistance", icon: "🚨" },
]

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,          // ⭐ key
  centerPadding: "40px",     // ⭐ shows next card peek
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
  ],
}


const ServicesSlider = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.25 }
    )

    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services-slider">
      <h2 className="services-title">Our Services</h2>

      <Slider {...settings}>
        {services.map(service => (
          <div key={service.name} className="slide">
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
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
