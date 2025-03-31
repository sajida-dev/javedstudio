import { color } from 'framer-motion'
import React from 'react'

const SeparatingSection = () => {
    return (
        <>
            <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/bg.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-1 before:transform before:-translate-x-1/2">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                    { /* Title */}
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">

                            <span className="bg-clip-text bg-linear-to-tl from-amber-400 to-amber-600 text-transparent"> EXPRESSIONS </span>PHOTOGRAPHY
                        </h1>
                    </div>
                    { /* End Title */}

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600 ">A MOMENT WE CAPTURE, WILL LIVE FOREVER.</p>
                    </div>
                </div>
            </div>
            { /* End Hero */}</>
    )
}

export default SeparatingSection