import React from 'react'
import { weddingGallery } from './GalleryData'
import Gallery from '@/app/components/services/Gallery'
import SEO from '@/app/components/common/SEO'

const Weddings = () => {
    return (
        <>
            <SEO title={"Weddings Photography"} />
            <Gallery
                page={"Weddings Photography"}
                paragraph={"From pre-wedding shoots to your big day, we capture every precious moment with elegance and artistic vision."}
                images={weddingGallery} />
        </>
    )
}

export default Weddings