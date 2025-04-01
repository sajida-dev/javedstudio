import React from 'react'
import WhyUs from '../components/about/WhyUs'
import AboutUs from '../components/about/AboutUs'
import Aboutt from '../components/about/About'
import SeparatingSection from '../components/about/SeparatingSection'
import TeamSection from '../components/about/Team'
import SEO from '../components/common/SEO'

const About = () => {
  return (
    <>
      <SEO title={"About Us"} />
      <WhyUs />
      <AboutUs />
      <SeparatingSection />
      <TeamSection />
      <Aboutt />
    </>

  )
}

export default About