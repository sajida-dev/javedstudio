"use client";

import React, { useState } from "react";

const Navbar = ({ title, button }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo & Title */}
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">{title}</span>
                    </a>

                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <ul className="flex space-x-6 text-gray-900">
                            <li><a href="#" className="hover:text-blue-700">Home</a></li>
                            <li><a href="#" className="hover:text-blue-700">About</a></li>
                            <li><a href="#" className="hover:text-blue-700">Services</a></li>
                            <li><a href="#" className="hover:text-blue-700">Contact</a></li>
                        </ul>
                        <button className="ml-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">{button}</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Items */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                        <ul className="flex flex-col p-4 space-y-2">
                            <li><a href="#" className="block py-2 px-3 hover:bg-gray-100">Home</a></li>
                            <li><a href="#" className="block py-2 px-3 hover:bg-gray-100">About</a></li>
                            <li><a href="#" className="block py-2 px-3 hover:bg-gray-100">Services</a></li>
                            <li><a href="#" className="block py-2 px-3 hover:bg-gray-100">Contact</a></li>
                            <li>
                                <button className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">{button}</button>
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
