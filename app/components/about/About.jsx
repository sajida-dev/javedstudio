'use client';

import Image from 'next/image';
import Head from 'next/head';
import React from 'react';

const Aboutt = () => {
    return (
        <>
            <Head>
                <title>About Us | Javed Studio</title>
                <meta name="description" content="Discover the journey of Javed Studio in providing top-notch photography and videography services with a rich experience of over 10 years." />
                <meta name="keywords" content="Photography, Videography, Wedding Photography, Professional Studio" />
            </Head>

            <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">

                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">

                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-amber-500 text-4xl font-bold leading-normal lg:text-start text-center">
                                            Capturing Timeless Memories with Passion</h2>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Javed Studio has been crafting unforgettable wedding stories and cinematic videography experiences for over a decade. Our team of professionals ensures that every moment is captured with perfection.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold leading-9">10+ Years</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Capturing Special Moments with Perfection</p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold leading-9">500+ Weddings</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Turning Dreams into Beautiful Wedding Stories</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                <Image
                                    src="/img/slider/1.jpg"
                                    alt="About Javed Studio"
                                    width={564}
                                    height={646}
                                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutt;
