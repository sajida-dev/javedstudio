'use client';
import React from "react";
import { CldImage } from "next-cloudinary";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Gallery = ({ page, paragraph, images }) => {
    return (
        <>
            <div className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-amber-500 duration-500 py-10 lg:py-20">
                <h2>{page}</h2>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-2xl lg:mx-auto mx-5 mt-4">
                {paragraph}
            </p>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="sm:columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
                    {images.map((src, index) => (
                        <Zoom key={index}>
                            <CldImage
                                src={src}
                                alt={`Javed studio weddings photography and videography ${index + 1}`}
                                width={700}
                                height={600}
                                className="block mx-auto w-auto h-auto min-w-[270px] min-h-[200px] max-w-full rounded-lg cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </Zoom>
                    ))}

                </div>
            </div>
            {/* styled-jsx global override */}
            <style jsx global>{`
        /* blur + semi‑opaque overlay behind zoom modal */
        .react-medium-image-zoom-overlay {
          background-color: rgba(0, 0, 0, 0.4) !important;
          backdrop-filter: blur(8px)!important;
        }
      `}</style>
        </>
    );
};

export default Gallery;
