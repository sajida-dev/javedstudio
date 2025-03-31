'use client';

import Image from 'next/image';
import Head from 'next/head';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Software Engineer',
        image: '/img/team/1.jpg'
    },
    {
        name: 'Jane Smith',
        role: 'Graphic Designer',
        image: '/img/team/4.jpg'
    },
    {
        name: 'Alex Johnson',
        role: 'Marketing Manager',
        image: '/img/team/3.jpg'
    },
    {
        name: 'Peter Johnson',
        role: 'SEO Specialist',
        image: '/img/team/2.jpg'
    }
];

const Team = () => {
    return (
        <>
            <Head>
                <title>Meet Our Team</title>
                <meta name="description" content="Meet our professional team members who bring innovation and creativity to our company." />
            </Head>
            <section id="our-team" className="bg-gray-100 py-32">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                                <Image src={member.image} alt={member.name} width={200} height={200} className="w-full rounded-full mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-700">Role: {member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
