import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import WhyChooseUs from '../Components/WhyChooseUs'
import OurLegecy from '../Components/OurLegecy'
import Certifications from '../Components/Cretifications'
import Promise from '../Components/Promise'
import OurCampagn from '../Components/OurCampagn'
import Footer from '../Components/Footer'

const LandingPg = () => {

  
  return (
    <div>
      <NavBar />
      <Hero/>
      <About/>
      <WhyChooseUs/>
      <OurLegecy/>
      <Certifications/>
      <Promise/>
      <OurCampagn/>
      <Footer/>
    </div>
  )
}

export default LandingPg
