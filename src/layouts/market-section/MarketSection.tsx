import shopify from "@image/Frame 626618.png";
import magnito from "@image/Frame 626619.png";
import datascience from "@image/Frame 626620.png";
import webflow from "@image/Frame 626621.png";
import dotnet from "@image/Frame 626622.png";
import other from "@image/Frame 626623.png";

export default function Marketplace() {
    return (
        <main className="flex flex-col items-center mt-16 px-4 text-center">
            <h1 className="text-6xl font-bold mb-4 pt-32">
                <span className="block mb-4">
                    Your one-stop marketplace for finding
                </span>
                <span className="block">
                    the talent your business needs.
                </span>
            </h1>
            <div className="flex flex-col items-center mt-16 px-4 text-center  py-12 w-full">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-start">
                    {/* Left Section */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 text-left md:mr-auto">
                        <h1 className="text-3xl font-semibold mb-4">
                            Find Dev and IT professionals to scale your business.
                        </h1>
                        <div className="text-purple-600 space-y-4">
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0v2m0 4v2m0-6a2 2 0 100 4 2 2 0 000-4zm-6 2a6 6 0 1112 0A6 6 0 016 12z" />
                                    </svg>
                                    <span>989 Skills</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m1 6v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m16 0H4m1-6v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2a2 2 0 012-2h1a2 2 0 012 2v2m14-2v2a2 2 0 002 2h1a2 2 0 002-2v-2a2 2 0 00-2-2h-1a2 2 0 00-2 2zM7 9h2m4 0h2m4 0h2M5 6h14" />
                                    </svg>
                                    <span>45 Sub-Categories</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 01-8 0 4 4 0 018 0zm-4 4a4 4 0 00-4 4v4h8v-4a4 4 0 00-4-4z" />
                                </svg>
                                <span>1011 Profiles</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-md shadow-md md:ml-auto">
                        <h2 className="text-lg font-semibold mb-4">IT & Development</h2>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                            <div className="text-center">
                                <img src={shopify} alt="Shopify Developer" className="mx-auto mb-2" />
                                <span>Shopify Developer</span>
                            </div>
                            <div className="text-center">
                                <img src={magnito} alt="Magento Developer" className="mx-auto mb-2" />
                                <span>Magento Developer</span>
                            </div>
                            <div className="text-center">
                                <img src={datascience} alt="Data Scientist" className="mx-auto mb-2" />
                                <span>Data Scientist</span>
                            </div>
                            <div className="text-center">
                                <img src={webflow} alt="Webflow Developer" className="mx-auto mb-2" />
                                <span>Webflow Developer</span>
                            </div>
                            <div className="text-center">
                                <img src={dotnet} alt="Dot Net Developer" className="mx-auto mb-2" />
                                <span>Dot Net Developer</span>
                            </div>
                            <div className="text-center">
                                <img src={other} alt="Other Developer" className="mx-auto mb-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
