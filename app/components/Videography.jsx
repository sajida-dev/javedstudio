'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Videography = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative overflow-hidden" id='videography'>
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-2xl py-5 text-center mx-auto">
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
                        Showcasing Our <span className="text-amber-600">Videography</span>
                    </h1>
                    <p className="mt-3 text-lg text-gray-800">
                        Experience our best video productions.
                    </p>
                </div>

                <div className="mt-10 relative max-w-5xl mx-auto">
                    {!isPlaying ? (
                        <div
                            className="w-full object-cover h-96 sm:h-120 bg-[url('/img/slider/1.jpg?auto=format&fit=crop&w=1600&q=80')] bg-no-repeat bg-center bg-cover rounded-xl flex items-center justify-center cursor-pointer"
                            onClick={() => setIsPlaying(true)}
                        >
                            <button className="py-3 px-4 flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                                Play Video
                            </button>
                        </div>
                    ) : (
                        <video className="w-full h-96 sm:h-120 rounded-xl" controls autoPlay>
                            <source src="/post.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Videography;
