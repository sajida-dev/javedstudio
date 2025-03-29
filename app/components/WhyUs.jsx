import React from 'react'

const WhyUs = () => {
    return (
        <section className="text-gray-700 body-font">
            <div className="flex justify-center mt-10 text-4xl font-regular">
                Why Us?
            </div>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img src="img/why-us/01.png?output-format=webp" className="w-32 mb-3" />
                            </div>
                            <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img src="img/why-us/02.png?output-format=webp" className="w-32 mb-3" />
                            </div>
                            <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img src="img/why-us/03.png?output-format=webp" className="w-32 mb-3" />
                            </div>
                            <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img src="img/why-us/04.png?output-format=webp" className="w-32 mb-3" />
                            </div>
                            <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyUs