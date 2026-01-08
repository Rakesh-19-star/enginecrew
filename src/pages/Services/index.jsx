import { useEffect, useRef, useState } from "react"
import "./index.css"

import batteryRepair from "../../assets/services/batteryRepair.png"
import brakeRepair from  "../../assets/services/brakeRepair.png"
import carBreakdown from "../../assets/services/carBreakdown.png"
import carDiagnostic from "../../assets/services/carDiagnostic.png"
import generalService from "../../assets/services/generalService.png"
import minorParts  from "../../assets/services/minorParts.png"
import { image } from "framer-motion/client"


const servicesData = [
  {
    image: generalService,
    title: "General Car Service",
    points: [
      "Engine oil replacement",
      "Oil & air filter change",
      "Fluid top-ups",
      "Basic inspection",
    ],
    highlight: "Recommended every 10,000 km",
  },
  {
    image: carDiagnostic,
    title: "Engine Diagnostics",
    points: [
      "Check engine light scan",
      "ECU fault code reading",
      "Performance issue diagnosis",
    ],
    highlight: "Accurate diagnosis at your location",
  },
  {
    image: batteryRepair,
    title: "Battery Replacement",
    points: [
      "Battery health check",
      "New battery supply & installation",
      "Old battery buyback support",
    ],
    highlight: "On-spot replacement",
  },
  {
    image:brakeRepair ,
    title: "Brake Inspection & Repair",
    points: [
      "Brake pad replacement",
      "Disc & brake system inspection",
      "Noise & vibration issues",
    ],
    highlight: "Safety-first service",
  },
  {
    image: carBreakdown,
    title: "Breakdown Assistance",
    points: [
      "Jump start",
      "Minor roadside repairs",
      "Emergency support",
    ],
    highlight: "Fast response in Hyderabad",
  },
  {
    image: minorParts,
    title: "Belts & Hoses Replacement",
    points: [
      "Drive / AC / alternator belts",

      "Radiator & coolant hoses",
      "Wear & leak inspection",
    ],
    highlight: "Doorstep inspection & replacement",
  },
  {
    image: minorParts,
    title: "Timing Belt Replacement",
    points: [
      "Timing belt inspection",
      "Tensioner & alignment check",
      "Engine safety assessment",
    ],
    highlight: "Recommended at 60,000–100,000 km",
  },
  {
    image:  minorParts ,
    title: "Minor Parts Replacement",
    points: [
      "Wipers, bulbs & fuses",
      "Spark plugs & sensors",
      "Quick diagnostics before replacement",
    ],
    highlight: "Fast on-spot service",
  },
  {
    image: minorParts,
    title: "EV Support (Coming Soon)",
    points: [
      "EV diagnostics",
      "Mobile EV assistance",
      "Charging support",
    ],
    highlight: "Launching soon in Hyderabad",
    comingSoon: true,
  },
]

const Services = () => {
  // ✅ First card expanded by default
  const [openCards, setOpenCards] = useState([0])

  // ✅ refs for auto-scroll
  const cardRefs = useRef([])

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
      { threshold: 0.15 }
    )

    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const toggleCard = index => {
    setOpenCards(prev => {
      const isOpening = !prev.includes(index)
      const updated = isOpening
        ? [...prev, index]
        : prev.filter(i => i !== index)

      // ✅ Auto-scroll ONLY when opening
      if (isOpening) {
        setTimeout(() => {
          cardRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          // Optional offset (for sticky header)
          window.scrollBy({
            top: -80,
            behavior: "smooth",
          })
        }, 150) // wait for expand animation
      }

      return updated
    })
  }

  return (
    <section className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Professional doorstep car service anywhere in Hyderabad.</p>
      </header>

      <div className="services-grid">
        {servicesData.map((service, index) => {
          const isOpen = openCards.includes(index)

          return (
            <article
              key={service.title}
              ref={el => (cardRefs.current[index] = el)}
              className={`service-card ${
                isOpen ? "expanded" : ""
              } ${service.comingSoon ? "coming-soon" : ""}`}
            >
              <button
                className="service-header"
                onClick={() => toggleCard(index)}
              >
                <div className="service-icon"><img src={service.image}alt={service.title} /></div>

                <div className="service-heading">
                  <h3>{service.title}</h3>
                  <span className="service-highlight">
                    ✔ {service.highlight}
                  </span>
                </div>

                <span className="toggle-icon">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div className="service-content">
                <ul className="service-list">
                  {service.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919059391800?text=Hello EngineCrew, I want to book ${service.title}.`}
                  className="book-service-btn"
                >
                  Book this service →
                </a>
              </div>
            </article>
          )
        })}
      </div>

      <div className="services-cta">
        <h2>Need Car Service Today?</h2>
        <p>Call or WhatsApp us for instant doorstep service</p>

        <div className="cta-buttons">
          <a href="tel:9059391800" className="cta-btn call">
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919059391800?text=Hello EngineCrew, I want to book a car service."
            className="cta-btn whatsapp"
          >
            💬 WhatsApp Booking
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
