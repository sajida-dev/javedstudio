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
import TabCard from '../components/services/Tabs'

const About = () => {
  return (
    <>
      <SEO title={"About Us"} />
      {/* <WhyUs /> */}
      <TabCard />
      <WhyChooseUs />
      <AboutUs />
      <SeparatingSection />
      <TeamSection />
      <Aboutt />
      <InfoCards />
      <ServicesSection />
    </>

  )
}

export default About