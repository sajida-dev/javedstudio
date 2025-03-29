import React from 'react'
import { coupleGallery } from './GalleryData'
import Gallery from '@/app/components/G'

const Couple = () => {
    return (
        <div>Couple Photography
            <Gallery images={coupleGallery} />
        </div>
    )
}

export default Couple