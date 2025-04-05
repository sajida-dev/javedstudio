import React from 'react'
import { coupleGallery } from './GalleryData'
import Gallery from '@/app/components/services/Gallery'
import SEO from '@/app/components/common/SEO'

const Couple = () => {
    return (
        <>
            <SEO title={"Couple Photography"} />
            <Gallery
                page={"Couple Photography"}
                paragraph={"Capture your love story with couple photoshoots, perfect for engagements, Nikah, Mayon, Mehndi, Weddings, anniversaries, Birthdays, and special moments."}
                images={coupleGallery} />
        </>
    )
}

export default Couple