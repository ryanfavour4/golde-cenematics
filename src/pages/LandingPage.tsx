import Groove from "@layouts/groove/Groove";
import HeroSection from "@layouts/hero-section/HeroSection";
import StartJourney from "@layouts/journey/Startjourney";
import Marketplace from "@layouts/market-section/MarketSection";
import Navbar from "@layouts/navbar/Navbar";
import ScreeningProcess from "@layouts/screeningprocess/ScreeningProcess";
import WhyChooseZwilt from "@layouts/WhyChooseZwilt/WhyChooseZwilt";

export default function LandingPage() {
    return (
        <div>
            <div className="bg-light text-dark w-full pb-6">
                {/* Hero */}
                <div className="wrapper md:w-4/5 w-full">
                    <Navbar />
                    <HeroSection/>
                </div>
                {/* Marketplace */}
                <div className="market-section-bg">
                    <Marketplace/>
                </div>
                {/* {groove} */}
               <div className="groove-bg">
               <Groove/>
               </div>
               <ScreeningProcess/>
               <StartJourney/>
               <WhyChooseZwilt/>
            </div>
        </div>
    );
}
