import { useState, useEffect } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import "./index.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Engine<span>Crew</span>
        </Link>

        {/* Desktop */}
        <nav className="desktop-nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
           <NavLink to="/batteries" className="nav-link">Batteries</NavLink>
          <NavLink to="/blog/car-repair-hyderabad" className="nav-link">Blog</NavLink>
          <a href="tel:9059391800" className="call-btn">📞 Call</a>
        </nav>

        {/* Mobile */}
        <div className="mobile-actions">
          <a href="tel:9059391800" className="mobile-call">📞</a>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      <div className={`mobile-dropdown ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" className="dropdown-link">Home</NavLink>
        <NavLink to="/services" className="dropdown-link">Services</NavLink>
         <NavLink to="/batteries" className="dropdown-link">Batteries</NavLink>
        <NavLink to="/blog/car-repair-hyderabad" className="dropdown-link">Blog</NavLink>
        
        <a href="tel:9059391800" className="dropdown-call">📞 Call Now</a>
      </div>
    </>
  )
}

export default Header
