import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
    const whatsappNumber = '+923007784807';

    return (
        <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 z-10 text-white px-4 py-3 rounded-full text-2xl shadow-lg hover:bg-green-600 transition-all"
        >
            <FontAwesomeIcon icon={faWhatsapp} />

        </a>
    );
};

export default WhatsAppButton;
