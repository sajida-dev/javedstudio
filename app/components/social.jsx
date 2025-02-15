"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link'
const SocialIcons = () => {
  return (
    <div className="flex space-x-4 text-3xl">
      <Link href="https://www.instagram.com/javedstudio751/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700 transition duration-300" />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=61564252206804" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 transition duration-300" />
      </Link>
      <Link href="https://www.linkedin.com/in/muhammed-ahmed-865807317/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 hover:text-blue-700 transition duration-300" />
      </Link>
      <Link href="https://www.youtube.com/channel/UCQl2fpUV6Eq0Wv2OgkEQ_AA" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="text-red-600 hover:text-red-800 transition duration-300" />
      </Link>
    </div>
  );
};

export default SocialIcons;
