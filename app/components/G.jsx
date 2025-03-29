'use client'
import React, { useState } from "react";

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {images.map((src, index) => (
                    <img
                        key={index}
                        className="w-full h-auto object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-110"
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
    );
};

export default Gallery;
