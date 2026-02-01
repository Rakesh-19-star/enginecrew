import { useState, useEffect } from "react"
import "./index.css"
import { batteryCatalog } from "./data"
import amaronBattery from "/amaronBattery.png"
import exideBattery from "/exideBattery.jpg"

const Batteries = () => {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedFuel, setSelectedFuel] = useState("")

  useEffect(() => {
    setSelectedModel("")
    setSelectedFuel("")
  }, [selectedBrand])

  useEffect(() => {
    setSelectedFuel("")
  }, [selectedModel])

  const brands = batteryCatalog ? Object.keys(batteryCatalog) : []

  const models =
    selectedBrand && batteryCatalog?.[selectedBrand]
      ? Object.keys(batteryCatalog[selectedBrand])
      : []

  const fuels =
    selectedBrand && selectedModel && batteryCatalog?.[selectedBrand]?.[selectedModel]
      ? Object.keys(batteryCatalog[selectedBrand][selectedModel])
      : []

  const batteries =
    selectedBrand &&
    selectedModel &&
    selectedFuel &&
    batteryCatalog?.[selectedBrand]?.[selectedModel]?.[selectedFuel]
      ? batteryCatalog[selectedBrand][selectedModel][selectedFuel]
      : []

  return (
    <section className="batteries-page">
      
      {/* ========== HERO SECTION ========== */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">⚡ #1 Battery Service in Hyderabad</div>
          <h1>Car Battery Replacement at Your Doorstep</h1>
          <p className="hero-subtitle">
            Get genuine Exide & Amaron batteries delivered and installed at your location. 
            <strong> Free installation • 24/7 Service • Up to 77-Month Warranty</strong>
          </p>
          
          <div className="hero-features">
            <div className="feature-pill">
              <span className="feature-icon">✓</span>
              <span>869+ Batteries Available</span>
            </div>
            <div className="feature-pill">
              <span className="feature-icon">✓</span>
              <span>Fastest Delivery (30-60min)</span>
            </div>
            <div className="feature-pill">
              <span className="feature-icon">✓</span>
              <span>Expert Installation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST INDICATORS ========== */}
      <section className="trust-section">
        <div className="trust-stats">
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Batteries Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Emergency Service</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Genuine Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4.8★</div>
            <div className="stat-label">Customer Rating</div>
          </div>
        </div>
      </section>

      {/* ========== BATTERY FINDER ========== */}
      <header className="batteries-header">
        <h2>Find Your Perfect Battery</h2>
        <p>Select your car details to view compatible batteries with instant pricing</p>
      </header>

      <div className="filters">
        <div className="filter">
          <label>Car Brand</label>
          <select
            value={selectedBrand}
            onChange={e => setSelectedBrand(e.target.value)}
          >
            <option value="">Select Brand</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label>Car Model</label>
          <select
            value={selectedModel}
            disabled={!selectedBrand}
            onChange={e => setSelectedModel(e.target.value)}
          >
            <option value="">Select Model</option>
            {models.map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label>Fuel Type</label>
          <select
            value={selectedFuel}
            disabled={!selectedModel}
            onChange={e => setSelectedFuel(e.target.value)}
          >
            <option value="">Select Fuel</option>
            {fuels.map(fuel => (
              <option key={fuel} value={fuel}>
                {fuel}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ========== EMPTY STATE ========== */}
{!selectedFuel && (
  <div className="empty-state">
    <div className="empty-batteries-container">
      <div className="empty-battery-img">
        <img src={exideBattery} alt="Exide Battery" />
      </div>
      <div className="empty-battery-img">
        <img src={amaronBattery} alt="Amaron Battery" />
      </div>
    </div>
    <h3>Select Your Car Details</h3>
    <p>Please select your car brand, model and fuel type to view available batteries</p>
  </div>
)}

      {/* ========== BATTERY RESULTS ========== */}
{selectedFuel && (
  <>
    <div className="results-header">
      <h3>Available Batteries for {selectedBrand} {selectedModel} ({selectedFuel})</h3>
      <p>{batteries.length} {batteries.length === 1 ? 'option' : 'options'} found</p>
    </div>

    <div className="battery-grid">
      {batteries.map((battery, index) => {
        const sellingPrice = battery.offerPrice
        const savings = battery.companyPrice - sellingPrice
        const discountPercentage = Math.round((savings / battery.companyPrice) * 100)
        
        const batteryImage = battery.brand.toLowerCase().includes('exide') 
          ? exideBattery 
          : amaronBattery
        
        return (
          <div key={index} className="battery-card">
            {/* Warranty Badge */}
            <div className="warranty-badge">
              <div className="warranty-number">{battery.warranty.split(' ')[0]}</div>
              <div className="warranty-label">MONTH WARRANTY</div>
            </div>

            {/* Discount Badge */}
            {discountPercentage > 0 && (
              <div className="discount-badge">{discountPercentage}% OFF</div>
            )}

            {/* Battery Image */}
            <div className="battery-image-container">
              <img 
                src={batteryImage} 
                alt={`${battery.brand} Battery`}
                className="battery-image"
              />
            </div>

            {/* Battery Info */}
            <div className="battery-info">
              <h3 className="battery-brand">{battery.brand}</h3>
              
              {/* Model Number - NEW */}
              <p className="battery-model-number">{battery.model}</p>
              
              <p className="battery-model">{battery.brandModel}</p>

              <div className="battery-specs">
                <div className="spec-item">
                  <span className="spec-label">Warranty:</span>
                  <span className="spec-value">{battery.warranty}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Capacity:</span>
                  <span className="spec-value">{battery.capacity}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Fuel Type:</span>
                  <span className="spec-value">{selectedFuel}</span>
                </div>
              </div>

              <div className="features-tags">
                <span className="feature-tag">✓ Free Installation</span>
                <span className="feature-tag">✓ Genuine Product</span>
              </div>

              {/* Price Section */}
              <div className="price-box">
                <div className="price-row">
                  <span className="mrp-label">MRP:</span>
                  <span className="mrp-price">₹{battery.companyPrice.toLocaleString()}</span>
                </div>
                <div className="final-price">₹{sellingPrice.toLocaleString()}</div>
                <div className="you-save">You Save ₹{savings.toLocaleString()}</div>
              </div>

              {/* Order Button */}
              <a 
                href={`https://wa.me/919059391800?text=Hi! I need ${battery.brand} ${battery.model} (${battery.brandModel}) battery for ${selectedBrand} ${selectedModel} (${selectedFuel}). Price: ₹${sellingPrice.toLocaleString()}`}
                className="order-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                ORDER NOW
              </a>
            </div>
          </div>
        )
      })}
    </div>
  </>
)}


      {/* ========== TOP SELLING BATTERIES - ONLY SHOW WHEN NO RESULTS ========== */}
      {!selectedFuel && (
        <section className="top-selling-section">
          <div className="section-header">
            <h2>🔥 Top Selling Batteries</h2>
            <p className="section-subtitle">Most popular choices by our customers in Hyderabad</p>
          </div>

          <div className="top-selling-grid">
            {/* Card 1 - Maruti Swift - Exide */}
            <div className="top-card">
              <div className="top-badge best">⭐ Best Seller</div>
              <div className="top-image">
                <img src={exideBattery} alt="Exide Battery" />
              </div>
              <div className="top-info">
                <h4>Maruti Swift / Dzire</h4>
                <p className="car-type">Petrol • All Variants</p>
                <div className="top-price-options">
                  <div className="top-option">
                    <span className="top-brand">Exide ML38B20L</span>
                    <span className="top-price">₹3,850</span>
                  </div>
                  <div className="top-option">
                    <span className="top-brand">Amaron 38B20L</span>
                    <span className="top-price">₹3,450</span>
                  </div>
                </div>
                <div className="top-features">
                  <span>✓ 60 Months Warranty</span>
                  <span>✓ Free Installation</span>
                </div>
                <a href="tel:9059391800" className="top-order-btn">📞 QUICK ORDER</a>
              </div>
            </div>

            {/* Card 2 - Hyundai - Amaron */}
            <div className="top-card">
              <div className="top-badge hot">🔥 Hot Deal</div>
              <div className="top-image">
                <img src={amaronBattery} alt="Amaron Battery" />
              </div>
              <div className="top-info">
                <h4>Hyundai i20 / Creta</h4>
                <p className="car-type">Petrol • 1.2L to 1.5L</p>
                <div className="top-price-options">
                  <div className="top-option">
                    <span className="top-brand">Exide ML40LBH</span>
                    <span className="top-price">₹5,600</span>
                  </div>
                  <div className="top-option">
                    <span className="top-brand">Amaron BH40LBH</span>
                    <span className="top-price">₹4,150</span>
                  </div>
                </div>
                <div className="top-features">
                  <span>✓ 60 Months Warranty</span>
                  <span>✓ Free Installation</span>
                </div>
                <a href="tel:9059391800" className="top-order-btn">📞 QUICK ORDER</a>
              </div>
            </div>

            {/* Card 3 - Honda - Exide */}
            <div className="top-card">
              <div className="top-badge trending">📈 Trending</div>
              <div className="top-image">
                <img src={exideBattery} alt="Exide Battery" />
              </div>
              <div className="top-info">
                <h4>Honda City / Amaze</h4>
                <p className="car-type">Petrol • All Models</p>
                <div className="top-price-options">
                  <div className="top-option">
                    <span className="top-brand">Exide ML38B20L</span>
                    <span className="top-price">₹3,850</span>
                  </div>
                  <div className="top-option">
                    <span className="top-brand">Amaron 38B20L</span>
                    <span className="top-price">₹3,450</span>
                  </div>
                </div>
                <div className="top-features">
                  <span>✓ 60 Months Warranty</span>
                  <span>✓ Free Installation</span>
                </div>
                <a href="tel:9059391800" className="top-order-btn">📞 QUICK ORDER</a>
              </div>
            </div>

            {/* Card 4 - Toyota - Amaron */}
            <div className="top-card">
              <div className="top-badge premium">💎 Premium</div>
              <div className="top-image">
                <img src={amaronBattery} alt="Amaron Battery" />
              </div>
              <div className="top-info">
                <h4>Toyota Innova Crysta</h4>
                <p className="car-type">Diesel • All Variants</p>
                <div className="top-price-options">
                  <div className="top-option">
                    <span className="top-brand">Exide ML75D23L</span>
                    <span className="top-price">₹6,600</span>
                  </div>
                  <div className="top-option">
                    <span className="top-brand">Amaron BH90D23L</span>
                    <span className="top-price">₹6,000</span>
                  </div>
                </div>
                <div className="top-features">
                  <span>✓ 60 Months Warranty</span>
                  <span>✓ Free Installation</span>
                </div>
                <a href="tel:9059391800" className="top-order-btn">📞 QUICK ORDER</a>
              </div>
            </div>

            {/* Card 5 - Verna - Exide */}
            <div className="top-card">
              <div className="top-badge popular">⚡ Popular</div>
              <div className="top-image">
                <img src={exideBattery} alt="Exide Battery" />
              </div>
              <div className="top-info">
                <h4>Hyundai Verna / Creta</h4>
                <p className="car-type">Diesel • 1.4L to 1.6L</p>
                <div className="top-price-options">
                  <div className="top-option">
                    <span className="top-brand">Exide DIN60</span>
                    <span className="top-price">₹6,900</span>
                  </div>
                  <div className="top-option">
                    <span className="top-brand">Amaron DIN60</span>
                    <span className="top-price">₹6,490</span>
                  </div>
                </div>
                <div className="top-features">
                  <span>✓ 60 Months Warranty</span>
                  <span>✓ Free Installation</span>
                </div>
                <a href="tel:9059391800" className="top-order-btn">📞 QUICK ORDER</a>
              </div>
            </div>

            {/* Card 6 - Brezza - Amaron */}
            <div className="top-card">
              <div className="top-badge pick">🎯 Top Pick</div>
              <div className="top-image">
                <img src={amaronBattery} alt="Amaron Battery" />
              </div>
              <div className="top-info">
                <h4>Maruti Vitara Brezza</h4>
                <p className="car-type">Diesel • All Variants</p>
                <div className="top-price-options">
                  <div className="top-option">
                    <span className="top-brand">Exide DIN50</span>
                    <span className="top-price">₹6,000</span>
                  </div>
                  <div className="top-option">
                    <span className="top-brand">Amaron DIN50</span>
                    <span className="top-price">₹5,700</span>
                  </div>
                </div>
                <div className="top-features">
                  <span>✓ 60 Months Warranty</span>
                  <span>✓ Free Installation</span>
                </div>
                <a href="tel:9059391800" className="top-order-btn">📞 QUICK ORDER</a>
              </div>
            </div>
          </div>

          <div className="view-all-banner">
            <p>Can't find your car? Use our smart battery finder above ☝️</p>
          </div>
        </section>
      )}

      {/* ========== CONTACT INFO ========== */}
      <section className="contact-section">
        <div className="contact-card">
          <h3>📍 Service Areas</h3>
          <p>We serve all areas in Hyderabad including Uppal, Secundrabad, Malkajgiri, Ameerpet, Madhapur, Gachibowli, Hitech City, Banjara Hills, Kukatpally, and more</p>
        </div>
        
        <div className="contact-card">
          <h3>📞 24/7 Support</h3>
          <p>Emergency battery service available round the clock</p>
          <a href="tel:9059391800" className="contact-number">Call: 9059391800</a>
        </div>
      </section>
    </section>
  )
}

export default Batteries
