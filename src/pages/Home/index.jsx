import Hero from "../../components/Hero"
import ServicesSlider from "../../components/ServicesSlider"
import HowItWorks from "../../components/HowItWorks"
import CTA from "../../components/CTA"
import WhyEngineCrew from "../../components/WhyEngineCrew"
import AboutEngineCrew from "../../components/AboutEngineCrew"
 import "./index.css"
import Footer from "../../components/Footer"
import FAQ from "../../components/FAQ"
import Testimonials from "../../components/Testimonials"
import Batteries from "../Batteries"
import BatteryHighlight from "../../components/BatteryHighlight"


const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSlider />
      <BatteryHighlight/>
      <WhyEngineCrew/>
      <Testimonials/>
      <HowItWorks />
      <AboutEngineCrew/>
     
      <FAQ/>
      <CTA />
      <Footer/>
      
       
    </>
  )
}

export default Home
