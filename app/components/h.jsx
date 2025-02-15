import React from 'react'

const HeroJ = () => {
    return (
        <>
            <section
                className="relative bg-cover bg-center bg-no-repeat pt-10 pb-20"
                style={{ backgroundImage: "url('https://github.com/sajida-dev/javedstudio/raw/master/app/images/hero1.png')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Capturing Moments, Creating Memories
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48">
                        Javed Studio offers professional photography and videography services for weddings, events, corporate shoots, and more.
                        We turn your special moments into timeless memories with high-quality visuals and creative storytelling.
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/services" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                            Explore Our Services
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="/portfolio" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg border border-white hover:bg-white hover:text-black focus:ring-4 focus:ring-gray-100">
                            View Portfolio
                        </a>
                    </div>
                    <div className="max-w-2xl max-md:max-w-md mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-6">
                        <a href="https://www.instagram.com/javedstudio751/"><img src="https://github.com/sajida-dev/javedstudio/raw/master/app/images/insta-logo.png" className="w-28 mx-auto" alt="Instagram Logo" /></a>
                        <a href="https://www.facebook.com/profile.php?id=61564252206804"><img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="Facebook Logo" /></a>
                        <a href="https://www.linkedin.com/in/muhammed-ahmed-865807317/"><img src="https://github.com/sajida-dev/javedstudio/raw/master/app/images/LinkedIn-Logo.png" className="w-28 mx-auto" alt="LinkedIn Logo" /></a>
                        <a href="https://www.youtube.com/channel/UCQl2fpUV6Eq0Wv2OgkEQ_AA"><img src="https://github.com/sajida-dev/javedstudio/raw/master/app/images/youtube-logo.png" className="w-28 mx-auto" alt="YouTube Logo" /></a>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HeroJ