import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ logo, address }) => {
    return (
        <footer className="bg-gray-100 mt-5 text-gray-800">
            <div className="max-w-screen-lg mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-10 border-b">
                {/* Logo & About Section */}
                <div className="text-center sm:text-left">
                    <h3 className="font-bold text-2xl text-amber-600">{logo}</h3>
                    <p className="text-gray-500 text-sm mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="text-center sm:text-right">
                    <h4 className="text-sm font-bold text-amber-600 uppercase">Contact Us</h4>
                    <p className="text-gray-600">{address}</p>
                    <a href={`mailto:info@${logo.replace(/\s+/g, '').toLowerCase()}.com`} className="text-amber-600 hover:underline">
                        info@{logo.replace(/\s+/g, '').toLowerCase()}.com
                    </a>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="max-w-screen-lg mx-auto flex justify-center sm:justify-between py-5 px-6">
                <span className="text-gray-600 text-sm">© {new Date().getFullYear()} {logo}. All rights reserved.</span>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-amber-600" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} className="text-gray-500 text-xl" />
                    </a>
                    <a href="#" className="hover:text-amber-600" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} className="text-gray-500 text-xl" />
                    </a>
                    <a href="#" className="hover:text-amber-600" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="text-gray-500 text-xl" />
                    </a>
                    <a href="#" className="hover:text-amber-600" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


