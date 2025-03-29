import Gallery from '@/app/components/Gallery'
import React from 'react'
import { corporateGallery } from './GalleryData'

const Corporate = () => {
    return (
        <>
            <Gallery page={"Corporate Photography"} images={corporateGallery} />
        </>

    )
}

export default Corporate