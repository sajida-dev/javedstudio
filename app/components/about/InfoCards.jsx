
'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from '../icons/ArrowUp';
import { ArrowDown } from '../icons/ArrowDown';

const InfoCards = () => {
    const containerRef = useRef(null);
    const valueRefs = useRef([]);
    const [hasAnimated, setHasAnimated] = useState(false);

    const stats = [
        {
            label: 'Weddings & Events Covered',
            end: 3000,  // 10 years × 300 events approx (big studios like yours)
            format: 'number',
            change: '200+ this year',
            color: 'text-green-500',
            arrow: 'up',
        },
        {
            label: 'Photos Delivered',
            end: 15000000,  // 5000 photos/day × avg 3 days/event × 1000+ events
            format: 'number',
            change: '500K this year',
            color: 'text-green-500',
            arrow: 'up',
        },
        {
            label: 'Videos Produced',
            end: 100000,  // 50-200 videos/event × 1000+ events
            format: 'number',
            change: '5000+ this year',
            color: 'text-green-500',
            arrow: 'up',
        },
    ];


    const formatNumber = (num) => {
        if (num >= 1e12) return (num / 1e12).toFixed(1) + 'T';
        if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
        if (num >= 1e5) return (num / 1e5).toFixed(1) + 'L';
        if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
        return num.toString();
    };

    const formatValue = (raw, format) => {
        return formatNumber(raw);
    };

    const animateValue = (el, start, end, duration) => {
        let startTs = null;
        const step = (ts) => {
            if (!startTs) startTs = ts;
            const progress = Math.min((ts - startTs) / duration, 1);
            const raw = Math.floor(progress * (end - start) + start);
            el.innerText = formatValue(raw);
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    stats.forEach((stat, i) =>
                        animateValue(valueRefs.current[i], 0, stat.end, 2000)
                    );
                    setHasAnimated(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (containerRef.current) obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, [hasAnimated]);


    return (
        <>
            <div className="text-center pt-20 font-extrabold text-5xl hover:text-amber-500 duration-500">
                <h2>It’s All About – In Numbers</h2>
            </div>

            <section
                ref={containerRef}
                className="grid py-20 gap-6  md:grid-cols-3 max-w-5xl mx-auto w-full"
            >
                {stats.map((stat, i) => (
                    <div key={i} className="p-6 bg-white shadow rounded-2xl md:mx-0 mx-9">
                        <dl className="space-y-2 text-center md:text-left ">
                            <dt className="text-sm font-medium text-gray-500">{stat.label}</dt>
                            <dd
                                ref={(el) => (valueRefs.current[i] = el)}
                                className="text-5xl font-light md:text-6xl"
                            >
                                0
                            </dd>
                            <dd className={`flex justify-center md:justify-start items-center space-x-1 text-sm font-medium ${stat.color}`}>
                                <span>{stat.change}</span>
                                {stat.arrow === 'up' ? ArrowUp : ArrowDown}
                            </dd>
                        </dl>
                    </div>
                ))}
            </section>
        </>
    );
};

export default InfoCards;
