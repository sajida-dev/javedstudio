// 'use client';

// import Head from 'next/head';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';

// const HeroSection = () => {
//     return (
//         <>
//             <Head>
//                 <title>Welcome to Javed Studio</title>
//                 <meta name="description" content="Experience the best photography and videography services for weddings and events." />
//             </Head>
//             <div className="relative">
//                 <Swiper
//                     modules={[Autoplay]}
//                     spaceBetween={0}
//                     slidesPerView={1}
//                     loop={true}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }}
//                     className="w-full h-120 md:h-[calc(100vh-106px)]"
//                 >
//                     {/* Slide 1 */}
//                     <SwiperSlide>
//                         <div className="h-120 md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://res.cloudinary.com/dgjrgkaop/image/upload/q_auto,f_auto,c_fill/v1743778303/1_pbqgjh.jpg?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat">
//                             <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
//                                 <span className="block text-white text-lg">Capturing Moments</span>
//                                 <span className="block text-white text-2xl md:text-4xl font-bold">Professional Wedding Photography</span>
//                                 <div className="mt-5">
//                                     <a className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100" href="#services">
//                                         View Portfolio
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     {/* Slide 2 */}
//                     <SwiperSlide>
//                         <div className="h-120 md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://res.cloudinary.com/dgjrgkaop/image/upload/q_auto,f_auto,c_fill/v1743778836/2_hofnsv.jpg?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat">
//                             <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
//                                 <span className="block text-white text-lg">Videography Excellence</span>
//                                 <span className="block text-white text-2xl md:text-4xl font-bold">Cinematic Wedding Films</span>
//                                 <div className="mt-5">
//                                     <a className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100" href="#videography">
//                                         Watch Videos
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="h-120 md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://res.cloudinary.com/dgjrgkaop/image/upload/v1743854573/slider_3_jveaae.jpg?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat">
//                             <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
//                                 <span className="block text-white text-lg">Timeless Memories</span>
//                                 <span className="block text-white text-2xl md:text-4xl font-bold">Creating Stories Through Our Lens</span>
//                                 <div className="mt-5">
//                                     <a className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100" href="#book-now">
//                                         Hire us Now
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </>
//     );
// };

// export default HeroSection;



'use client';

import Head from 'next/head';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const slides = [
    {
        img: 'https://res.cloudinary.com/dgjrgkaop/image/upload/q_auto,f_auto,c_fill/v1743778303/1_pbqgjh.jpg?q=80&w=1920&auto=format&fit=crop',
        smallText: 'Capturing Moments',
        bigText: 'Professional Wedding Photography',
        btnText: 'View Portfolio',
        btnLink: '#services',
    },
    {
        img: 'https://res.cloudinary.com/dgjrgkaop/image/upload/q_auto,f_auto,c_fill/v1743778836/2_hofnsv.jpg?q=80&w=1920&auto=format&fit=crop',
        smallText: 'Videography Excellence',
        bigText: 'Cinematic Wedding Films',
        btnText: 'Watch Videos',
        btnLink: '#videography',
    },
    {
        img: 'https://res.cloudinary.com/dgjrgkaop/image/upload/v1743854573/slider_3_jveaae.jpg?q=80&w=1920&auto=format&fit=crop',
        smallText: 'Timeless Memories',
        bigText: 'Creating Stories Through Our Lens',
        btnText: 'Hire us Now',
        btnLink: '#book-now',
    },
];

const HeroSection = () => {
    return (
        <>
            <Head>
                <title>Welcome to Javed Studio</title>
                <meta
                    name="description"
                    content="Experience the best photography and videography services for weddings and events."
                />
            </Head>

            <div className="relative">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="w-full h-120 md:h-[calc(100vh-106px)]"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-120 md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${slide.img})` }}
                            >
                                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                                    <span className="block text-white text-lg">{slide.smallText}</span>
                                    <span className="block text-white text-2xl md:text-4xl font-bold">{slide.bigText}</span>
                                    <div className="mt-5">
                                        <a
                                            href={slide.btnLink}
                                            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100"
                                        >
                                            {slide.btnText}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default HeroSection;
