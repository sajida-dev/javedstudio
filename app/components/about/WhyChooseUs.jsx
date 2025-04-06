'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUserTie, faCamera, faStar } from "@fortawesome/free-solid-svg-icons";
import AboutTopHeading from "./AboutTopHeading";

const reasons = [
    {
        icon: faLightbulb,
        title: "Creative Vision",
        desc: "We capture moments with a creative and artistic touch that tells your story beautifully."
    },
    {
        icon: faUserTie,
        title: "Professional Expertise",
        desc: "Backed by years of experience, we deliver professional photography & videography services that exceed expectations."
    },
    {
        icon: faCamera,
        title: "Premium Quality",
        desc: "We use high-end cameras and latest equipment to produce stunning, high-resolution photos and cinematic videos."
    },
    {
        icon: faStar,
        title: "25+ Years of Experience",
        desc: "Trusted by countless clients, Javed Studio has been creating unforgettable memories for over 25 years."
    },
];

const WhyChooseUs = () => {
    return (
        <section className="mb-10 bg-gray-50">
            <AboutTopHeading />
            <div className="container mx-auto px-5 lg:mt-10 md:mt-7 mt-1">
                <h2 className="text-center text-4xl font-bold">Why Choose Javed Studio?</h2>
                <div className="relative mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl my-7 lg:text-4xl font-bold bg-gradient-to-b from-amber-500 to-amber-600 bg-clip-text text-transparent">
                        Capturing Moments, Creating Memories
                    </h2>

                    <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-500">
                        At Javed Studio, we don't just take pictures — we capture emotions, stories, and timeless memories. Our photography and videography services are designed to make your special moments unforgettable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="group flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-lg group-hover:bg-white group-hover:text-amber-300">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50 border-4 border-gray-50 text-orange-400 transition-all group-hover:border-orange-500 duration-500">
                                <FontAwesomeIcon
                                    icon={reason.icon}
                                    className="text-3xl group-hover:text-orange-500 transition-all duration-500"
                                />
                            </div>
                            <h5 className="mt-4 text-xl font-semibold">{reason.title}</h5>
                            <p className="text-gray-600">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
