'use client'
import React, { useState } from "react";
import Image from "next/image";
const Gallery = ({ page, images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className=" text-center lg:py-20 sm:py-10 md:py-15 font-extrabold lg:text-6xl md:text-5xl sm:text-4xl hover:text-amber-500 duration-500">
                <h2>{page}</h2>
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative">

                <div className="sm:columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            className="w-full break-inside-avoid rounded cursor-pointer transition-transform duration-300"
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
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
                        <img
                            src={selectedImage}
                            alt="Zoomed Image"
                            className="max-w-4xl max-h-[90vh] rounded-lg transition-transform duration-300 scale-100 hover:scale-110"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallery;
