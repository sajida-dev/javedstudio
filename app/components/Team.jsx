"use client";

import Image from "next/image";

const teamMembers = [
    {
        name: "KHAN SAHEB",
        role: "HR, LATO",
        image: "/img/team/1.jpg",
    },
    {
        name: "Ali Akbar",
        role: "HR, PIT",
        image: "/img/team/1.jpg",
    },
    {
        name: "Sadab Bean",
        role: "HR, INCA",
        image: "/img/team/1.jpg",
    },
    {
        name: "Mohammad Ahmad",
        role: "HR, INCA",
        image: "/img/team/1.jpg",
    },
];

export default function TeamSection() {
    return (
        <section className="py-14 md:py-24 bg-gray-200  text-zinc-900 ">
            <div className="container mx-auto sm:my-10 px-4 text-center">
                <h2 className="text-3xl md:text-[45px] font-bold">Our Team</h2>
                <p className="text-[17px] opacity-80 mt-4 mb-12">
                    Meet our experienced and skilled professionals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative sm:mb-50 p-6 ">
                            <Image
                                src={member.image}
                                alt={`${member.name} - ${member.role}`}
                                width={400}
                                height={400}
                                className="w-full h-auto mx-auto rounded-lg shadow-md"
                            />
                            <div className="absolute -bottom-12 rounded left-1/2 transform -translate-x-1/2 p-5 w-[80%] bg-white shadow-xl  text-center overflow-hidden z-10 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-[17px] opacity-80">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
