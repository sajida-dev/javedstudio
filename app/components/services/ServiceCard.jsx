import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-white transition hover:shadow-xl">
            <FontAwesomeIcon icon={icon} className="text-blue-500 text-5xl mb-3" />
            <h5 className="text-lg font-semibold">{title}</h5>
        </div>
    );
};

export default ServiceCard;
