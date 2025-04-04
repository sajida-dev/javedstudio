import React from 'react'
import Image from "next/image";

const teamData = [
    {
        id: 1,
        name: "Baby Photography",
        image: "/img/team/1.jpg",
    },
    {
        id: 2,
        name: "Corporate Photography",
        image: "/img/team/2.jpg",
    },
    {
        id: 3,
        name: "Product Photography",
        image: "/img/team/3.jpg",
    },
    {
        id: 4,
        name: "Couple Photography",
        image: "/img/team/4.jpg",
    },
];
const Test = () => {
    return (
        <>
            <div className="text-center py-20 bg-zinc-50 font-extrabold text-5xl hover:text-amber-500 duration-500">
                <h2>Services</h2>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

                {teamData.map((member) => (
                    <div style={{ height: '500px' }} key={member.id} className="relative group w-full object-cover overflow-hidden  shadow-md">
                        <a href="#" className="block w-full h-full">
                            {/* Optimized Image */}
                            <Image
                                src={member.image}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 "
                                priority={member.id === 1} // Load first image faster
                            />

                            {/* Static Heading */}
                            <h2 className="absolute left-0 top-0 w-full h-[50px] text-center mx-auto my-3 text-white font-extrabold text-xl md:text-2xl transition-opacity duration-300 group-hover:opacity-0 z-20">
                                {member.name}
                            </h2>

                            {/* Overlay on hover */}
                            <div className="absolute bottom-[calc(100%-50px)] left-0 right-0 bg-white opacity-50 bg-opacity-30 overflow-hidden h-0 group-hover:h-[50px] transition-all duration-500 z-10">
                                <div className="flex items-center justify-center h-full font-extrabold text-lg md:text-2xl text-black group-hover:text-amber-500">
                                    {member.name}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Test