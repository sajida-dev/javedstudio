
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMicrophone,
    faFilm,
    faCameraRetro,
    faImages,
    faShoppingBag,
    faHeart,
    faUserTie,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";

const services = [
    { icon: faMicrophone, title: "Voice Overs" },
    { icon: faFilm, title: "Documentaries" },
    { icon: faImages, title: "Corporate Photography" },
    { icon: faShoppingBag, title: "Product Photography" },
    { icon: faHeart, title: "Couple Shoot" },
    { icon: faVideo, title: "Wedding Photography" },
];

export default function ServicesSection() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
                <p className="text-gray-600 mt-2 mx-auto lg:max-w-2xl w-[80%]">
                    We are your complete solution for all types of production services. Get your beautiful moments captured by our professionals.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="group flex flex-col lg:w-full w-[85%] mx-auto items-center p-6 rounded-lg transition transform hover:scale-105 group-hover:text-orange-400 group-hover:bg-amber-50">
                        <div className="w-16 h-16 flex items-center justify-center bg-amber-400 text-white rounded-full border-4 border-orange-400 p-3 shadow-md transition-all group-hover:bg-white duration-500">
                            <FontAwesomeIcon
                                icon={service.icon}
                                size="2x"
                                className="group-hover:text-orange-400 text-white transition-all duration-500"
                            />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-800 mt-4">
                            {service.title}
                        </h5>
                    </div>
                ))}

            </div>
        </section>
    );
}
