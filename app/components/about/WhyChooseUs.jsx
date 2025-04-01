import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCogs, faCamera, faPaintBrush, faBrain } from "@fortawesome/free-solid-svg-icons";

const reasons = [
    { icon: faLightbulb, title: "Creative Approach", desc: "We bring unique and innovative ideas to every project." },
    { icon: faCogs, title: "Professional Skills", desc: "Expert photographers and videographers with years of experience." },
    { icon: faCamera, title: "High-Quality Equipment", desc: "We use the best equipment to ensure top-tier results." },
    { icon: faPaintBrush, title: "Attention to Detail", desc: "We focus on every little detail to make your memories perfect." },
    { icon: faBrain, title: "Experience", desc: "Over 25+ years of experience in the industry." },
];

const WhyChooseUs = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-5">
                <h2 className="text-center text-3xl font-bold">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center p-6 border rounded-lg shadow-md">
                            <FontAwesomeIcon icon={reason.icon} className="text-blue-500 text-4xl" />
                            <h5 className="mt-3 text-xl font-semibold">{reason.title}</h5>
                            <p className="text-gray-600 text-center">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
