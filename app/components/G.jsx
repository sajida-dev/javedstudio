'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTiktok, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <div className="flex space-x-4 p-4 bg-gray-100 rounded-lg shadow-lg text-center">
            <Link href="https://wa.me/yourphonenumber" target="_blank" className="text-green-500 text-3xl hover:text-green-700">
                <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
            <Link href="https://facebook.com/yourprofile" target="_blank" className="text-blue-600 text-3xl hover:text-blue-800">
                <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="https://www.tiktok.com/@yourusername" target="_blank" className="text-black text-3xl hover:text-gray-700">
                <FontAwesomeIcon icon={faTiktok} />
            </Link>
            <Link href="https://instagram.com/yourprofile" target="_blank" className="text-pink-500 text-3xl hover:text-pink-700">
                <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-700 text-3xl hover:text-blue-900">
                <FontAwesomeIcon icon={faLinkedin} />
            </Link>
        </div>
    );
};

export default SocialLinks;