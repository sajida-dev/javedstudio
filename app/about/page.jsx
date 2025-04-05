import React from 'react'
import Memories from '../components/about/Memories'
import CEO from '../components/about/CEO'
import SeparatingSection from '../components/about/SeparatingSection'
import TeamSection from '../components/about/Team'
import SEO from '../components/common/SEO'
import WhyChooseUs from '../components/about/WhyChooseUs'
import ServicesSection from '../components/about/ServicesSection'
import InfoCards from '../components/about/InfoCards'

const About = () => {
  return (
    <>
      <SEO title={"About Us"} />
      <WhyChooseUs />
      <SeparatingSection />
      <CEO />
      <TeamSection />
      <InfoCards />
      <ServicesSection />
      <Memories />
    </>

  )
}

export default About