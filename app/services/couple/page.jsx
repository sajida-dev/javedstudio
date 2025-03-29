import React from 'react'
import { coupleGallery } from './GalleryData'
import Gallery from '@/app/components/Gallery'

const Couple = () => {
    return (
        <>
            <Gallery page={"Couple Photography"} images={coupleGallery} />
        </>
    )
}

export default Couple