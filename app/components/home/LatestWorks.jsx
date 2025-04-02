
'use client';
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/img/latest-work/1.jpg",
    "/img/latest-work/2.jpg",
    "/img/latest-work/3.jpg",
    "/img/latest-work/4.jpg",
    "/img/latest-work/5.jpg",
    "/img/latest-work/6.jpg",
    "/img/latest-work/7.jpg",
    "/img/latest-work/8.jpg",
];

export default function LatestWorks() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDragEnd = (event, info) => {
        const threshold = 50; // Sensitivity of swipe
        if (info.offset.x < -threshold) {
            // Swipe left: Next image (Circular)
            setActiveIndex((prev) => (prev + 1) % images.length);
        } else if (info.offset.x > threshold) {
            // Swipe right: Previous image (Circular)
            setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="latestwork py-10">
            <div className="text-center mb-6">
                <h3 className="text-3xl font-bold">
                    Latest <span className="text-[#C48F56]">Works</span>
                </h3>
                <hr className="w-24 mx-auto border-[#C48F56] mt-2" />
            </div>

            <div className="container relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    drag="x"
                    onDragEnd={handleDragEnd}
                    dragConstraints={{ left: 0, right: 0 }}
                    className="relative flex items-center justify-center w-full"
                >
                    {images.map((src, index) => {
                        // Calculate distance from active index for smooth positioning
                        const offset = (index - activeIndex + images.length) % images.length;
                        const isActive = offset === 0;

                        return (
                            <motion.div
                                key={index}
                                className="absolute"
                                animate={{
                                    x: offset * 220, // Distance between images
                                    scale: isActive ? 1 : 0.8,
                                    opacity: isActive ? 1 : 0.5
                                }}
                                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                                onClick={() => setActiveIndex(index)}
                                style={{ zIndex: isActive ? 10 : 5 }}
                            >
                                <Image
                                    src={src}
                                    alt={`Javed Studio latest work ${index + 1}`}
                                    width={isActive ? 260 : 200}
                                    height={isActive ? 400 : 300}
                                    className="rounded-2xl object-cover"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
