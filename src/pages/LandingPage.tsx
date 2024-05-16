import Groove from "@layouts/groove/Groove";
import HeroSection from "@layouts/hero-section/HeroSection";
import StartJourney from "@layouts/journey/Startjourney";
import Marketplace from "@layouts/market-section/MarketSection";
import Navbar from "@layouts/navbar/Navbar";
import ScreeningProcess from "@layouts/screeningprocess/ScreeningProcess";
import SkewedBackgroundSection from "@layouts/SkewedSection/SkewedSection";
import WhyChooseZwilt from "@layouts/WhyChooseZwilt/WhyChooseZwilt";
import Faq from "@layouts/Faq";
import Footer from "@layouts/Footer";

export default function LandingPage() {
    return (
        <div>
            <div className="bg-light text-dark w-full">
                {/* Hero */}
                <div id="hero" className="wrapper md:w-4/5 w-full">
                    <Navbar />
                    <HeroSection />
                </div>
                <SkewedBackgroundSection />
                {/* Marketplace */}
                <div
                    id="marketplace"
                    className="relative overflow-hidden bg-[#EDEFFF] transform -skew-y-3 market-section-bg"
                >
                    <div className="relative skew-y-3">
                        <Marketplace />
                    </div>
                </div>
                {/* Groove */}
                <div
                    id="groove"
                    className="relative overflow-hidden bg-[#202229] transform -skew-y-3"
                >
                    <div className="relative skew-y-3 groove-bg">
                        <Groove />
                    </div>
                </div>
                <div id="screening-process">
                    <ScreeningProcess />
                </div>
                <div id="start-journey">
                    <StartJourney />
                </div>
                <div id="why-choose-zwilt">
                    <WhyChooseZwilt />
                </div>
                <Faq />
                <Footer />
            </div>
        </div>
    );
}
