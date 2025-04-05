import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";  // Diamond icon
import Light from '../icons/Light';
import Check from '../icons/Check';
import Lock from '../icons/Lock';

const features = [
    { icon: faGem, title: "Premium Quality", desc: "Cinematic-grade videography and high-resolution photography for unforgettable memories." },
    { icon: Light, title: "Fast Delivery", desc: "Get your edited photos & videos delivered promptly without compromising quality." },
    { icon: Check, title: "Affordable Pricing", desc: "Flexible packages for every occasion, making premium photography accessible to all." },
    { icon: Lock, title: "Secure & Private", desc: "Your videos and photos are safely stored, ensuring 100% privacy and security." }
];

const Features = () => {
    return (
        <section className="lg:py-30 py-16 bg-gray-50">
            {/* SEO Optimized Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 hover:text-amber-500 transition duration-500">
                    Our Features
                </h2>
                <p className="text-lg text-gray-600 mt-4 lg:mx-auto mx-7">
                    Elevate your moments with our professional photography and videography expertise.
                </p>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-6 lg:px-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group text-center flex flex-col items-center hover:scale-105 transition-all duration-300"
                    >
                        {/* Icon */}
                        <div className="rounded-full border-8 border-amber-500 p-4 transition duration-500 group-hover:border-gray-50">


                            {feature.icon === faGem ? (
                                <FontAwesomeIcon
                                    icon={feature.icon}
                                    className="text-5xl p-1 text-gray-900 group-hover:text-amber-500 duration-300"
                                />
                            ) : (
                                <feature.icon className="group-hover:text-amber-500" />
                            )}
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mt-4 ">
                            {feature.title}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-600 mt-2 group-hover:text-gray-800">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
