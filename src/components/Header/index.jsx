import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import "./index.css"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setScrolled(scrollY > 60)

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      setProgress((scrollY / scrollHeight) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <header className={`header ${scrolled ? "shrink" : ""}`}>
        {/* Logo */}
        <Link to="/" className="logo">
          Engine<span>Crew</span>
        </Link>

        {/* Nav */}
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
          <a href="tel:9059391800" className="call-btn">
            📞 Call
          </a>
        </nav>
      </header>
    </>
  )
}

export default Header
