import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faYoutube,
    faGoogle,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';

import {
    faEnvelope,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';


const socialLinks = [
    { id: 1, icon: faGoogle, name: 'Google', url: 'https://g.co/kgs/6uTawj9', color: 'hover:bg-[#DB4437] hover:border-white' },
    { id: 2, icon: faFacebookF, name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61564252206804&mibextid=ZbWKwL', color: 'hover:bg-[#4267B2] hover:border-white' },
    { id: 3, icon: faLinkedinIn, name: 'LinkedIn', url: 'https://www.linkedin.com/in/javed-iqbal-24b610323/', color: 'hover:bg-[#0A66C2] hover:border-white' },
    { id: 4, icon: faInstagram, name: 'Instagram', url: 'https://www.instagram.com/javedstudio751', color: 'hover:bg-[#E1306C] hover:border-white' },
    { id: 5, icon: faYoutube, name: 'YouTube', url: 'https://www.youtube.com/channel/UCQl2fpUV6Eq0Wv2OgkEQ_AA', color: 'hover:bg-[#FF0000] hover:border-white' },
    { id: 6, icon: faTiktok, name: 'TikTok', url: 'https://www.tiktok.com/@javedstudio807', color: 'hover:bg-gray-600 hover:border-white' },
    { id: 7, icon: faEnvelope, name: 'Email', url: 'mailto:info@javedstudio.com', color: 'hover:bg-[#EA4335] hover:border-white' },
];

export default socialLinks;