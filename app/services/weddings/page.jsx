import React from 'react'
import { weddingGallery } from './GalleryData'
import Gallery from '@/app/components/Gallery'

const Weddings = () => {
    return (
        <>
            <Gallery page={"Weddings Photography"} images={weddingGallery} />
        </>
    )
}

export default Weddings