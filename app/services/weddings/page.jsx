import React from 'react'
import { weddingGallery } from './GalleryData'
import Gallery from '@/app/components/services/Gallery'
import SEO from '@/app/components/common/SEO'

const Weddings = () => {
    return (
        <>
            <SEO title={"Weddings Photography"} />
            <Gallery page={"Weddings Photography"} images={weddingGallery} />
        </>
    )
}

export default Weddings