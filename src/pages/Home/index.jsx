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


const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSlider />
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
