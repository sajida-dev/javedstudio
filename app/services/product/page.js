import React from 'react'
import { productGallery } from './GalleryData'
import Gallery from '@/app/components/G'

const Product = () => {
  return (
    <div>Product Photograph
      <Gallery images={productGallery} />
    </div>
  )
}

export default Product