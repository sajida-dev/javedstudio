import Image from 'next/image';

const teamMembers = [
    {
        name: "Alex Morgan",
        role: "CEO & Founder",
        image: "/team/Javed.jpg",
        bio: "Visionary leader with 15+ years of experience in tech innovation.",
    },
    {
        name: "Sarah Johnson",
        role: "Chief Design Officer",
        image: "/team/ahmed.jpg",
        bio: "Award-winning designer with a passion for creating beautiful, functional interfaces.",
    },
    {
        name: "Michael Chen",
        role: "CTO",
        image: "/team/sultan.jpg",
        bio: "Tech genius with expertise in AI and machine learning technologies.",
    }
    , {
        name: "Michael Chen",
        role: "CTO",
        image: "/team/04.jpg",
        bio: "Tech genius with expertise in AI and machine learning technologies.",
    }
];

const Team = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Meet Our Talented Team</h2>
                    <p className="text-gray-600 text-lg mt-4">We are a passionate team dedicated to delivering top-notch photography and videography services.</p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group text-center">
                            <div className="relative overflow-hidden rounded-xl mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={4}
                                    height={667}
                                    className="w-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                            <p className="text-amber-500 font-medium">{member.role}</p>
                            <p className="text-gray-600 mt-2">{member.bio}</p>
                        </div>
                    ))}
                </div>

                {/* Join Our Team CTA */}
                <div className="mt-20 text-center">
                    <a href="#" className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">Join Our Team →</a>
                </div>
            </div>
        </section>
    );
};

export default Team;
