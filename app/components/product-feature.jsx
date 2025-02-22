'use client'
import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Balancer from "react-wrap-balancer";
import FeatureCard from "./feature-card";

export default function ProductFeatures() {
    const cardWidth = 48 * 4;
    const angle = 6;
    const yOffset = 30;

    return (
        <section className="flex w-full flex-col items-center  gap-4 bg-grey-10 py-10">
            <motion.header
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                className="flex max-w-md flex-col items-center gap-2 text-center"
            >
                <h1 className="text-3xl lg:text-5xl mt-20 font-black text-orange-600">NEVER ENDING MEMORIES</h1>
                <Balancer className="block text-lg text-neutral-500">
                    Thanks for stopping by if you're looking for best wedding photographer in Pakistan, Expressions Photography is expert in fine art wedding photography, we photograph weddings all over Pakistan and abroad.
                </Balancer>
            </motion.header>

            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}>
                <button
                    className="box-border inline-block h-11 cursor-pointer whitespace-nowrap rounded-full border-b-4 border-transparent bg-orange-600 px-4 py-3 text-sm font-bold uppercase text-white shadow-2xl transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 disabled:cursor-auto"
                    role="button"
                >
                    Ready to clay &rarr;
                </button>
            </motion.div>

            <div className="relative flex w-full flex-wrap justify-center gap-8 px-4 py-12 sm:flex-row sm:gap-0">


                <FeatureCard
                    feature={{
                        category: "Barat",
                        imageUrl: "assets/03.jpg",
                        title: "Elegant Swirling Glass Vase",
                    }}
                    initial={{ x: cardWidth, y: yOffset, opacity: 0, rotate: 0, scale: 0.9 }}
                    animate={{ x: yOffset, y: 10, opacity: 1, scale: 0.95, rotate: -angle, transition: { type: "spring", delay: 0.8 } }}
                />

                <FeatureCard
                    feature={{
                        category: "Walima",
                        title: "Artisanal Ceramic Jug",
                        imageUrl: "assets/01.jpg",
                    }}
                    initial={{ y: yOffset, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { type: "spring", delay: 0.4 } }}
                    zIndexOffset={1}
                />

                <FeatureCard
                    feature={{
                        category: "Barat",
                        title: "Colorful Gradient Glass Bottle",
                        imageUrl: "assets/02.jpg",
                    }}
                    initial={{ x: -cardWidth, y: yOffset, opacity: 0, rotate: 0, scale: 0.9 }}
                    animate={{ x: -yOffset, y: 10, opacity: 1, rotate: angle, scale: 0.95, transition: { type: "spring", delay: 0.6 } }}
                />

            </div>
        </section>
    );
}
