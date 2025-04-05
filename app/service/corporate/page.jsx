import Gallery from '@/app/components/services/Gallery'
import React from 'react'
import { corporateGallery } from './GalleryData'
import SEO from '@/app/components/common/SEO'

const Corporate = () => {
    return (
        <>
            <SEO title={"Corporate Photography"} />
            <Gallery
                page={"Corporate Photography"}
                paragraph={"Uplift your brand with professional corporate photography that enhances your company's image and marketing materials."}
                images={corporateGallery} />
        </>

    )
}

export default Corporate