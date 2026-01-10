import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Header from "./components/Header"
import Home from "./pages/Home"
import Services from "./pages/Services"
import FloatingCallButton from "./components/FloatingCallButton"

const App = () => {
  const location = useLocation()

  return (
    <>
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <Home />
              </motion.div>
            }
          />

          <Route
            path="/services"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <Services />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <FloatingCallButton/>
    
    </>
  )
}

export default App
