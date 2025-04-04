import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCogs, faCamera, faPaintBrush, faBrain } from "@fortawesome/free-solid-svg-icons";

const reasons = [
    { icon: faLightbulb, title: "Creative Approach", desc: "We bring unique and innovative ideas to every project." },
    { icon: faCogs, title: "Professional Skills", desc: "Expert photographers and videographers with years of experience." },
    { icon: faCamera, title: "High-Quality Result", desc: "We use the best equipment to ensure top-tier results." },
    // { icon: faPaintBrush, title: "Attention to Detail", desc: "We focus on every little detail to make your memories perfect." },
    { icon: faBrain, title: "Experience", desc: "Over 25+ years of experience in the industry." },
];

const WhyChooseUs = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-5">
                <h2 className="text-center text-4xl font-bold">Why Choose Us?</h2>
                <div className="relative mx-auto max-w-5xl text-center">
                    {/* <h2 className="block w-full bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Build a Website That Your Customers Love
                    </h2> */}
                    <h2 className="text-3xl my-7 lg:text-4xl font-bold bg-gradient-to-b from-amber-500 to-amber-600 bg-clip-text text-transparent text-opacity-0">
                        Build a Website That Your Customers Love
                    </h2>

                    <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        Our templates allow for maximum customization. No technical skills required – our intuitive design tools
                        let you get the job done easily.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg">
                            {/* Icon inside an amber circle */}
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-400 border-4 border-amber-300 text-white">
                                <FontAwesomeIcon icon={reason.icon} className="text-3xl" />
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
