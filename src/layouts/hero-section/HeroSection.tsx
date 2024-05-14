import React, { useState } from 'react';
import person from "@image/zwilt-tba-1-01 2.png";
import inputbuttonimg from "@image/Frame 626624.png";

export default function HeroSection() {
    const [inputValue, setInputValue] = useState('');

    return (
        <main className="flex flex-col items-center mt-16 px-4 pt-10 text-center">
            <h1 className="text-7xl font-bold mb-4">
                <span className="flex items-center">
                    Finding the right fit
                    <img src={person} alt="Logo" className="h-20 mx-2" />
                    has
                </span>
                <span className="block">
                    never been easier.
                </span>
            </h1>
            <p className="text-lg mb-8">
                With our rigorous pre-vetting process, you'll never have to
                <span className="block"> worry about finding the ideal candidate ever again.</span>
            </p>
            <div className="flex items-center mb-8 relative w-full max-w-md">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border-2 border-gray-300 rounded-l-md px-4 py-4 w-full pl-16"
                />
                {!inputValue && (
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                        <span className="text-black font-bold">Looking for</span> design |
                    </span>
                )}
                <button className="bg-yellow-500 px-4 py-2 rounded-r-md absolute right-0 h-full">
                    <img src={inputbuttonimg} alt="Search" className="h-full w-auto" />
                </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md w-full max-w-4xl">
                <div className="flex justify-center space-x-4 mb-8">
                    <button className="bg-green-200 text-black font-bold px-6 py-2 rounded-md">
                        IT & Development
                    </button>
                    <button className="bg-gray-200 text-black px-6 py-2 rounded-md">
                        Design and Creative
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Python Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Shopify Developer</p>
                        <p className="font-bold text-black hover:text-black cursor-pointer">MERN Stack Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Full Stack Developer</p>
                    </div>
                    <div>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Data Scientist</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Front End Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Shopify Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Python Developer</p>
                    </div>
                    <div>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Shopify Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Python Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Full Stack Developer</p>
                        <p className="font-bold text-black hover:text-black cursor-pointer">Explore More</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
