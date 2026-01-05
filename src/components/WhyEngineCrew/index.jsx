import { useEffect } from "react"
import "./index.css"

const points = [
  {
    icon: "👨‍🔧",
    title: "Trained & Experienced Technicians",
    desc: "Certified professionals with hands-on experience across all car brands.",
  },
  {
    icon: "🛠️",
    title: "Genuine & OEM Quality Parts",
    desc: "We use only manufacturer-approved or equivalent quality spare parts.",
  },
  {
    icon: "🏠",
    title: "Doorstep Service Across Hyderabad",
    desc: "Car service at your home or office — no garage visits required.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "Clear estimates with no hidden charges or last-minute surprises.",
  },
  {
    icon: "⚡",
    title: "Fast Response Time",
    desc: "Quick booking and rapid technician dispatch across Hyderabad.",
  },
]

const WhyEngineCrew = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".why-card")
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

    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="why-section">
      <h2 className="why-title">
        Why <span>EngineCrew</span>?
      </h2>

      <p className="why-subtitle">
        Trusted by car owners across Hyderabad for reliable doorstep car service.
      </p>

      <div className="why-grid">
        {points.map(item => (
          <div key={item.title} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyEngineCrew
