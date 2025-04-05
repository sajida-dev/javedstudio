import React from 'react'
import Image from "next/image";
const teamData = [
    {
        id: 1,
        name: "Baby Photography",
        image: "https://res.cloudinary.com/dgjrgkaop/image/upload/q_auto,f_auto,c_fill/v1743850405/13_f1sebl.jpg",
        url: "/service/baby",
    },
    {
        id: 2,
        name: "Corporate Photography",
        image: "https://res.cloudinary.com/dgjrgkaop/image/upload/q_auto,f_auto,c_fill/v1743850400/corporate_oyc0xl.jpg",
        url: "/service/corporate",
    },
    {
        id: 3,
        name: "Product Photography",
        image: "https://res.cloudinary.com/dgjrgkaop/image/upload/q_auto,f_auto,c_fill/v1743850305/product_qutdp4.jpg",
        url: "/service/product",
    },
    {
        id: 4,
        name: "Couple Photography",
        image: "https://res.cloudinary.com/dgjrgkaop/image/upload/q_auto,f_auto,c_fill/v1743850348/couple_u1mup3.jpg",
        url: "/service/couple",
    },
];
const Test = () => {
    return (
        <div id='services'>
            <div className="text-center py-20 bg-zinc-50 font-extrabold text-5xl hover:text-amber-500 duration-500">
                <h2>Services</h2>
            </div>
            <section className="grid grid-cols-1 lg:gap-0 md:gap-1 gap-3 md:grid-cols-2 lg:grid-cols-4">

                {teamData.map((member) => (
                    <div style={{ height: '500px' }} key={member.id} className="relative group w-full object-cover overflow-hidden  shadow-md">
                        <a href={member.url} className="block w-full h-full">

                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-300"
                                priority={member.id === 1} // Load first image faster
                            />

                            {/* Static Heading */}
                            <h2 className="absolute left-0 top-0 w-full h-[50px] text-center mx-auto my-3 text-white font-extrabold lg:opacity-100 md:opacity-100 sm:opacity-0 text-xl md:text-2xl transition-opacity duration-300 group-hover:opacity-0 z-20">
                                {member.name}
                            </h2>

                            {/* Overlay on hover */}
                            <div className="absolute bottom-[calc(100%-50px)] left-0 right-0 bg-white opacity-50 bg-opacity-30 overflow-hidden lg:h-0 md:h-0 sm:h-full  group-hover:h-[50px] transition-all duration-500 z-10">
                                <div className="flex items-center justify-center h-full font-extrabold text-lg md:text-2xl text-black group-hover:text-amber-500">
                                    {member.name}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Test