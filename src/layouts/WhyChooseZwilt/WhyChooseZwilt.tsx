import React from 'react';
import image1 from "@image/Frame 1606.png";
import image2 from "@image/Frame 1691.png";
import explore from "@image/explor.png";

export default function WhyChooseZwilt() {
  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">Why choose Zwilt?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We take complex hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool.
          </p>
        </div>

        {/* Right Column */}
        <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-4">Onboard without the risk.</h2>
          <ul className="text-lg text-gray-600 mb-8 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>We pick the best for you to select.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Thousands of vetted candidates in dozens of categories.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Risk-free resource swapping for the best fit.</span>
            </li>
          </ul>
          <div className="flex items-center mb-8">
            <button className="flex items-center text-black px-4 py-2 rounded-md bg-transparent">
              <img src={explore} alt="Learn More" className="h-6 w-6 mr-2" />
              Learn More
            </button>
          </div>
          <div className="absolute top-0 right-0 mt-8 mr-8">
            <img src={image1} alt="Image 1" className="rounded-lg shadow-md w-36 h-auto mb-4" />
            <img src={image2} alt="Image 2" className="rounded-lg shadow-md w-36 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
