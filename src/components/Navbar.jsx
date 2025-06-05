import { useState } from "react";
import { Menu, X } from "lucide-react";
import React from 'react';
import logo from "../assets/logo.jpeg";
import { navItems } from '../constants';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-0 bg-darkBlueBlack backdrop-blur-lg">
            <div className="container px-44 mx-auto relative text-base">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-24 w-24 mr-8" src={logo} alt="logo" />
                        <span className="text-2xl tracking-tight">
                            TL-TRANS OÜ
                        </span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.href} 
                                    className="text-white hover:text-blue-600 transform hover:scale-120 transition-transform duration-300"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:hidden md:flex flex-row justify-end ml-auto">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-darkBlueBlack w-full p-12 flex flex-col justify-right items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a 
                                        href={item.href} 
                                        className="text-white hover:text-blue-600 transform hover:scale-120 transition-transform duration-300"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
