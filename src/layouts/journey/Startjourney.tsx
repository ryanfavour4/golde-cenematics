import React from 'react';
import image1 from "@image/journey.png";
import image2 from "@image/journey1.png";
import image3 from "@image/journey2.png";
import explore from "@image/explor.png";

export default function StartJourney() {
  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">Start your journey today.</h2>
      </div>
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Step 1 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="absolute inset-0 bg-purple-50 transform -skew-y-2"></div>
          <div className="relative md:w-1/2 p-8 md:p-16 text-left">
            <div className="flex flex-col mb-4">
              <div className="flex items-center mb-4">
                <h3 className="text-6xl md:text-9xl font-bold text-purple-200 mr-4">1</h3>
                <h3 className="text-3xl md:text-5xl font-bold text-black">
                  Find your next<br /> star performer.
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Explore the vast Zwilt marketplace<br /> to find the candidate that meets your needs.
              </p>
            </div>
            <div className="flex items-center">
              <button className="flex items-center text-black px-4 py-2 rounded-md bg-transparent">
                Join Now
                <img src={explore} alt="Join Now" className="h-4 w-4 md:h-6 md:w-6 ml-2" />
              </button>
            </div>
          </div>
          <div className="relative md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img src={image1} alt="Step 1" className="rounded-lg shadow-md w-full md:w-3/4 h-auto" />
          </div>
        </div>
        {/* Step 2 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="absolute inset-0 bg-yellow-50 transform -skew-y-2"></div>
          <div className="relative md:w-1/2 p-8 md:p-16 text-left">
            <div className="flex flex-col mb-4">
              <div className="flex items-center mb-4">
                <h3 className="text-6xl md:text-9xl font-bold text-yellow-200 mr-4">2</h3>
                <h3 className="text-3xl md:text-5xl font-bold text-black">
                  Evaluate to your heart’s<br /> content.
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Assess the candidate through work history,<br /> transparent tests, and video interviews.
              </p>
            </div>
            <div className="flex items-center">
              <button className="flex items-center text-black px-4 py-2 rounded-md bg-transparent">
                Browse More
                <img src={explore} alt="Browse More" className="h-4 w-4 md:h-6 md:w-6 ml-2" />
              </button>
            </div>
          </div>
          <div className="relative md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img src={image2} alt="Step 2" className="rounded-lg shadow-md w-full md:w-3/4 h-auto" />
          </div>
        </div>
        {/* Step 3 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="absolute inset-0 bg-gray-50 transform -skew-y-2"></div>
          <div className="relative md:w-1/2 p-8 md:p-16 text-left">
            <div className="flex flex-col mb-4">
              <div className="flex items-center mb-4">
                <h3 className="text-6xl md:text-9xl font-bold text-gray-200 mr-4">3</h3>
                <h3 className="text-3xl md:text-5xl font-bold text-black">
                  Start building<br /> your team.
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Onboard your candidate right away<br /> and start creating the next big thing.
              </p>
            </div>
            <div className="flex items-center">
              <button className="flex items-center text-black px-4 py-2 rounded-md bg-transparent">
                Join Now
                <img src={explore} alt="Join Now" className="h-4 w-4 md:h-6 md:w-6 ml-2" />
              </button>
            </div>
          </div>
          <div className="relative md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img src={image3} alt="Step 3" className="rounded-lg shadow-md w-full md:w-3/4 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
