import { faMicrophone, faVideo, faCamera, faUsers, faBox, faHeart, faUserTie, faFilm } from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./ServiceCard";

const services = [
    { icon: faMicrophone, title: "Voice Overs" },
    { icon: faVideo, title: "Documentaries" },
    { icon: faUsers, title: "Corporate Event Coverage" },
    { icon: faCamera, title: "Corporate Photoshoots" },
    { icon: faBox, title: "Product Photography" },
    { icon: faHeart, title: "Couple Shoot" },
    { icon: faUserTie, title: "Model Shoots" },
    { icon: faFilm, title: "Corporate Videos" },
];

const ServicesSection = () => {
    return (
        <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-5">
                <h1 className="text-center text-3xl font-bold">Our Services</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
                    We provide professional photography and videography services to make your moments memorable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
