import React from 'react'
import { coupleGallery } from './GalleryData'
import Gallery from '@/app/components/services/Gallery'
import SEO from '@/app/components/common/SEO'

const Couple = () => {
    return (
        <>
            <SEO title={"Couple Photography"} />
            <Gallery page={"Couple Photography"} images={coupleGallery} />
        </>
    )
}

export default Couple