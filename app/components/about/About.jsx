// 'use client';

// import Image from 'next/image';
// import Head from 'next/head';
// import React from 'react';

// const Aboutt = () => {
//     return (
//         <>
//             <Head>
//                 <title>About Us | Javed Studio</title>
//                 <meta name="description" content="Discover the journey of Javed Studio in providing top-notch photography and videography services with a rich experience of over 10 years." />
//                 <meta name="keywords" content="Photography, Videography, Wedding Photography, Professional Studio" />
//             </Head>

//             <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
//                 <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
//                     <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

//                         <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
//                             <div className="w-full flex-col justify-center items-start gap-8 flex">

//                                 <div className="flex-col justify-start lg:items-start items-center gap-4 flex">

//                                     <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
//                                         <h2 className="text-amber-500 text-4xl font-bold leading-normal lg:text-start text-center">
//                                             Capturing Timeless Memories with Passion</h2>
//                                         <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
//                                             Javed Studio has been crafting unforgettable wedding stories and cinematic videography experiences for over a decade. Our team of professionals ensures that every moment is captured with perfection.
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="w-full flex-col justify-center items-start gap-6 flex">
//                                     <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
//                                         <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-amber-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
//                                             <h4 className="text-gray-900 text-2xl font-bold leading-9">10+ Years</h4>
//                                             <p className="text-gray-500 text-base font-normal leading-relaxed">Capturing Special Moments with Perfection</p>
//                                         </div>
//                                         <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-amber-400 transition-all duration-300 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
//                                             <h4 className="text-gray-900 text-2xl font-bold leading-9">500+ Weddings</h4>
//                                             <p className="text-gray-500 text-base font-normal leading-relaxed">Turning Dreams into Beautiful Wedding Stories</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="w-full lg:justify-start justify-center items-start flex group-hover:bg-amber-100">
//                             <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
//                                 <Image
//                                     src="/img/slider/1.jpg"
//                                     alt="About Javed Studio"
//                                     width={564}
//                                     height={646}
//                                     className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
//                                     priority
//                                 />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Aboutt;


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

                                {/* Javed Iqbal's Experience merged here */}
                                <div className="w-full flex-col justify-start items-start gap-4 flex mt-8">
                                    <h3 className="text-amber-500 text-3xl font-bold leading-normal lg:text-start text-center">
                                        About Javed Iqbal, Founder of Javed Studio</h3>
                                    <p className="text-gray-700 text-lg font-normal leading-relaxed lg:text-start text-center mt-4 mb-6">
                                        Javed Iqbal is the founder of Javed Studio and has more than 10 years of experience in photography and videography. His passion for capturing special moments started early, and he has worked hard to turn this passion into a successful business.
                                    </p>
                                    <p className="text-gray-700 text-lg font-normal leading-relaxed lg:text-start text-center mb-6">
                                        With his creative eye and attention to detail, Javed has become known for capturing beautiful, meaningful moments. Whether it's a wedding, a family celebration, or a special event, Javed always aims to tell a story through his photos and videos.
                                    </p>
                                    <p className="text-gray-700 text-lg font-normal leading-relaxed lg:text-start text-center mb-6">
                                        Over the years, Javed has built a strong team at Javed Studio, and together they continue to provide high-quality photography and videography services.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:justify-start justify-center items-start flex group-hover:bg-amber-100">
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
    );
}

export default Aboutt;
