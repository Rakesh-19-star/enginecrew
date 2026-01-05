import "./index.css"

const steps = [
  { step: "01", title: "Book Service", desc: "Call or WhatsApp" },
  { step: "02", title: "Technician Arrives", desc: "At your location" },
  { step: "03", title: "Service Done", desc: "At your doorstep" },
  { step: "04", title: "Pay After Service", desc: "No advance payment" },
]

const HowItWorks = () => {
  return (
    <section className="how">
      <h2>How It Works</h2>

      <div className="timeline">
        {steps.map((s, i) => (
          <div key={s.step} className={`item ${i % 2 ? "right" : "left"}`}>
            <div className="card">
              <span>{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
