'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import clients from './clients';
import BgTestimonials from './bg';
import { CldImage } from 'next-cloudinary';

const Testimonials = () => {
    return (
        <div className='m-5'>
            <div className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-amber-500 duration-500 py-1 md:py-5 lg:py-20">
                <h2>Testimonials</h2>
                <p className='text-xs text-center font-semibold text-gray-500 uppercase mb-3'>Featured client</p>
            </div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className='w-full'
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
                            <div className='md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center'>
                                <div className='hidden md:block mb-24 md:mb-0 sm:px-6'>
                                    <div className='relative'>
                                        <CldImage className='rounded-xl' width={400} height={600} src={client.avatar} alt='javed studio reviews' />
                                        <BgTestimonials />
                                    </div>
                                </div>
                                <div>
                                    <blockquote className='relative'>
                                        <svg className='absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200' width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                                            <path d='M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z' fill='currentColor' />
                                        </svg>
                                        <div className='relative z-10'>

                                            <p className='text-xl font-medium italic text-gray-800 md:text-2xl xl:text-3xl'>{client.testimonial}</p>
                                        </div>
                                        <footer className='mt-6'>
                                            <div className='flex items-center'>
                                                <div className='md:hidden shrink-0'>
                                                    {/* <img className='size-12 rounded-full' src={client.avatar} alt='Avatar' /> */}
                                                    <CldImage width={400} height={400} className="size-14 rounded-full object-cover" src={client.avatar} alt="Javed studio client" />
                                                </div>
                                                <div className='ms-4 md:ms-0'>
                                                    <div className='text-base font-semibold text-gray-800'>{client.name}</div>
                                                    <div className='text-sm text-gray-500'>{client.position}</div>
                                                </div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
