import React from 'react'
import { weddingGallery } from './GalleryData'
import Gallery from '@/app/components/Gallery'

const Weddings = () => {
    return (
        <div>Weddings Photography
            <Gallery images={weddingGallery} />
        </div>
    )
}

export default Weddings