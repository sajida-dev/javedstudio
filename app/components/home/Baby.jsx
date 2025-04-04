// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faTwitter,
//     faFacebook,
//     faInstagram,
//     faLinkedin,
// } from '@fortawesome/free-brands-svg-icons';

// const PhotographyTemplate = () => {
//     return (
//         <div className="min-h-screen bg-black text-white font-sans">
//             {/* Navigation */}
//             <nav className="bg-black shadow-xl flex flex-row items-center p-4 w-full">
//                 {/* Logo & first list */}
//                 <ul className="flex">
//                     <li>
//                         <a href="#" className="flex items-center">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 43 13"
//                                 className="w-24"
//                             >
//                                 <g fill="none" fillRule="evenodd">
//                                     <path
//                                         d="M1.349 11.509h6.183V1.561H1.349v9.948ZM.097 12.763h8.694V.306H.097v12.457Z"
//                                         fill="#FDD31E"
//                                     />
//                                     <path
//                                         d="M14.565 5.895h-.538c-.706-.998-1.407-1.989-2.107-3.11h-.005v3.11h-.594V1.559h.538c.706.991 1.406 1.975 2.099 3.09h.013v-3.09h.594v4.336M16.262 1.559l-1.498 4.336h.644l.377-1.184h1.308l.34 1.184h.831l-1.382-4.336h-.62Zm-.284 2.619c.173-.569.346-1.096.501-1.765h.013c.173.669.328 1.196.489 1.765h-1.003ZM18.963 5.895V2.14h-1.14v-.581h3.023v.581h-1.14v3.755h-.743M21.087 5.895h.738V1.559h-.738zM24.117 5.968c1.133 0 1.839-1.009 1.839-2.304 0-1.214-.78-2.18-1.839-2.18s-1.842.966-1.842 2.18c0 1.295.707 2.304 1.842 2.304Zm0-.619c-.776 0-1.048-.855-1.048-1.685 0-.799.31-1.561 1.048-1.561.736 0 1.045.762 1.045 1.561 0 .83-.272 1.685-1.045 1.685ZM29.654 5.895h-.539c-.707-.998-1.407-1.989-2.106-3.11h-.007v3.11h-.593V1.559h.538c.706.991 1.406 1.975 2.098 3.09h.013v-3.09h.596v4.336M31.351 1.559l-1.499 4.336h.645l.377-1.184h1.307l.341 1.184h.83L31.97 1.559h-.619Zm-.285 2.619c.174-.569.346-1.096.502-1.765h.012c.174.669.328 1.196.489 1.765h-1.003ZM33.567 1.559h.739v3.753h1.467v.583h-2.206V1.559M14.108 9.521v1.791c-.397.154-.812.265-1.232.265-1.276 0-2.082-.991-2.082-2.267 0-1.183.806-2.218 2.106-2.218.402 0 .805.15 1.053.335l-.242.515c-.198-.123-.508-.229-.793-.229-.792 0-1.331.626-1.331 1.611 0 1.027.62 1.634 1.257 1.634.198 0 .366-.024.522-.105V9.521h.742M16.766 7.751h-1.24v1.188h1.214v.582h-1.214v1.4h1.462v.583M19.058 11.577c1.133 0 1.839-1.009 1.839-2.304 0-1.214-.781-2.181-1.839-2.181-1.06 0-1.84.967-1.84 2.181 0 1.295.705 2.304 1.84 2.304Zm0-.619c-.775 0-1.048-.854-1.048-1.685 0-.798.31-1.56 1.048-1.56.736 0 1.045.762 1.045 1.56 0 .831-.273 1.685-1.045 1.685ZM24.464 9.521v1.791c-.397.154-.811.265-1.233.265-1.275 0-2.081-.991-2.081-2.267 0-1.183.806-2.218 2.107-2.218.402 0 .804.15 1.052.335l-.242.515c-.198-.123-.506-.229-.792-.229-.794 0-1.332.626-1.332 1.611 0 1.027.62 1.634 1.258 1.634.199 0 .365-.024.52-.105V9.521h.743M27.773 11.504l-.875-1.796c.477-.253.751-.769.751-1.289 0-.843-.516-1.252-1.346-1.252h-1.158v4.337h.745V9.868h.334l.699 1.636h.85ZM25.89 7.751h.328c.438 0 .687.253.687.699 0 .582-.353.842-.706.86-.075.008-.249.014-.309.019V7.751ZM29.283 7.167l-1.499 4.337h.644l.378-1.184h1.308l.338 1.184h.832l-1.382-4.337h-.619Zm-.284 2.621c.172-.571.345-1.097.501-1.766h.013c.173.669.327 1.195.489 1.766h-1.003ZM32.573 9.31c-.077.007-.259.013-.311.018V7.751h.334c.434 0 .682.253.682.699 0 .582-.352.842-.705.86Zm.104-2.143h-1.158v4.337h.743V9.868h.334c.886 0 1.426-.718 1.426-1.449 0-.843-.515-1.252-1.345-1.252ZM37.465 11.504h-.743V9.417h-1.543v2.087h-.736V7.167h.736v1.667h1.543V7.18h.743v4.324M38.177 11.503h.739V7.167h-.739zM42.259 7.955c-.18-.112-.476-.242-.762-.242-.757 0-1.306.626-1.306 1.611 0 1.027.606 1.634 1.325 1.634.285 0 .551-.093.743-.217l.205.539c-.224.155-.62.297-.978.297-1.276 0-2.082-.991-2.082-2.267 0-1.183.798-2.218 2.093-2.218.385 0 .743.163.998.335l-.236.528"
//                                         fill="#FFFFFE"
//                                     />
//                                 </g>
//                             </svg>
//                         </a>
//                     </li>
//                 </ul>
//                 {/* Navigation Links */}
//                 <ul className="flex items-center justify-center gap-4 w-full">
//                     <li>
//                         <a href="#" className="hover:text-yellow-500 text-base">
//                             Magazine
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:text-yellow-500 text-base">
//                             TV
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:text-yellow-500 text-base">
//                             Podcasts
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className="cta border border-transparent text-yellow-400 px-4 py-2 relative overflow-hidden hover:border-yellow-500 hover:text-black transition-colors duration-300"
//                         >
//                             Subscribe
//                         </a>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Main Section */}
//             <section className="flex flex-col flex-wrap overflow-hidden">
//                 <article className="relative w-full grid grid-cols-1 grid-rows-[100vh]">
//                     {/* Panels (Photography Services) */}
//                     <ul className="panels grid grid-cols-1 sm:grid-cols-2 gap-4 z-20">
//                         {/* Panel 1: Couple Photography */}
//                         <li className="panel relative overflow-hidden group">
//                             <a
//                                 href="#"
//                                 className="absolute inset-0 flex justify-center items-start pt-8 text-5xl font-bold"
//                             >
//                                 Couple Photography
//                             </a>
//                             <div className="relative h-full w-full">
//                                 <Image
//                                     src="/img/team/1.jpg"
//                                     alt="Couple Photography"
//                                     fill
//                                     style={{ objectFit: "cover" }}
//                                     className="brightness-50 group-hover:brightness-100 transition duration-500"
//                                 />
//                             </div>
//                             <span className="absolute inset-0 flex justify-evenly items-center opacity-0 group-hover:opacity-100 transition duration-500"></span>
//                         </li>
//                         {/* Panel 2: Product Photography */}
//                         <li className="panel relative overflow-hidden group">
//                             <a
//                                 href="#"
//                                 className="absolute inset-0 flex justify-center items-start pt-8 text-5xl font-bold"
//                             >
//                                 Product Photography
//                             </a>
//                             <div className="relative h-full w-full">
//                                 <Image
//                                     src="/img/team/4.jpg"
//                                     alt="Product Photography"
//                                     fill
//                                     style={{ objectFit: "cover" }}
//                                     className="brightness-50 group-hover:brightness-100 transition duration-500"
//                                 />
//                             </div>
//                             <span className="absolute inset-0 flex justify-evenly items-center opacity-0 group-hover:opacity-100 transition duration-500"></span>
//                         </li>
//                         {/* Panel 3: Corporate Photography */}
//                         <li className="panel relative overflow-hidden group">
//                             <a
//                                 href="#"
//                                 className="absolute inset-0 flex justify-center items-start pt-8 text-5xl font-bold"
//                             >
//                                 Corporate Photography
//                             </a>
//                             <div className="relative h-full w-full">
//                                 <Image
//                                     src="/img/team/3.jpg"
//                                     alt="Corporate Photography"
//                                     fill
//                                     style={{ objectFit: "cover" }}
//                                     className="brightness-50 group-hover:brightness-100 transition duration-500"
//                                 />
//                             </div>
//                             <span className="absolute inset-0 flex justify-evenly items-center opacity-0 group-hover:opacity-100 transition duration-500"></span>
//                         </li>
//                         {/* Panel 4: Wedding Photography */}
//                         <li className="panel relative overflow-hidden group">
//                             <a
//                                 href="#"
//                                 className="absolute inset-0 flex justify-center items-start pt-8 text-5xl font-bold"
//                             >
//                                 Wedding Photography
//                             </a>
//                             <div className="relative h-full w-full">
//                                 <Image
//                                     src="/img/team/2.jpg"
//                                     alt="Wedding Photography"
//                                     fill
//                                     style={{ objectFit: "cover" }}
//                                     className="brightness-50 group-hover:brightness-100 transition duration-500"
//                                 />
//                             </div>
//                             <span className="absolute inset-0 flex justify-evenly items-center opacity-0 group-hover:opacity-100 transition duration-500"></span>
//                         </li>
//                     </ul>
//                     {/* Animated "EXPLORE" Heading */}
//                     <h1 className="mt-24 flex justify-center">
//                         {["E", "X", "P", "L", "O", "R", "E"].map((letter, index) => (
//                             <span
//                                 key={index}
//                                 className="gradient-text letter text-6xl font-bold opacity-0 animate-bounceInFwd"
//                                 style={{ animationDelay: `${2.25 + index * 0.35}s` }}
//                             >
//                                 {letter}
//                             </span>
//                         ))}
//                     </h1>
//                     {/* Geo-Square Element */}
//                     <span className="geo-square flex justify-center items-center mx-auto mt-16 opacity-0">
//                         <Image
//                             src="/img/team/1.jpg"
//                             width={600}
//                             height={800}
//                             alt="Couple"
//                             style={{ objectFit: "cover" }}
//                         />
//                     </span>
//                 </article>
//             </section>

//             {/* Global Custom CSS for animations and variables */}
//             <style jsx global>{`
//         :root {
//           --yellow: #ffd51c;
//           --light-yellow: rgba(255, 209, 98, 0.6);
//         }
//         .gradient-text {
//           background-image: linear-gradient(
//             to bottom,
//             var(--yellow),
//             var(--light-yellow)
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         @keyframes bounceInFwd {
//           0% {
//             transform: scale(0);
//             opacity: 0;
//           }
//           38% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           55% {
//             transform: scale(0.7);
//           }
//           72% {
//             transform: scale(1);
//           }
//           81% {
//             transform: scale(0.84);
//           }
//           89% {
//             transform: scale(1);
//           }
//           95% {
//             transform: scale(0.95);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }
//         .animate-bounceInFwd {
//           animation: bounceInFwd 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//         }
//       `}</style>
//         </div>
//     );
// };

// export default PhotographyTemplate;



'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ExplorePanel() {
    const [activeIndex, setActiveIndex] = useState(null);

    const panels = [
        { id: 1, image: '/img/team/1.jpg', text: 'Adventure' },
        { id: 2, image: '/img/team/2.jpg', text: 'Nature' },
        { id: 3, image: '/img/team/3.jpg', text: 'City Life' },
        { id: 4, image: '/img/team/4.jpg', text: 'Oceans' },
        { id: 5, image: '/img/team/1.jpg', text: 'Mountains' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="absolute top-10 text-white text-4xl font-bold">EXPLORE</div>
            <div className="flex gap-4 max-w-6xl">
                {panels.map((panel, index) => (
                    <div
                        key={panel.id}
                        className={`relative h-[500px] flex-1 cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ease-in-out shadow-lg 
              ${activeIndex === index ? 'flex-[5]' : 'flex-[1.2]'} 
              hover:flex-[5]`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <Image
                            src={panel.image}
                            alt={panel.text}
                            // layout="fill"
                            // objectFit="cover"
                            fill
                            className="absolute inset-0 w-full h-full"
                        />
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-md text-lg font-semibold">
                            {panel.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
