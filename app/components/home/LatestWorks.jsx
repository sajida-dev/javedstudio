

'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CldImage } from 'next-cloudinary';

const images = [
    "14_iznicr",
    "19_rgjbzg",
    "13_ajhgxz",
    "16_dhvrll",
    "11_fc141n",
    "15_emxie9",
    "12_exmgiv",
    "8_fbnkl1",
    "10_am1l89",
    "5_jwnhdr",
    "1_o3jn6i",
];

export default function LatestWorks() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageSize, setImageSize] = useState({ active: { width: 400, height: 500 }, inactive: { width: 330, height: 450 }, distance: 270 });
    // Function to update sizes based on screen width
    useEffect(() => {
        const updateSizes = () => {
            if (window.innerWidth < 768) {
                setImageSize({ active: { width: 250, height: 320 }, inactive: { width: 200, height: 280 }, distance: 180 });
            } else {
                setImageSize({ active: { width: 370, height: 500 }, inactive: { width: 330, height: 450 }, distance: 270 });
            }
        };

        updateSizes(); // Set initial size
        window.addEventListener("resize", updateSizes);
        return () => window.removeEventListener("resize", updateSizes);
    }, []);


    const handleDragEnd = (event, info) => {
        const threshold = 50; // Sensitivity of swipe
        if (info.offset.x < -threshold) {
            setActiveIndex((prev) => (prev + 1) % images.length);
        } else if (info.offset.x > threshold) {
            setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="latestwork py-10 ">
            <div className="text-center mb-6">
                <h3 className="text-3xl font-bold">
                    Latest <span className="text-amber-400">Works</span>
                </h3>
                <hr className="w-24 mx-auto border-amber-400 mt-2" />
            </div>

            <div className="container relative w-full  h-[100vh] flex items-center justify-center overflow-x-hidden">
                <motion.div
                    drag="x"
                    onDragEnd={handleDragEnd}
                    dragConstraints={{ left: 0, right: 0 }}
                    className="relative flex items-center justify-center w-full"
                >
                    {images.map((src, index) => {
                        let offset = (index - activeIndex + images.length) % images.length;
                        if (offset > images.length / 2) offset -= images.length; // Fix positioning for left-side images

                        const isActive = offset === 0;

                        return (
                            <motion.div
                                key={index}
                                className="absolute"
                                animate={{
                                    x: offset * imageSize.distance, // Adjust distance dynamically
                                    scale: isActive ? 1 : 0.8,
                                    opacity: isActive ? 1 : 0.5
                                }}
                                transition={{ type: "spring", stiffness: 250, damping: 30 }}
                                onClick={() => setActiveIndex(index)}
                                style={{ zIndex: isActive ? 10 : 5 }}
                            >
                                <CldImage
                                    src={src}
                                    alt={`Javed Studio latest work ${index + 1}`}
                                    width={isActive ? imageSize.active.width : imageSize.inactive.width}
                                    height={isActive ? imageSize.active.height : imageSize.inactive.height}
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
