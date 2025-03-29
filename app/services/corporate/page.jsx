import Gallery from '@/app/components/Gallery'
import React from 'react'
import { corporateGallery } from './GalleryData'

const Corporate = () => {
    return (
        <>
            <div>Corporate Photography</div>
            <Gallery images={corporateGallery} />
        </>

    )
}

export default Corporate