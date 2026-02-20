import "./index.css"

const BatteryLoading = () => {
  return (
    <div className="battery-loading-overlay">
      <div className="battery-loading-container">
        {/* Animated Battery Icon */}
        <div className="battery-charging-icon">
          <div className="battery-body">
            <div className="battery-level"></div>
            <div className="battery-tip"></div>
          </div>
          <div className="charging-bolt">⚡</div>
        </div>

        {/* Loading Text */}
        <div className="loading-text-group">
          <h3 className="loading-title">Finding Your Battery</h3>
          <p className="loading-subtitle">Searching 869+ batteries...</p>
        </div>

        {/* Animated Dots */}
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}

export default BatteryLoading
