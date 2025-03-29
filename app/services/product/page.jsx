import React from 'react'
import { productGallery } from './GalleryData'
import Gallery from '@/app/components/Gallery'

const Product = () => {
  return (
    <>
      <Gallery page={"Product Photography"} images={productGallery} />
    </>
  )
}

export default Product