'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGoogle,
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faYoutube,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';

import {
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { CldImage } from 'next-cloudinary';

const Footer = ({ logo, address }) => {
    return (
        <footer className="bg-gray-100 mt-5 text-gray-800">
            <div className="max-w-screen-lg mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-10 border-b">
                {/* Logo & About Section */}
                <div className="text-center sm:text-left">
                    <CldImage
                        src={"logo_kydxp2"}
                        width={100}
                        height={120}
                        className='mx-auto sm:mx-0'
                    />
                    {/* <h3 className="font-bold text-2xl text-amber-600">{logo}</h3> */}
                    <p className="text-gray-500 text-sm mt-3">
                        Javed Studio is a professional photography and videography service specializing in weddings, events, and special occasions.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="text-center sm:text-right">
                    <h4 className="text-sm font-bold text-amber-600 uppercase">Contact Us</h4>
                    <p className="text-gray-600">{address}</p>
                    <a href={`mailto:info@${logo.replace(/\s+/g, '').toLowerCase()}.com`} className="text-amber-600 hover:underline">
                        info@{logo.replace(/\s+/g, '').toLowerCase()}.com


                    </a><br />
                    +92 (300) 7784807
                </div>
            </div>

            {/* Social Media Links */}
            <div className="max-w-screen-lg mx-auto flex flex-wrap  justify-center sm:justify-between my-5 px-6">
                <span className="text-gray-600 text-sm sm:text-xs sm:mb-15">© {new Date().getFullYear()} {logo}. All rights reserved.</span>
                <div className="flex items-center gap-4 flex-wrap text-sm my-0">
                    <a href="https://g.co/kgs/6uTawj9" className="hover:text-amber-600" aria-label="Google">
                        <FontAwesomeIcon icon={faGoogle} className="text-gray-500 hover:text-amber-600 text-lg" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61564252206804" className="hover:text-amber-600" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="text-gray-500 hover:text-amber-600 text-lg" />
                    </a>
                    <a href="https://www.instagram.com/javedstudio751/" className="hover:text-amber-600" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="text-gray-500 hover:text-amber-600 text-lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/javed-iqbal-24b610323/" className="hover:text-amber-600" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-500 hover:text-amber-600 text-lg" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCQl2fpUV6Eq0Wv2OgkEQ_AA" className="hover:text-amber-600" aria-label="YouTube">
                        <FontAwesomeIcon icon={faYoutube} className="text-gray-500 hover:text-amber-600 text-lg" />
                    </a>
                    <a href="https://tiktok.com" className="hover:text-amber-600" aria-label="TikTok">
                        <FontAwesomeIcon icon={faTiktok} className="text-gray-500 hover:text-amber-600 text-lg" />
                    </a>
                    <a href="mailto:info@javedstudio.com" className="hover:text-amber-600" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 hover:text-amber-600 text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


