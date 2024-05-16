import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import shopify from "@image/Frame 626618.png";
import magnito from "@image/Frame 626619.png";
import net from "@image/Frame 626.png";
import dotnet from "@image/Frame 626622.png";
import other from "@image/Frame 626623.png";
import buld from "@image/Frame 626618 (1).png";
import figma from "@image/Frame 626619 (1).png";
import ps from "@image/Frame 626620 (2).png";
import wordpess from "@image/Frame 626621 (2).png";
import ai from "@image/Frame 626621 (3).png";
import cude from "@image/Frame 626620 (1).png";
import explore from "@image/explor.png";

type IconKey = 'skills' | 'subcategories' | 'profiles';

interface SectionItem {
  icon?: IconKey;
  text: string;
  img?: string;
}

interface Section {
  left: {
    title: string;
    items: SectionItem[];
  };
  right: {
    title: string;
    items: SectionItem[];
  };
}

const sections: Section[] = [
  {
    left: {
      title: "Find Dev and IT professionals to scale your business.",
      items: [
        { icon: "skills", text: "989 Skills" },
        { icon: "subcategories", text: "45 Sub-Categories" },
        { icon: "profiles", text: "1011 Profiles" }
      ]
    },
    right: {
      title: "IT & Development",
      items: [
        { img: shopify, text: "Shopify Developer" },
        { img: figma, text: "Magento Developer" },
        { img: cude, text: "Data Scientist" },
        { img: wordpess, text: "Webflow Developer" },
        { img: net, text: "Dot Net Developer" },
        { img: other, text: "" }
      ]
    }
  },
  {
    left: {
      title: "Explore Creative individuals with a keen eye for detail.",
      items: [
        { icon: "skills", text: "989 Skills" },
        { icon: "subcategories", text: "45 Sub-Categories" },
        { icon: "profiles", text: "1011 Profiles" }
      ]
    },
    right: {
      title: "IT & Development",
      items: [
        { img: other, text: "" },
        { img: magnito, text: "Ux Designer" },
        { img: ps, text: "Graphic Designer" },
        { img: ai, text: "Illustration Artist" },
        { img: dotnet, text: "Unreal engine" },
        { img: buld, text: "cinema 4D" }
      ]
    }
  }
];

const icons: Record<IconKey, JSX.Element> = {
  skills: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0v2m0 4v2m0-6a2 2 0 100 4 2 2 0 000-4zm-6 2a6 6 0 1112 0A6 6 0 016 12z" />
    </svg>
  ),
  subcategories: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m1 6v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m16 0H4m1-6v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2a2 2 0 012-2h1a2 2 0 012 2v2m14-2v2a2 2 0 002 2h1a2 2 0 002-2v-2a2 2 0 00-2-2h-1a2 2 0 00-2 2zM7 9h2m4 0h2m4 0h2M5 6h14" />
    </svg>
  ),
  profiles: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 01-8 0 4 4 0 018 0zm-4 4a4 4 0 00-4 4v4h8v-4a4 4 0 00-4-4z" />
    </svg>
  )
};

export default function Marketplace() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);

  return (
    <main className="flex flex-col items-center mt-16 px-4 text-center" data-aos="fade-up">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 pt-32">
        <span className="block mb-4">
          Your one-stop marketplace for finding
        </span>
        <span className="block">
          the talent your business needs.
        </span>
      </h1>
      <div className="flex flex-col items-center mt-8 md:mt-16 px-2 md:px-4 text-center py-8 md:py-12 w-full">
        {sections.map((section, index) => (
          <div key={index} className="w-full max-w-7xl flex flex-col md:flex-row items-start mb-8 md:mb-16" data-aos="fade-up">
            {/* Left Section */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0 text-left md:mr-auto" data-aos="fade-right">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">{section.left.title}</h1>
              <div className="text-purple-600 space-y-2 md:space-y-4">
                <div className="flex items-center justify-between space-x-2 md:space-x-4">
                  {section.left.items.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-1 md:space-x-2">
                      {item.icon && icons[item.icon]}
                      <span className='indigo-text text-sm md:text-base'>{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  {section.left.items[2].icon && icons[section.left.items[2].icon]}
                  <span className="text-sm md:text-base">{section.left.items[2].text}</span>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full md:w-1/2 bg-white p-4 md:p-8 rounded-md shadow-md md:ml-auto" data-aos="fade-left">
              <h2 className="text-lg font-semibold mb-2 md:mb-4">{section.right.title}</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
                {section.right.items.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <img src={item.img} alt={item.text} className="mx-auto mb-1 md:mb-2" data-aos="zoom-in" />
                    <span className="text-sm md:text-xs">{item.text}</span> {/* Updated text size */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Explore More Section */}
        <div className="flex flex-col md:flex-row items-center w-full max-w-7xl px-2 md:px-4 mt-4 md:mt-8" data-aos="fade-up">
          <div className="flex items-center space-x-2 text-black p-2 rounded">
            <img src={explore} alt={"explore-button"} className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-1 md:mb-2" />
            <span className='text-sm md:text-xl'>Explore More</span>
          </div>
          <div className="text-right text-sm md:text-xl explore mt-2 md:mt-0 ">
            <span className="font-bold explore">30 more</span> to explore
          </div>
        </div>
      </div>
    </main>
  );
}
