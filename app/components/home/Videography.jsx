'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Videography = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const posterUrl =
        'https://res.cloudinary.com/dgjrgkaop/image/upload/v1743778303/1_pbqgjh.jpg';
    const videoUrl =
        'https://res.cloudinary.com/dgjrgkaop/video/upload/v1743859815/Download_k90vt7.mp4';

    return (
        <section id="videography" className="bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
                        Showcasing Our <span className="text-amber-600">Videography</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Experience our best video productions.
                    </p>
                </div>

                {/* Video / Poster */}
                <div className="max-w-6xl mx-auto">
                    {!isPlaying ? (
                        <div
                            role="button"
                            aria-label="Play video"
                            onClick={() => setIsPlaying(true)}
                            className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                            style={{
                                backgroundImage: `url('${posterUrl}?auto=format&fit=crop&w=1600&q=80')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Dark overlay + blur behind play button */}
                            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dgjrgkaop/image/upload/v1743778303/1_pbqgjh.jpg?auto=format&fit=crop&w=1600&q=80')] bg-no-repeat bg-center bg-cover rounded-xl cursor-pointer flex items-center justify-center">
                                <button
                                    className="flex items-center gap-2 px-5 py-3 bg-white bg-opacity-90 rounded-full text-gray-800 font-medium hover:bg-opacity-100 transition"
                                    aria-label="Play video"
                                >
                                    <FontAwesomeIcon icon={faPlay} className="text-xl" />
                                    <span>Play Video</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <video
                            className="w-full aspect-video rounded-xl shadow-lg"
                            controls
                            autoPlay
                            preload="metadata"
                            poster={`${posterUrl}?auto=format&fit=crop&w=1600&q=80`}
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Videography;
