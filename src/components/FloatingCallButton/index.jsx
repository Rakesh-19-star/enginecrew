import "./index.css"

const FloatingCallButton = () => {
  return (
    <a
      href="tel:9059391800"
      className="floating-call-btn"
      aria-label="Call EngineCrew"
       onClick={() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "call_click"
    });
  }}
    >
      <span className="ring"></span>
      <span className="ring delay"></span>

      <span className="call-icon">📞</span>
      <span className="call-text">Call Us</span>
    </a>
  )
}



export default FloatingCallButton
