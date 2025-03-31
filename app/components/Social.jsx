'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';

const socialLinks = [
    { id: 1, icon: faFacebookF, name: 'Facebook', url: 'https://facebook.com', color: 'hover:bg-[#4267B2]' },
    { id: 2, icon: faTwitter, name: 'Twitter', url: 'https://twitter.com', color: 'hover:bg-[#1DA1F2]' },
    { id: 3, icon: faInstagram, name: 'Instagram', url: 'https://instagram.com', color: 'hover:bg-[#E1306C]' },
    { id: 4, icon: faGithub, name: 'Github', url: 'https://github.com', color: 'hover:bg-[#333]' },
    { id: 5, icon: faYoutube, name: 'YouTube', url: 'https://youtube.com', color: 'hover:bg-[#ff0000]' },
];

const SocialMediaSection = () => {
    return (
        <>
            <Head>
                <title>Connect with Us | Javed Studio</title>
                <meta name="description" content="Follow Javed Studio on social media for the latest photography and videography updates." />
            </Head>

            <div className="flex justify-center items-center gap-4 py-10 ">
                {socialLinks.map(({ id, icon, name, url, color }) => (
                    <a
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-center justify-start w-[60px] h-[60px] overflow-hidden bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:w-[180px] ${color}`}
                    >
                        <div className="flex items-center justify-center w-[60px] h-[60px] transition-all duration-300 ease-in-out group-hover:rounded-l-full group-hover:rounded-r-none">
                            <FontAwesomeIcon icon={icon} className="text-black group-hover:text-white text-2xl" />
                        </div>
                        <span className="absolute left-16 opacity-0 transition-all duration-300 group-hover:opacity-100 text-white text-lg font-medium">{name}</span>
                    </a>
                ))}
            </div>
        </>
    );
};

export default SocialMediaSection;
