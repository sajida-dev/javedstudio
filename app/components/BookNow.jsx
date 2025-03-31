import React from 'react'

const BookNow = () => {
    return (
        <>
            <section className='mb-25 sm:my-20' id='book-now'>
                <div className="!flex h-[90vh] w-full items-center justify-between px-10"><img src="https://bucket.material-tailwind.com/magic-ai/533bce4cae28c0673a41bd6f91cf9d1063c842a2bd80092e2c9b000df480dd7c.jpg" alt="bg-img" className="absolute right-0 ml-auto h-full rounded-bl-[100px] object-cover object-center" />
                    <div className="container mx-auto lg:mt-0 ">
                        <div className="grid grid-cols-12 text-center lg:text-left">
                            <div className="relative flex flex-col bg-clip-border text-gray-700 px-6 py-10 border border-white shadow-lg col-span-full rounded-xl bg-white/90 shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
                                <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 text-3xl !leading-snug lg:text-5xl">Hire Us</h1>
                                <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-10 mt-6 !text-gray-900">Welcome to our online book store where you can explore a wide range of books from various genres.</p>
                                <div className="flex justify-center gap-4 mb-8 lg:justify-start">
                                    <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-amber-600 text-white shadow-md shadow-amber-900/10 hover:shadow-lg hover:shadow-amber-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookNow