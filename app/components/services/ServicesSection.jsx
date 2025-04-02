// import { faMicrophone, faVideo, faCamera, faUsers, faBox, faHeart, faUserTie, faFilm } from "@fortawesome/free-solid-svg-icons";
// import ServiceCard from "./ServiceCard";

// const services = [
//     { icon: faMicrophone, title: "Voice Overs" },
//     { icon: faVideo, title: "Documentaries" },
//     { icon: faUsers, title: "Corporate Event Coverage" },
//     { icon: faCamera, title: "Corporate Photoshoots" },
//     { icon: faBox, title: "Product Photography" },
//     { icon: faHeart, title: "Couple Shoot" },
//     { icon: faUserTie, title: "Model Shoots" },
//     { icon: faFilm, title: "Corporate Videos" },
// ];

// const ServicesSection = () => {
//     return (
//         <section className="py-10 bg-gray-50">
//             <div className="container mx-auto px-5">
//                 <h1 className="text-center text-3xl font-bold">Our Services</h1>
//                 <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
//                     We provide professional photography and videography services to make your moments memorable.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//                     {services.map((service, index) => (
//                         <ServiceCard key={index} {...service} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ServicesSection;


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
                    <div key={index} className="flex flex-col lg:w-full w-[85%] mx-auto items-center bg-white p-6 shadow-lg rounded-lg transition transform hover:scale-105">
                        <div className="w-16 h-16 flex items-center justify-center bg-amber-400 text-white rounded-full border-4 border-amber-300 shadow-md">
                            <FontAwesomeIcon icon={service.icon} size="2x" />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-800 mt-4">{service.title}</h5>
                    </div>
                ))}
            </div>
        </section>
    );
}
