import { Link } from "react-router-dom";
import "./index.css";

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
          <Link to="/services">Car detailing </Link>
          <Link to="/services">Car denting and painting </Link>
          <Link to="/services">Car Ac Service & Repair in Hyderabad</Link>
          <Link to="/services">Car Battery Service in Hyderabad</Link>
          <Link to="/services">Car Brake Service In Hyderabad</Link>
          <Link to="/services">Car Suspension Service In Hyderabad</Link>
          <Link to="/services">Car Detailing Services in Hyderabad</Link>
          <Link to="/services">Car Windshield Replacement in Hyderabad</Link>
          <Link to="/services">Car Tyre & Wheel Alignment in Hyderabad</Link>
          <Link to="/services">Car Head Light Repair in Hyderabad</Link>
          <Link to="/services">Car Insurance Claim Services in Hyderabad</Link>
          <Link to="/services">
            Car Free Pick up & Drop Services in Hyderabad
          </Link>
          <Link to="/services">Free Car Inspection in Hyderabad</Link>
          <Link to="/services">Car Towing Services in Hyderabad</Link>
          <Link to="/services"></Link>
          <Link to="/services"></Link>
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
          <span>Car Denting & Painting in Kukatpally</span>
          <span>Car Mechanic Near Me , Hyderabad</span>
          <span>car Mechanic in malkajgiri </span>
          <span>car service in sainikpuri </span>
          <span>car mechanic in secunderbad</span>
          <span>Car Wash In Kukatpally, Nearby Areas</span>
          <span>Car Ac Services in Hyderabad</span>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <a
            href="tel:9059391800"
            // className="dropdown-call"
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "call_click",
              });
            }}
          >
            📞 Call Now
          </a>

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
  );
};

export default Footer;
