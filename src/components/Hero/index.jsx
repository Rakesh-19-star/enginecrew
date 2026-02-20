import "./index.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* ===== VISUAL PART (IMAGE AREA) ===== */}
      <div className="hero-visual">
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-title">
            Mobile Car Service
            <span> at Your Doorstep</span>
            <br />
            Hyderabad
          </h1>

          <p className="hero-text">
            Professional car repairs, maintenance & diagnostics at your home or
            office.
            <strong> No garage visits. No waiting.</strong>
          </p>

          <div className="hero-buttons">
            {/* <a href="tel:9059391800" >
              Call Now
            </a> */}
            <a
              href="tel:9059391800"
              className="btn primary"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "call_click",
                });
              }}
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919059391800?text=Hello EngineCrew, I want to book a car service."
              className="btn whatsapp"
            >
              WhatsApp
            </a>
          </div>

          {/* ===== SERVICE FLOW (ENDS IMAGE HERE) ===== */}
          <div className="service-flow">
            <div className="service-line">
              <span className="dot d1" />
              <span className="dot d2" />
              <span className="dot d3" />
            </div>

            <div className="service-steps">
              <span className="step inspect">Inspect</span>
              <span className="step repair">Repair</span>
              <span className="step deliver">Deliver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
