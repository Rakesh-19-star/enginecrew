import "./index.css"

const Hero = () => {
  return (
    <section className="hero">
      <h1>Mobile Car Service at Your Doorstep – Hyderabad</h1>
      <p>
        Professional car repairs, maintenance & diagnostics at your home or
        office. No garage visits. No waiting.
      </p>

      <div className="hero-buttons">
        <a href="tel:9059391800" className="btn primary">📞 Call Now</a>
        <a
          href="https://wa.me/919059391800?text=Hello EngineCrew, I want to book a car service."
          className="btn whatsapp"
        >
          💬 WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Hero
