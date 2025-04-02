import React from "react";
import Image from "next/image";

const Services = () => {
    return (
        <section className="bg-zinc-50 overflow-hidden py-12">
            {/* Title */}
            <div className="text-center py-20 bg-zinc-50 font-extrabold text-5xl hover:text-amber-500 duration-500">
                <h2>Services</h2>
            </div>

            <div className=" overflow-hidden py-12">

                {/* Services Grid */}
                <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            href: "/services/couple",
                            src: "/img/slider/1.jpg",
                            alt: "Couple Photography",
                            rotate: "rotate-6",
                        },
                        {
                            href: "/services/weddings",
                            src: "/img/slider/2.jpg",
                            alt: "Wedding Photography",
                            rotate: "-rotate-7",
                        },
                        {
                            href: "/services/corporate",
                            src: "/img/slider/1.jpg",
                            alt: "Corporate Photography",
                            rotate: "rotate-6",
                        },
                        {
                            href: "/services/product",
                            src: "/img/slider/2.jpg",
                            alt: "Product Photography",
                            rotate: "-rotate-9",
                        },
                    ].map((service, index) => (
                        <a key={index} href={service.href} className="relative group">
                            <div className={`rounded-xl overflow-hidden transform ${service.rotate} group-hover:rotate-0 duration-500 group-hover:-translate-y-6`}>
                                <Image
                                    src={service.src}
                                    width={500}
                                    height={350}
                                    style={{ objectFit: "cover" }}
                                    className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                                    alt={service.alt}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
