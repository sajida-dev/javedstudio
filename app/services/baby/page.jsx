import React from 'react'
import { babyGallery } from './GalleryData'
import Gallery from '@/app/components/services/Gallery'
import SEO from '@/app/components/common/SEO'

const Baby = () => {
  return (
    <>
      <SEO title={"Baby Photography"} />
      <Gallery
        page={"Baby Photography"}
        paragraph={"Cherish the innocence and cuteness of your little one with our professional baby photography sessions, creating memories that last forever."}
        images={babyGallery} />
    </>
  )
}

export default Baby