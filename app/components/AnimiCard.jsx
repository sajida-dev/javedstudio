// import React from 'react'
// import Image from "next/image";

// const AnimiCard = () => {
//     return (
//         <section className="bg-zinc-50 overflow-hidden">
//             <div className='mt-25 text-center font-extrabold font-stretch-100% text-5xl hover:text-blue-500 duration-500'>
//                 <h2>Services</h2>
//             </div>
//             <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
//                 <div className="flex flex-col sm:flex-row mx-auto">
//                     <a href="/services/couple">
//                         <Image src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
//                     </a>
//                     <a href="/services/weddings">
//                         <Image src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " className="rounded-xl  -rotate-7 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
//                     </a>
//                     <a href="/services/corporate">
//                         <Image src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
//                     </a>
//                     <a href="/services/product">
//                         <Image src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-xl  -rotate-9 mx-4 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
//                     </a>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AnimiCard


import React from "react";
import Image from "next/image";

const AnimiCard = () => {
    return (
        <>
            {/* Title */}
            <div className="text-center my-10 font-extrabold text-5xl hover:text-amber-500 duration-500">
                <h2>Services</h2>
            </div>

            <section className="bg-zinc-50 overflow-hidden py-12">

                {/* Services Grid */}
                <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            href: "/services/couple",
                            src: "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "Couple Photography",
                            rotate: "rotate-6",
                        },
                        {
                            href: "/services/weddings",
                            src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "Wedding Photography",
                            rotate: "-rotate-7",
                        },
                        {
                            href: "/services/corporate",
                            src: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "Corporate Photography",
                            rotate: "rotate-6",
                        },
                        {
                            href: "/services/product",
                            src: "https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "Product Photography",
                            rotate: "-rotate-9",
                        },
                    ].map((service, index) => (
                        <a key={index} href={service.href} className="relative group">
                            <div className={`rounded-xl overflow-hidden transform ${service.rotate} group-hover:rotate-0 duration-500 group-hover:-translate-y-6`}>
                                <Image
                                    src={service.src}
                                    width={500} // Set width for optimization
                                    height={350} // Set height for optimization
                                    // layout="responsive" // Ensures responsive scaling
                                    // fill
                                    style={{ objectFit: "cover" }}
                                    className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                                    alt={service.alt}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
};

export default AnimiCard;
