import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import FloatingCallButton from "./components/FloatingCallButton"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
        {/* Global Call Button */}
      <FloatingCallButton />
      <Footer />
    </>
  )
}

export default App
