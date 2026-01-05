import { Link } from "react-router-dom"
import "./index.css"

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">EngineCrew</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <a href="tel:9059391800" className="call-btn">Call</a>
      </nav>
    </header>
  )
}

export default Header
