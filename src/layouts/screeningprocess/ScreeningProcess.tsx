import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import play from "@image/play.png";
import play1 from "@image/play1.png";

export default function ScreeningProcess() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="relative py-16 px-4 pd-9 text-black slanted-bg" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 px-4">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-right">How we ensure you’re in good hands.</h2>
            <p className="text-lg text-gray-600" data-aos="fade-right" data-aos-delay="100">
              With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center" data-aos="fade-up">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center font-bold mr-4">
                <img src={play} alt="play icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-lg font-semibold">Step 1: Resume Screening</p>
              </div>
            </div>
            <div className="p-4 rounded-lg shadow-md flex items-center" data-aos="fade-up" data-aos-delay="100">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center font-bold mr-4">
                <img src={play1} alt="play1 icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-lg font-semibold">Step 2: Video Interview</p>
                <p className="text-gray-600 mt-2">
                  Candidates are assessed through skill-based questions in a virtual setting, allowing you to gauge personality and cultural fit.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center font-bold mr-4">
                <img src={play} alt="play icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-lg font-semibold">Step 3: Technical Evaluation</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center" data-aos="fade-up" data-aos-delay="300">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center font-bold mr-4">
                <img src={play} alt="play icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-lg font-semibold">Step 4: Application Review</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center" data-aos="fade-up" data-aos-delay="400">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center font-bold mr-4">
                <img src={play} alt="play icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-lg font-semibold">Step 5: Let’s get to work</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 px-4 mt-12 md:mt-0"></div>
      </div>
    </section>
  );
}
