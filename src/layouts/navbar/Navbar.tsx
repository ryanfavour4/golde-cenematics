import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "@image/Frame 55.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pt-10">
            <nav className="nav text-white py-4 px-6 flex justify-between items-center border-10 border-black rounded-lg bg-black z-50 sticky top-0">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 mr-2" />
                </div>
                <div className="hidden lg:flex space-x-4">
                    <Link to="/find-work" className="hover:text-black">Find Work</Link>
                    <Link to="/find-talent" className="hover:text-black">Find Talent</Link>
                    <Link to="/articles" className="hover:text-black">Articles</Link>
                    <Link to="/about-us" className="hover:text-black">About Us</Link>
                    <Link to="/contact-us" className="hover:text-black">Contact Us</Link>
                </div>
                <div className="hidden lg:flex space-x-4">
                    <button className="hover:text-black">Log In</button>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100 border-5 border-black">Join Now</button>
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="lg:hidden bg-white text-black border-2 border-black rounded-lg mt-2 px-4 py-2">
                    <Link to="/find-work" className="block py-2 hover:text-blue-600">Find Work</Link>
                    <Link to="/find-talent" className="block py-2 hover:text-blue-600">Find Talent</Link>
                    <Link to="/articles" className="block py-2 hover:text-blue-600">Articles</Link>
                    <Link to="/about-us" className="block py-2 hover:text-blue-600">About Us</Link>
                    <Link to="/contact-us" className="block py-2 hover:text-blue-600">Contact Us</Link>
                    <div className="flex flex-col space-y-2 mt-4">
                        <button className="block py-2 hover:text-blue-600 text-left">Log In</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-left">Join Now</button>
                    </div>
                </div>
            )}
        </div>
    );
}
