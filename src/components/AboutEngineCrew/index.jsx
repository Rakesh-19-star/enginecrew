import { useEffect } from "react"
import "./index.css"

const AboutEngineCrew = () => {
  useEffect(() => {
    const box = document.querySelector(".about-box")
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          box.classList.add("show")
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(box)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section">
      <div className="about-box">
        <h2>
          About <span>EngineCrew</span>
        </h2>

        <p>
          <strong>EngineCrew</strong> is a Hyderabad-based mobile car service
          company built to simplify car maintenance for busy car owners.
        </p>

        <p>
          We eliminate traditional garage hassles by delivering expert car
          repairs, servicing, and diagnostics directly to your doorstep —
          whether at home or office.
        </p>

        <p>
          Our mission is to make car care <strong>transparent</strong>,
          <strong> reliable</strong>, and <strong>convenient</strong> through
          skilled technicians, quality parts, and customer-first service.
        </p>

        <div className="about-highlight">
          🚗 Reliable. Transparent. Doorstep Car Service.
        </div>
      </div>
    </section>
  )
}

export default AboutEngineCrew
