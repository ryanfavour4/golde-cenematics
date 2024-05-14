import HeroSection from "@layouts/hero-section/HeroSection";
import Marketplace from "@layouts/market-section/MarketSection";
import Navbar from "@layouts/navbar/Navbar";

export default function LandingPage() {
    return (
        <div>
            <div className="bg-light text-dark w-full pb-6">
                {/* Hero */}
                <div className="wrapper md:w-4/5 w-full">
                    <Navbar />
                    <HeroSection />
                </div>
                {/* <div className="slanted-lines-container w-full h-48 mt-8"></div> */}
                {/* Marketplace */}
                <div className="market-section-bg">
                    <Marketplace />
                </div>
                {/* Our Story */}
                <div className="pt-52">
                    <div className="uppercase border border-primary bg-primary/10 w-fit py-2 px-4 font-light text-xl m-auto">
                        <h3>Our Story</h3>
                    </div>

                    <h1 className="text-4xl md:text-8xl text-center uppercase mt-7 mb-7">
                        Meet <span className="text-primary">John</span>
                    </h1>

                    <div className=""></div>
                </div>
            </div>
        </div>
    );
}
