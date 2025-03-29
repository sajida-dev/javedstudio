import React from 'react'
import { productGallery } from './GalleryData'
import Gallery from '@/app/components/Gallery'

const Product = () => {
  return (
    <div>Product Photograph
      <Gallery images={productGallery} />
    </div>
  )
}

export default Product