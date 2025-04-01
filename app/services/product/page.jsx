import React from 'react'
import { productGallery } from './GalleryData'
import Gallery from '@/app/components/services/Gallery'
import SEO from '@/app/components/common/SEO'

const Product = () => {
  return (
    <>
      <SEO title={"Product Photography"} />
      <Gallery page={"Product Photography"} images={productGallery} />
    </>
  )
}

export default Product