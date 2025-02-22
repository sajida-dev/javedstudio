import React from 'react'
import Hero from './components/hero'
import WeddingPhotographyHero from './components/wedding-hero'
import SplitText from './components/split-text'
import ImageGallery from './components/image-gallery'

const Home = () => {
  return (
    <>
      <Hero />
      <SplitText text="PRODUCT PHOTOGRAPHY" />

      <ImageGallery />
    </>
  )
}

export default Home