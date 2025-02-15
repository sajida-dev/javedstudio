"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = ({ title, button }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleOutsideClick = (event) => {
        if (!event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
                    </Link>

                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <ul className="flex space-x-6 text-gray-900 dark:text-white">
                            <li><Link href="/" className="hover:text-blue-700 dark:hover:text-blue-500">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-700 dark:hover:text-blue-500">About</Link></li>
                            <li><Link href="/services" className="hover:text-blue-700 dark:hover:text-blue-500">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-700 dark:hover:text-blue-500">Contact</Link></li>
                        </ul>
                        <button className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{button}</button>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 menu-button"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800 mobile-menu">
                        <ul className="flex flex-col p-4 space-y-2">
                            <li><Link href="/" className="block py-2 px-3 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home</Link></li>
                            <li><Link href="about" className="block py-2 px-3 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About</Link></li>
                            <li><Link href="services" className="block py-2 px-3 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Services</Link></li>
                            <li><Link href="contact" className="block py-2 px-3 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact</Link></li>
                            <li>
                                <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{button}</button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            <div className="pt-16"></div>
        </>
    );
};

export default Navbar;
