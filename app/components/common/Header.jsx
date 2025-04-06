// 'use client'
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { CldImage } from "next-cloudinary";

// const Header = ({ logo, menu }) => {

//     const [menuOpen, setMenuOpen] = useState(false);
//     const [active, setActive] = useState();
//     const [submenuOpen, setSubmenuOpen] = useState(null);

//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (!event.target.closest(".navbar-menu") && menuOpen) {
//                 setMenuOpen(false);
//             }
//         };
//         document.addEventListener("click", handleOutsideClick);
//         return () => document.removeEventListener("click", handleOutsideClick);
//     });

//     return (
//         <>
//             <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
//                 {/* Logo */}
//                 <Link href="/" className="text-3xl font-bold leading-none">
//                     <CldImage
//                         src={"logo_kydxp2"}
//                         width={100}
//                         height={120}
//                     />
//                 </Link>
//                 {/* Mobile Menu Button */}
//                 <button
//                     className="lg:hidden navbar-burger flex items-center text-amber-600 p-3"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">

//                         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//                     </svg>
//                 </button>

//                 {/* Desktop Menu */}
//                 <ul className="hidden lg:flex lg:items-center lg:space-x-6">
//                     {menu?.map(({ label, href, submenu }) => (

//                         <li key={href} className="relative group">
//                             {submenu ? (
//                                 <>
//                                     <button
//                                         className={`text-sm font-semibold ${active === href
//                                             ? "text-amber-600  border-amber-600"
//                                             : "text-gray-600 hover:text-gray-700"
//                                             } flex items-center`}
//                                         onClick={() => setActive(href)}
//                                     >
//                                         {label}
//                                         <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </button>
//                                     {/* Desktop Dropdown Menu */}
//                                     <ul className="absolute left-0 mt-2 w-48 z-10 bg-white  rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         {submenu.map(({ label, href }) => (
//                                             <li key={href}>
//                                                 <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                     {label}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </>
//                             ) : (
//                                 <Link
//                                     href={href}
//                                     className={`text-sm font-semibold ${active === href
//                                         ? "text-amber-500  border-amber-500"
//                                         : "text-gray-700 hover:text-amber-500"
//                                         }`}
//                                     onClick={() => setActive(href)}
//                                 >
//                                     {label}
//                                 </Link>
//                             )}
//                         </li>

//                     ))}
//                 </ul>

//                 {/* Buttons */}
//                 <div className="hidden lg:flex space-x-3">
//                     <Link href="#hire-now" className="py-2 px-6 bg-amber-500 hover:bg-amber-600 text-sm text-white font-bold rounded-xl transition duration-200">
//                         Hire Now
//                     </Link>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             <div className={`fixed inset-0 z-50 bg-gray-200 bg-opacity-10 ${menuOpen ? "block" : "hidden"}`} onClick={() => setMenuOpen(false)}>
//                 <nav className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm py-6 px-6 bg-white overflow-y-auto">
//                     <div className="flex items-center mb-8">
//                         <Link href="/" className="mr-auto text-3xl font-bold leading-none">

//                             <CldImage
//                                 src={"logo_kydxp2"}
//                                 width={100}
//                                 height={120}
//                             />

//                         </Link>
//                         <button className="navbar-close" onClick={() => setMenuOpen(false)}>
//                             <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Mobile Menu Links */}
//                     <ul>
//                         {menu?.map(({ label, href, submenu }) => (
//                             <li key={href} className="mb-1">
//                                 {submenu ? (
//                                     <>
//                                         <button
//                                             className=" w-full p-4 text-sm font-semibold text-gray-700  rounded flex justify-between items-center"
//                                             onClick={(e) => {
//                                                 e.stopPropagation();
//                                                 setSubmenuOpen(submenuOpen === href ? null : href)
//                                             }
//                                             }
//                                         >
//                                             {label}
//                                             <svg
//                                                 className={`w-4 h-4 transition-transform ${submenuOpen === href ? "rotate-180" : "rotate-0"
//                                                     }`}
//                                                 fill="none"
//                                                 stroke="currentColor"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                             </svg>
//                                         </button>
//                                         <ul className={`ml-4  rounded transition-all duration-300 ${submenuOpen === href ? "block" : "hidden"}`}>
//                                             {submenu.map(({ label, href }) => (
//                                                 <li key={href}>
//                                                     <Link href={href} className="block p-2 text-sm text-gray-600 hover:bg-gray-100">
//                                                         {label}
//                                                     </Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </>
//                                 ) : (
//                                     <Link href={href} className="block p-4 text-sm font-semibold text-gray-700 hover:bg-gray-100">
//                                         {label}
//                                     </Link>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>

//                     {/*  Buttons */}
//                     <div className="mt-auto pt-6">
//                         <Link href="#hire-now" className="block px-4 py-3 mb-2 text-xs text-center text-white font-semibold bg-amber-600 hover:bg-amber-700 rounded-xl">
//                             Hire Now
//                         </Link>
//                     </div>

//                     <p className="my-4 text-xs text-center text-gray-400">© {new Date().getFullYear()} {logo} </p>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default Header;




'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const Header = ({ logo, menu }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState();
    const [submenuOpen, setSubmenuOpen] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    // Close mobile menu on outside click
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".navbar-menu") && menuOpen) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [menuOpen]);

    // Add shadow when page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Sticky Navbar */}
            <nav
                className={`
          sticky top-0 z-50 w-full px-4 py-4 flex justify-between items-center bg-white transition-shadow duration-300
          ${scrolled ? "shadow-md" : ""}
        `}
            >
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold leading-none">
                    <CldImage src="logo_kydxp2" width={100} height={120} alt={logo} />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden navbar-burger flex items-center text-amber-600 p-3"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex lg:items-center lg:space-x-6">
                    {menu?.map(({ label, href, submenu }) => (
                        <li key={href} className="relative group">
                            {submenu ? (
                                <>
                                    <button
                                        className={`text-sm font-semibold flex items-center ${active === href
                                            ? "text-amber-600"
                                            : "text-gray-600 hover:text-gray-800"
                                            }`}
                                        onClick={() => setActive(href)}
                                    >
                                        {label}
                                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {submenu.map((s) => (
                                            <li key={s.href}>
                                                <Link href={s.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    {s.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link
                                    href={href}
                                    className={`text-sm font-semibold ${active === href
                                        ? "text-amber-600 "
                                        : "text-gray-700 hover:text-amber-600"
                                        }`}
                                    onClick={() => setActive(href)}
                                >
                                    {label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden lg:flex">
                    <Link
                        href="#hire-now"
                        className="py-2 px-6 bg-amber-500 hover:bg-amber-600 text-sm text-white font-bold rounded-xl transition"
                    >
                        Hire Now
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-20 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-sm z-50 bg-white overflow-y-auto transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="text-2xl font-bold">
                        <CldImage src="logo_kydxp2" width={100} height={120} alt={logo} />
                    </Link>
                    <button onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="p-4 space-y-1">
                    {menu?.map(({ label, href, submenu }) => (
                        <li key={href}>
                            {submenu ? (
                                <>
                                    <button
                                        className="w-full flex justify-between items-center p-3 text-left font-semibold text-gray-700 rounded hover:bg-gray-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSubmenuOpen(submenuOpen === href ? null : href);
                                        }}
                                    >
                                        {label}
                                        <svg
                                            className={`w-4 h-4 transition-transform ${submenuOpen === href ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <ul className={`pl-4 mt-1 space-y-1 ${submenuOpen === href ? "block" : "hidden"}`}>
                                        {submenu.map((s) => (
                                            <li key={s.href}>
                                                <Link href={s.href} className="block p-2 text-gray-600 hover:bg-gray-100 rounded">
                                                    {s.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link href={href} className="block p-3 text-gray-700 font-semibold hover:bg-gray-100 rounded">
                                    {label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="p-4 border-t">
                    <Link
                        href="#hire-now"
                        className="block w-full text-center py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition"
                    >
                        Hire Now
                    </Link>
                    <p className="mt-6 text-xs text-center text-gray-400">© {new Date().getFullYear()} {logo}</p>
                </div>
            </div>
        </>
    );
};

export default Header;
