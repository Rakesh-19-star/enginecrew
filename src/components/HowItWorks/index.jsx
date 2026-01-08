import { useEffect, useRef, useState } from "react"
import "./index.css"

const steps = [
  {
    id: "step-1",
    step: "01",
    icon: "📞",
    title: "Book Service",
    desc: "Call or WhatsApp to book instantly",
  },
  {
    id: "step-2",
    step: "02",
    icon: "🚗",
    title: "Technician Arrives",
    desc: "Verified technician reaches your location",
  },
  {
    id: "step-3",
    step: "03",
    icon: "🔧",
    title: "Service Done",
    desc: "Professional service at your doorstep",
  },
  {
    id: "step-4",
    step: "04",
    icon: "✅",
    title: "Pay After Service",
    desc: "No advance payment required",
  },
]

const HowItWorks = () => {
  const itemRefs = useRef([])
  const lineRef = useRef(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    /* Step highlight + haptic */
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            if (navigator.vibrate) navigator.vibrate(15)
          }
        })
      },
      { threshold: 0.5 }
    )

    itemRefs.current.forEach(el => observer.observe(el))

    /* Timeline fill based on scroll */
    const handleScroll = () => {
      if (!lineRef.current) return

      const rect = lineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const progress =
        Math.min(
          Math.max((windowHeight - rect.top) / rect.height, 0),
          1
        ) * 100

      lineRef.current.style.setProperty(
        "--fill-height",
        `${progress}%`
      )

      setShowTop(progress > 85)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="how" id="how-it-works">
      <h2 className="how-title">How It Works</h2>

      <div className="timeline">
        <div className="timeline-line" ref={lineRef}></div>

        {steps.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            id={s.id}
            ref={el => (itemRefs.current[i] = el)}
            className={`timeline-item ${i % 2 ? "right" : "left"}`}
          >
            <div className="timeline-card">
              <span className="step-badge">
                <span className="badge-icon">{s.icon}</span>
                {s.step}
              </span>

              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Back to top */}
      {showTop && (
        <a href="#how-it-works" className="back-to-top">
          ↑ Back to top
        </a>
      )}
    </section>
  )
}

export default HowItWorks
