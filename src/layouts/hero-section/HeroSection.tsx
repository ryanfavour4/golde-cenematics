import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import person from "@image/zwilt-tba-1-01 2.png";
import inputbuttonimg from "@image/Frame 626624.png";

export default function HeroSection() {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out', 
        });
    }, []);

    return (
        <main className="flex flex-col items-center mt-8 md:mt-16 px-4 md:px-8 pt-8 md:pt-16 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4" data-aos="fade-up">
                <span className="flex flex-col md:flex-row items-center justify-center hero_head">
                    Finding the right fit
                    <img src={person} alt="Logo" className="h-12 sm:h-16 md:h-20 mx-2" data-aos="zoom-in" />
                    <span className="block md:inline" data-aos="fade-left hero_head">has</span>
                </span>
                <span className="block hero_head" data-aos="fade-up">
                    never been easier.
                </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8 px-2" data-aos="fade-up">
                With our rigorous pre-vetting process, you'll never have to
                <span className="block"> worry about finding the ideal candidate ever again.</span>
            </p>
            <div className="flex items-center mb-4 md:mb-8 relative w-full max-w-md" data-aos="fade-up">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border-2 border-gray-300 rounded-l-md px-4 py-2 md:py-4 w-full pl-12 md:pl-16"
                />
                {!inputValue && (
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-xs md:text-base">
                        <span className="text-black font-bold">Looking for</span> design |
                    </span>
                )}
                <button className="bg-yellow-500 px-4 py-2 md:px-6 rounded-r-md absolute right-0 h-full">
                    <img src={inputbuttonimg} alt="Search" className="h-full w-auto" />
                </button>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-md w-full max-w-4xl shadow-md" data-aos="fade-up">
                <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-8">
                    <button className="bg-green-200 text-black font-bold px-4 md:px-6 py-2 rounded-md text-xs md:text-base">
                        IT & Development
                    </button>
                    <button className="bg-gray-200 text-black px-4 md:px-6 py-2 rounded-md text-xs md:text-base">
                        Design and Creative
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="text-xs md:text-base" data-aos="fade-up">
                        <p className="text-gray-500 hover:text-black cursor-pointer">Python Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Shopify Developer</p>
                        <p className="font-bold text-black hover:text-black cursor-pointer">MERN Stack Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Full Stack Developer</p>
                    </div>
                    <div className="text-xs md:text-base" data-aos="fade-up" data-aos-delay="100">
                        <p className="text-gray-500 hover:text-black cursor-pointer">Data Scientist</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Front End Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Shopify Developer</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Python Developer</p>
                    </div>
                    <div className="text-xs md:text-base" data-aos="fade-up" data-aos-delay="200">
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
