import React from 'react';
import PremiumIcon from '../icons/PremiumIcon';

const Features = () => {
    return (
        <section className="lg:py-30 py-16 bg-gray-50">
            {/* SEO Optimized Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 hover:text-amber-500 transition duration-500">
                    Our Featueres
                </h2>
                <p className="text-lg text-gray-600 mt-4 lg:mx-auto mx-7">
                    Elevate your moments with our professional photography and videography expertise.
                </p>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-6 lg:px-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {/* Feature 1: Premium Quality */}
                <div className="text-center flex flex-col items-center">
                    <div className="rounded-full border-8 border-amber-500 p-4  hover:border-white transition duration-500">
                        <PremiumIcon />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-4">Premium Quality</h3>
                    <p className="text-gray-600 mt-2">
                        Cinematic-grade videography and high-resolution photography for unforgettable memories.
                    </p>
                </div>

                {/* Feature 2: Fast Delivery */}
                <div className="text-center flex flex-col items-center">
                    <div className="rounded-full border-8 border-amber-500 p-4  hover:border-white transition duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-gray-900 hover:text-amber-400 duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-4">Fast Delivery</h3>
                    <p className="text-gray-600 mt-2">
                        Get your edited photos & videos delivered promptly without compromising quality.
                    </p>
                </div>

                {/* Feature 3: Affordable Pricing */}
                <div className="text-center flex flex-col items-center">
                    <div className="rounded-full border-8 border-amber-500 p-4  hover:border-white transition duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-gray-900 hover:text-amber-400 duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-4">Affordable Pricing</h3>
                    <p className="text-gray-600 mt-2">
                        Flexible packages for every occasion, making premium photography accessible to all.
                    </p>
                </div>

                {/* Feature 4: Secure & Private Storage */}
                <div className="text-center flex flex-col items-center">
                    <div className="rounded-full border-8 border-amber-500 p-4  hover:border-white transition duration-500">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-gray-900 hover:text-amber-400 duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-4">Secure & Private</h3>
                    <p className="text-gray-600 mt-2">
                        Your videos and photos are safely stored, ensuring 100% privacy and security.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
