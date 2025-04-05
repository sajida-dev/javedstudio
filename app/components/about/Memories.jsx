'use client'
import { CldImage } from 'next-cloudinary'
import React, { useEffect, useRef, useState } from 'react'

const Memories = () => {

    const statsRef = useRef(null);
    const expRef = useRef(null);
    const projectsRef = useRef(null);
    const clientsRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const formatNumber = (num) => {
        if (num >= 1e12) return (num / 1e12).toFixed(1) + 'T+';
        if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B+';
        if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M+';
        if (num >= 1e5) return (num / 1e5).toFixed(1) + 'L+';
        if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K+';
        return num.toString() + "+";
    };

    const animateValue = (el, start, end, duration) => {
        let startTs = null;
        const step = (ts) => {
            if (!startTs) startTs = ts;
            const progress = Math.min((ts - startTs) / duration, 1);
            const raw = Math.floor(progress * (end - start) + start);
            el.innerText = formatNumber(raw);
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    };

    const stats = [
        { ref: expRef, end: 25, label: 'Years of Experience' },
        { ref: projectsRef, end: 80953000, label: 'Weddings & Events Covered' },
        { ref: clientsRef, end: 100000, label: 'Happy Clients' },
    ];

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    // animate each stat
                    stats.forEach(({ ref, end }) =>
                        animateValue(ref.current, 0, end, 2000)
                    );
                    setHasAnimated(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (statsRef.current) obs.observe(statsRef.current);
        return () => obs.disconnect();
    }, [hasAnimated]);


    return (
        <>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <CldImage className=" rounded-xl object-cover" width={500} height={500} src="12_exmgiv" alt="about Javed Studio photography" />
                            </div>
                            <CldImage className="sm:ml-0 ml-auto rounded-xl object-cover" width={500} height={500} src="19_rgjbzg" alt="about Javed Studio videography" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div ref={statsRef} className=" w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Capturing Moments, Creating Memories
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        At Javed Studio, we believe photography and videography are not just about capturing pictures — it's about capturing emotions, moments, and stories that last forever. With a passion for creativity and attention to detail, we turn your special moments into timeless memories.
                                    </p>
                                </div>
                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    {stats.map(({ ref, label }, idx) => (
                                        <div key={idx} className="flex-col items-start inline-flex">
                                            <h3
                                                ref={ref}
                                                className="text-gray-900 text-4xl font-bold font-manrope leading-normal"
                                            >
                                                0
                                            </h3>
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                {label}
                                            </h6>
                                        </div>
                                    ))}
                                    {/* Years of Experience */}
                                    {/* <div className="flex-col justify-start items-start inline-flex">
                                        <div className='flex-row justify-start'>
                                            <h3
                                                ref={expRef}
                                                className="text-gray-900 text-4xl font-bold font-manrope leading-normal"
                                            >
                                                0
                                            </h3>
                                        </div>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                            Years of Experience
                                        </h6>
                                    </div> */}

                                    {/* Weddings & Events Covered */}
                                    {/* <div className="flex-col justify-start items-start inline-flex">
                                        <h4
                                            ref={projectsRef}
                                            className="text-gray-900 text-4xl font-bold font-manrope leading-normal"
                                        >
                                            0
                                        </h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                            Weddings & Events Covered
                                        </h6>
                                    </div> */}

                                    {/* Happy Clients */}
                                    {/* <div className="flex-col justify-start items-start inline-flex">
                                        <h4
                                            ref={clientsRef}
                                            className="text-gray-900 text-4xl font-bold font-manrope leading-normal"
                                        >
                                            0
                                        </h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                            Happy Clients
                                        </h6>
                                    </div> */}
                                </div>

                            </div>
                            <a href='/service/couple' className="sm:w-fit w-full px-3.5 py-2 bg-amber-400 hover:bg-amber-500 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Memories
