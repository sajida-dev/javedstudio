'use client'
import { useState } from "react";

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
    ];

    return (
        <div className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-4 p-4">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="w-full h-40 object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-110"
                        onClick={() => setSelectedImage(src)}
                    />
                ))}
            </div>

            {/* Fullscreen Zoomed Image on Hover */}
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50"
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
}
