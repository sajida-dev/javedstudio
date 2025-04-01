import React from 'react'
import { babyGallery } from './GalleryData'
import Gallery from '@/app/components/services/Gallery'
import SEO from '@/app/components/common/SEO'

const Baby = () => {
  return (
    <>
      <SEO title={"Baby Photography"} />
      <Gallery page={"Baby Photography"} images={babyGallery} />
    </>
  )
}

export default Baby