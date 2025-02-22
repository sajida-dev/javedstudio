'use client'
import { useState } from "react";
import Image from "next/image";

const images = [
    { src: "/assets/01.jpg", alt: "Photo 1" },
    { src: "/assets/01.jpg", alt: "Photo 2" },
    { src: "/assets/01.jpg", alt: "Photo 3" },
    { src: "/assets/03.jpg", alt: "Photo 4" },
    { src: "/assets/03.jpg", alt: "Photo 4" },
    { src: "/assets/03.jpg", alt: "Photo 4" },
];

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="p-6">
            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg"
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={200}
                            className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Image Popup (Modal) */}
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4 z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-3xl">
                        <Image
                            src={selectedImage}
                            alt="Selected"
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
