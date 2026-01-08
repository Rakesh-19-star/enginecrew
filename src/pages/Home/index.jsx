import Hero from "../../components/Hero"
import ServicesSlider from "../../components/ServicesSlider"
import HowItWorks from "../../components/HowItWorks"
import CTA from "../../components/CTA"
import WhyEngineCrew from "../../components/WhyEngineCrew"
import AboutEngineCrew from "../../components/AboutEngineCrew"
 import "./index.css"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSlider />
      <WhyEngineCrew/>
      <HowItWorks />
      <AboutEngineCrew/>
      <CTA />
      <Footer/>
       
    </>
  )
}

export default Home
