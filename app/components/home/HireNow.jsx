'use client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React from 'react'

const HireNow = () => {
    return (
        <section id="book-now" className="relative h-[90vh] w-full flex items-center justify-center my-24 overflow-hidden">
            {/* Background Image */}
            <CldImage
                src="1_pbqgjh"
                fill
                alt="Hire Professional Photographers and Videographers"
                className="absolute inset-0 object-cover object-center rounded-bl-[100px]"
            />

            {/* Content */}
            <div className="container relative z-10 px-4 lg:px-10">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-center">
                    <div className="xl:col-span-7 bg-white/90 border border-white shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 rounded-xl px-6 py-10">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-amber-600 leading-snug mb-4">
                            Hire Us
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-900 mb-8">
                            Book us today and make your moments unforgettable!
                        </p>
                        <div>
                            <Link
                                href="/contact"
                                className="inline-block px-6 py-3 text-xs font-bold uppercase bg-amber-600 text-white rounded-lg shadow-md shadow-amber-900/10 hover:shadow-lg hover:shadow-amber-900/20 transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HireNow
