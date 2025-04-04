import React from 'react';

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
                        <svg fill="none" strokeWidth={1.5} height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve">
                            <g>
                                <g>
                                    <path d="M510.228,166.833L412.915,42.98c-1.573-2-3.978-3.169-6.522-3.169H105.606c-2.545,0-4.95,1.169-6.521,3.169L1.772,166.833\\n\\t\\t\\tc-2.435,3.1-2.352,7.485,0.198,10.49l247.706,291.94c1.576,1.858,3.888,2.927,6.324,2.927c2.436,0,4.748-1.07,6.324-2.927\\n\\t\\t\\tl247.706-291.94C512.58,174.318,512.663,169.932,510.228,166.833z M394.573,56.398l-35.771,98.898l-84.771-98.898H394.573z\\n\\t\\t\\t M344.127,163.664H167.872l88.127-102.815L344.127,163.664z M237.968,56.398l-84.77,98.898l-35.773-98.898H237.968z\\n\\t\\t\\t M102.891,64.984l35.694,98.68H25.357L102.891,64.984z M26.207,180.251h118.377l87.96,243.183L26.207,180.251z M255.999,439.514\\n\\t\\t\\tl-93.776-259.263h187.551L255.999,439.514z M279.455,423.433l87.959-243.182h118.377L279.455,423.433z M373.413,163.664\\n\\t\\t\\tl35.693-98.681l77.535,98.681H373.413z" />
                                </g>
                            </g>
                        </svg>
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
