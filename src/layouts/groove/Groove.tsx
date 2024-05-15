import grooveLogo from "@image/groove.png";
import person2 from "@image/Frame 136.png";
import groovetext from "@image/groovehq.png";
import arrowleft from "@image/arrowleft.png";
import arrowright from "@image/arrowright.png";

export default function Groove() {
  return (
    <section className="text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-16">
        <div>
          <h2 className="pl-3 sm:pl-4 text-4xl md:text-5xl font-bold mb-4 leading-tight">
            How it worked
            <br />
            for Jason
            <span className="pl-3 inline-block mx-2">
              <img src={person2} alt="person2" className="h-10 md:h-12 mb-1 inline-block align-middle" />
            </span>
            at
            <span className="text-purple-500 block hidden">groove</span>
            <span className="block mx-2">
              <img src={groovetext} alt="groove text" className="h-10 md:h-12 mb-1 inline-block align-middle" />
            </span>
          </h2>
          <p className="pl-3 text-lg mb-4 pt-5 text-gray-400 leading-relaxed">
            Zwilt enabled us to deliver on time and they've
            <br />
            been heavy hitters in our corner since.
          </p>
          <div className="pl-3 flex space-x-4 mt-4 pt-5">
            <button className="bg-white text-gray-900 p-2 rounded-full">
              <img src={arrowright} alt="Left Arrow" className="w-6 h-6" />
            </button>
            <button className="bg-white text-gray-900 p-2 rounded-full">
              <img src={arrowleft} alt="Right Arrow" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="p-6 rounded-lg flex flex-col items-start">
          <div className="flex items-start mb-4">
            <img src={grooveLogo} alt="Groove Logo" className="h-16 mr-4" />
            <div className="text-left">
              <h2 className="text-2xl md:text-4xl font-bold">Jason Makki</h2>
              <p className="text-sm text-gray-400">Engineer at GROOVE</p>
              <p className="text-sm text-gray-400">San Francisco</p>
            </div>
          </div>
          <p className="text-gray-400 mt-4 leading-relaxed text-left">
            Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.
            Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.
            Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.
          </p>
        </div>
      </div>
    </section>
  );
}
