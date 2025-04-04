import React from 'react'
import WhyUs from '../components/about/WhyUs'
import AboutUs from '../components/about/AboutUs'
import Aboutt from '../components/about/About'
import SeparatingSection from '../components/about/SeparatingSection'
import TeamSection from '../components/about/Team'
import SEO from '../components/common/SEO'
import WhyChooseUs from '../components/about/WhyChooseUs'
import ServicesSection from '../components/services/ServicesSection'
import InfoCards from '../components/InfoCards'

const About = () => {
  return (
    <>
      <SEO title={"About Us"} />
      <WhyChooseUs />
      <SeparatingSection />
      <Aboutt />
      <TeamSection />
      <InfoCards />
      <ServicesSection />
      <AboutUs />
    </>

  )
}

export default About