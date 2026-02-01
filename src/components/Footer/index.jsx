import { Link } from "react-router-dom"
import "./index.css"

const Footer = () => {
  return (
    <footer className="footer">

      {/* BRAND */}
      <div className="footer-brand">
        <h3>EngineCrew</h3>
        <p>Mobile Car Service at Your Doorstep in Hyderabad</p>
        <span>24/7 Emergency • Genuine Parts • Warranty Included</span>
      </div>

      {/* LINKS */}
      <div className="footer-grid">

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services">Car Service at Home</Link>
          <Link to="/services">Car Repair at Home</Link>
          <Link to="/services">Car Inspection</Link>
          <Link to="/services">Breakdown Assistance</Link>
        </div>

        {/* BATTERIES (HIGH INTENT) */}
        <div className="footer-col">
          <h4>Batteries</h4>
          <Link to="/batteries">Car Battery Price</Link>
          <Link to="/batteries">Battery Replacement</Link>
          <Link to="/batteries">Exide Batteries</Link>
          <Link to="/batteries">Amaron Batteries</Link>
        </div>

        {/* LOCATION SEO */}
        <div className="footer-col">
          <h4>Service Areas</h4>
          <span>Car Service Hyderabad</span>
          <span>Car Mechanic Near Me</span>
          <span>Battery Replacement Hyderabad</span>
          <span>Jump Start Service Hyderabad</span>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:9059391800">📞 9059391800</a>
          <a href="https://wa.me/919059391800">💬 WhatsApp</a>
          <span>Hyderabad, Telangana</span>
        </div>
      </div>

      {/* CTA BAR */}
      <div className="footer-cta">
        <p>Need instant help? We’re just one call away.</p>
        <a href="tel:9059391800">Call Now</a>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} EngineCrew. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer
