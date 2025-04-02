import React from 'react'
import { productGallery } from './GalleryData'
import Gallery from '@/app/components/services/Gallery'
import SEO from '@/app/components/common/SEO'

const Product = () => {
  return (
    <>
      <SEO title={"Product Photography"} />
      <Gallery
        page={"Product Photography"}
        paragraph={"Showcase your products with stunning visuals that attract customers and boost your brand's appeal."}
        images={productGallery} />
    </>
  )
}

export default Product