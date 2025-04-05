'use client'

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function AboutTopHeading() {
    return (
        <div className="relative h-96 w-full min-h-[200px] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <CldImage
                    src="1_pbqgjh"
                    width={1920}
                    height={1080}
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]"
            >
                About Us
            </motion.h2>
        </div>
    );
}
