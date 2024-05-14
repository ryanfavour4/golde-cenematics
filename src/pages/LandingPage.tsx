import Navbar from "@layouts/navbar/Navbar";
import bikerHead from "@image/biker-head.jpg";
import trianglePlay from "@svg/play.svg";
import chevrolet from "@svg/chevrolet.svg";
import newbalance from "@svg/new-balance.svg";
import strega from "@svg/strega.svg";
import dunejewelry from "@svg/dunejewelry.svg";
import umass from "@svg/umass.svg";
import bostonlogan from "@svg/bostonlogan.svg";

export default function LandingPage() {
    return (
        <div>
            <div className="bg-dark text-light w-full pb-6">
                {/* Hero */}
                <div className="wrapper md:w-4/5 w-full border-x border-primary">
                    <Navbar />
                    <div className="py-16">
                        <h1 className="text-4xl md:text-8xl text-center uppercase mb-7">
                            Elevate Your <br />
                            Storytelling with <br />
                            <span className="text-primary">
                                Golde Cinematics
                            </span>
                        </h1>
                        <p className="max-w-xl text-center m-auto">
                            From captivating visuals to immersive narratives, we
                            specialize in bringing your ideas to life on the
                            silver screen. Let us elevate your vision with our
                            passion, creativity, and dedication to excellence.
                        </p>
                    </div>
                </div>
                {/* Video Screen */}
                <div className="wrapper relative group">
                    <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-40 group-hover:bg-transparent transition-all" />

                    <a
                        href="http://google.com"
                        target="_blank"
                        className="absolute w-16 top-1/2 bottom-1/2 left-1/2 right-1/2 translate-1/2 translate-y-1/2 animate-pulse hover:animate-none"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-10 md:w-20"
                            src={trianglePlay}
                            alt="triangle play"
                        />
                    </a>

                    <img
                        className="w-full m-auto"
                        src={bikerHead}
                        alt="biker head"
                    />
                </div>
                {/* Sponsor Logo */}
                <div className="wrapper md:w-4/5 w-full border-x border-primary p-10" />
                <div className="p-6 border border-primary flex items-center md:justify-between justify-center wrapper md:gap-0 gap-4 md:flex-nowrap flex-wrap">
                    <img className="w-fit h-11" src={chevrolet} alt="" />
                    <img className="w-fit h-11" src={newbalance} alt="" />
                    <img className="w-fit h-11" src={strega} alt="" />
                    <img className="w-fit h-11" src={dunejewelry} alt="" />
                    <img className="w-fit h-11" src={umass} alt="" />
                    <img className="w-fit h-9" src={bostonlogan} alt="" />
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
