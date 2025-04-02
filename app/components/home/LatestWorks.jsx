'use client'
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
    const [activeIndex, setActiveIndex] = useState(2); // by default 3rd image is enlarge

    // Predefined left offsets (in percentages) that mimic your CSS behavior
    const leftOffsets = [60, 40, 20, 0, -20, -40, -60, -60];
    const containerLeft = leftOffsets[activeIndex] || 0;

    const handleDragEnd = (event, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            // swipe left: next slide
            setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        } else if (info.offset.x > threshold) {
            // swipe right: previous slide
            setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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

            <div className="container relative w-full h-[90vh] flex items-center overflow-hidden">
                <motion.div
                    drag="x"
                    onDragEnd={handleDragEnd}
                    dragConstraints={{ left: 0, right: 0 }}
                    className="imgContainer absolute flex items-center justify-center transition-all duration-1000"
                    style={{ left: `${containerLeft}%`, height: "600px", width: "100%" }}
                >
                    {images.map((src, index) => (
                        <div key={index} className="slide_div flex items-center justify-center mx-2">
                            <motion.div
                                layout
                                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                                className="relative overflow-hidden rounded-2xl cursor-pointer"
                                style={{
                                    width: activeIndex === index ? 260 : 170,
                                    height: activeIndex === index ? 400 : 260,
                                }}
                                onClick={() => setActiveIndex(index)}
                            >
                                <Image
                                    src={src}
                                    alt={`javed studio latest work ${index + 1}`}
                                    width={activeIndex === index ? 260 : 170}
                                    height={activeIndex === index ? 400 : 260}
                                    className="rounded-2xl"
                                />
                            </motion.div>

                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}