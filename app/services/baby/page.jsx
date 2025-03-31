import React from 'react'
import { babyGallery } from './GalleryData'
import Gallery from '@/app/components/Gallery'

const Baby = () => {
  return (
    <>
      <Gallery page={"Baby Photography"} images={babyGallery} />
    </>
  )
}

export default Baby