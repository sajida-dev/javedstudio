'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function HeroSection() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900 text-white">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"
                style={{
                    backgroundPositionX: smoothX,
                    backgroundPositionY: smoothY,
                }}
            />

            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold">Welcome to Javed Studio</h1>
                <p className="mt-4 text-lg text-gray-300">High-quality photography and videography services</p>
                <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-medium">
                    Get Started
                </button>
            </div>
        </div>
    );
}
