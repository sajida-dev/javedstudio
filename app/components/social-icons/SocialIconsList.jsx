'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';
import socialLinks from './data';

const SocialMediaSection = () => {
    return (
        <>
            <Head>
                <title>Connect with Us | Javed Studio</title>
                <meta name="description" content="Follow Javed Studio on social media for the latest photography and videography updates." />
            </Head>

            <div className="flex justify-center items-center gap-1 py-10 lg:gap-4">
                {socialLinks.map(({ id, icon, name, url, color }) => (
                    <a
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-center flex-wrap justify-start w-[40px] h-[40px]  lg:w-[60px] lg:h-[60px] overflow-hidden bg-white border border-amber-400 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:w-[180px] ${color}`}
                    >
                        <div className="flex items-center flex-wrap justify-center w-[40px] h-[40px]  lg:w-[60px] lg:h-[60px] transition-all duration-300 ease-in-out group-hover:rounded-l-full group-hover:rounded-r-none">

                            <FontAwesomeIcon icon={icon} className="text-amber-500 group-hover:text-white lg:text-2xl sm:text-sm" />
                        </div>
                        <span className="absolute left-16 opacity-0 transition-all duration-300 group-hover:opacity-100 text-white text-lg font-medium">{name}</span>
                    </a>
                ))}
            </div>
        </>
    );
};

export default SocialMediaSection;
