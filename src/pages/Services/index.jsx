import { useEffect } from "react"
import "./index.css"

const servicesData = [
  {
    icon: "🔧",
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
    icon: "🧠",
    title: "Engine Diagnostics",
    points: [
      "Check engine light scan",
      "ECU fault code reading",
      "Performance issue diagnosis",
    ],
    highlight: "Accurate diagnosis at your location",
  },
  {
    icon: "🔋",
    title: "Battery Replacement",
    points: [
      "Battery health check",
      "New battery supply & installation",
      "Old battery buyback support",
    ],
    highlight: "On-spot replacement",
  },
  {
    icon: "🛑",
    title: "Brake Inspection & Repair",
    points: [
      "Brake pad replacement",
      "Disc & brake system inspection",
      "Noise & vibration issues",
    ],
    highlight: "Safety-first service",
  },
  {
    icon: "🚨",
    title: "Breakdown Assistance",
    points: [
      "Jump start",
      "Minor roadside repairs",
      "Emergency support",
    ],
    highlight: "Fast response in Hyderabad",
  },
  {
    icon: "⚡",
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

  return (
    <section className="services-page">
      {/* Header */}
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Professional doorstep car service anywhere in Hyderabad.</p>
      </header>

      {/* Cards */}
      <div className="services-grid">
        {servicesData.map(service => (
          <article
            key={service.title}
            className={`service-card ${
              service.comingSoon ? "coming-soon" : ""
            }`}
          >
            <div className="service-icon">{service.icon}</div>

            <h3 className="service-title">{service.title}</h3>

            <ul className="service-list">
              {service.points.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="service-highlight">
              ✔ {service.highlight}
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="services-cta">
        <h2>Book your service now</h2>
        <p>Call or WhatsApp us for instant booking</p>

        <div className="cta-buttons">
          <a href="tel:9059391800" className="cta-btn call">
            📞 Call 9059391800
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
