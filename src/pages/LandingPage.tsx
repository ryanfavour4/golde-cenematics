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
                    <HeroSection/>
                </div>
                {/* <div className="slanted-lines-container w-full h-48 mt-8"></div> */}
                {/* Marketplace */}
                <div className="market-section-bg">
                    <Marketplace/>
                </div>
            </div>
        </div>
    );
}
