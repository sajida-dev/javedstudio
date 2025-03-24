'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ menu, themeColor = "blue" }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold leading-none">
                    <svg className="h-10" viewBox="0 0 10240 10240" aria-label="logo">
                        <path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 c-2 -207..." />
                    </svg>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden flex items-center p-3 text-${themeColor}-600`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">
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
                                        className={`text-sm font-semibold ${pathname.startsWith(href) ? `text-${themeColor}-600` : "text-gray-500 hover:text-gray-700"
                                            } flex items-center`}
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                    >
                                        {label}
                                        <svg
                                            className="ml-1 w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <ul
                                        className={`absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${servicesOpen ? "opacity-100" : ""
                                            }`}
                                    >
                                        {submenu.map(({ label, href }) => (
                                            <li key={href}>
                                                <Link
                                                    href={href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link
                                    href={href}
                                    className={`text-sm font-semibold ${pathname === href ? `text-${themeColor}-600` : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    {label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Auth Buttons */}
                <div className="hidden lg:flex space-x-3">
                    <Link href="/sign-in" className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200">
                        Sign In
                    </Link>
                    <Link href="/sign-up" className={`py-2 px-6 bg-${themeColor}-500 hover:bg-${themeColor}-600 text-sm text-white font-bold rounded-xl transition duration-200`}>
                        Sign Up
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-25 ${menuOpen ? "block" : "hidden"}`} onClick={() => setMenuOpen(false)}>
                <nav className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link href="/" className="mr-auto text-3xl font-bold leading-none">
                            <svg className="h-12" viewBox="0 0 10240 10240" aria-label="logo">
                                <path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 c-2 -207..." />
                            </svg>
                        </Link>
                        <button onClick={() => setMenuOpen(false)}>
                            <svg className="h-6 w-6 text-gray-400 hover:text-gray-500" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <ul>
                        {menu?.map(({ label, href, submenu }) => (
                            <li key={href} className="mb-1">
                                {submenu ? (
                                    <details className="group">
                                        <summary className="block p-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100">
                                            {label}
                                        </summary>
                                        <ul className="ml-4">
                                            {submenu.map(({ label, href }) => (
                                                <li key={href}>
                                                    <Link
                                                        href={href}
                                                        className="block p-2 text-sm text-gray-600 hover:bg-gray-100"
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    <Link
                                        href={href}
                                        className="block p-4 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Auth Buttons */}
                    <div className="mt-auto pt-6">
                        <Link href="/sign-in" className="block px-4 py-3 mb-3 text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl">
                            Sign In
                        </Link>
                        <Link href="/sign-up" className={`block px-4 py-3 mb-2 text-xs text-center text-white font-semibold bg-${themeColor}-600 hover:bg-${themeColor}-700 rounded-xl`}>
                            Sign Up
                        </Link>
                    </div>

                    <p className="my-4 text-xs text-center text-gray-400">© 2025 Company Name</p>
                </nav>
            </div>
        </>
    );
};

export default Header;
