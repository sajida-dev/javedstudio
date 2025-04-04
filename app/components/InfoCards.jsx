import React from 'react'

const InfoCards = () => {
    return (
        <>
            <div className="text-center pt-20  font-extrabold text-5xl hover:text-amber-500 duration-500">
                <h2>Its all about - In Numbers</h2>
            </div>
            <section className="grid py-20 gap-6 md:grid-cols-3 max-w-5xl mx-auto w-full ">
                <div className="p-6 bg-white shadow rounded-2xl ">
                    <dl className="space-y-2">
                        <dt className="text-sm font-medium text-gray-500 ">Unique views</dt>

                        <dd className="text-5xl font-light md:text-6xl ">192.1k</dd>

                        <dd className="flex items-center space-x-1 text-sm font-medium text-green-500 ">
                            <span>32k increase</span>

                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 15.25V6.75H8.75" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7L6.75 17.25" />
                            </svg>
                        </dd>
                    </dl>
                </div>

                <div className="p-6 bg-white shadow rounded-2xl ">
                    <dl className="space-y-2">
                        <dt className="text-sm font-medium text-gray-500 ">Bounce rate</dt>

                        <dd className="text-5xl font-light md:text-6xl ">21%</dd>

                        <dd className="flex items-center space-x-1 text-sm font-medium text-red-500 ">
                            <span>7% increase</span>

                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.75V17.25H8.75" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17L6.75 6.75" />
                            </svg>
                        </dd>
                    </dl>
                </div>

                <div className="p-6 bg-white shadow rounded-2xl ">
                    <dl className="space-y-2">
                        <dt className="text-sm font-medium text-gray-500 ">Average time on page</dt>

                        <dd className="text-5xl font-light md:text-6xl ">03:12</dd>

                        <dd className="flex items-center space-x-1 text-sm font-medium text-green-500 ">
                            <span>3% increase</span>

                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 15.25V6.75H8.75" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7L6.75 17.25" />
                            </svg>
                        </dd>
                    </dl>
                </div>
            </section>
            {/* <div className="h-screen flex justify-center items-center">


            </div> */}
        </>
    )
}

export default InfoCards