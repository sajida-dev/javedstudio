'use client'
import React, { useState } from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
const Gallery = ({ page, paragraph, images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>

            <div className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-amber-500 duration-500 py-10 lg:py-20">
                <h2>{page}</h2>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-2xl lg:mx-auto mx-5 mt-4">
                {paragraph}
            </p>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative">

                <div className="sm:columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
                    {images.map((src, index) => (
                        <CldImage
                            key={index}
                            className="w-full max-w-[400px] break-inside-avoid rounded cursor-pointer transition-transform duration-300"
                            src={src}
                            width={400}
                            height={600}
                            alt={`Javed studio weddings photography and videography  ${index + 1}`}
                            onClick={() => setSelectedImage(src)}
                        />
                    ))}
                </div>

                {/* Zoomed Image on Click */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-gray/70 backdrop-blur-md z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <CldImage
                            src={selectedImage}
                            alt="Zoomed Image"
                            height={600}
                            width={896}
                            className="max-w-4xl h-full max-h-[90vh] rounded-lg transition-transform duration-300 scale-100 hover:scale-110"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallery;
