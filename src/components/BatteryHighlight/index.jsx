import { Link } from "react-router-dom";
import "./index.css";

const BatteryHighlight = () => {
  return (
    <section className="battery-highlight">
      <div className="battery-content">
        <span className="battery-badge">⚡ Most Booked Service</span>

        <h2>
          Car Battery Replacement <br />
          <span>at Your Doorstep</span>
        </h2>

        <p>
          Dead battery? Check prices instantly by car brand & model. Get genuine
          batteries with warranty and on-spot installation.
        </p>

        <div className="battery-actions">
          <Link to="/batteries" className="battery-primary-btn">
            View Battery Prices
          </Link>

          <a
            href="tel:9059391800"
            className="battery-secondary-btn"
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "call_click",
              });
            }}
          >
            Call Now
          </a>
        </div>

        <ul className="battery-features">
          <li>✔ 30–60 min doorstep service</li>
          <li>✔ Exide & Amaron batteries</li>
          <li>✔ Warranty & old battery buyback</li>
        </ul>
      </div>
    </section>
  );
};

export default BatteryHighlight;
