import logoIconButton from "@assets/svg/logo-icon-button.svg";
import logo from "@image/Frame 55.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-dark text-light py-6">
            <div className="wrapper">
                <div className="bg-[#525AA0] w-full flex items-center justify-center gap-6 flex-col py-28 relative overflow-hidden">
                    <div className="w-full p-5 border-b-[5vw] border-l-[100vw] border-l-dark border-b-[#525AA0] absolute -top-10" />
                    <h2 className="text-5xl max-w-xl font-semibold text-center">
                        Need a job done, and done well? Get started
                    </h2>
                    <img src={logoIconButton} alt="" />
                    <div className="w-full p-0 border-b-[3vw] border-l-[100vw] border-l-[#525AA0] border-b-dark absolute -bottom-1" />
                </div>
            </div>
            {/*  */}
            <br />
            <br />
            <br />
            <br />
            {/*  */}
            <div className="wrapper flex gap-20 pb-36">
                <div className="md:max-w-sm flex flex-col gap-7">
                    <img className="w-32" src={logo} alt="" />
                    <p className="pb-10">
                        We take complex hiring processes - and simplify them.
                        Connecting you to the world’s highly qualified talent
                        pool.
                    </p>
                    <div className="">
                        <p className="opacity-50 mb-6">LINKS AND REDIRECTS</p>

                        <div className="flex items-center gap-4">
                            <Link
                                className="bg-[#292B34] px-10 py-3 rounded-2xl inline-block"
                                to="/"
                            >
                                Hire now
                            </Link>
                            <Link
                                className="bg-[#292B34] px-10 py-3 rounded-2xl inline-block"
                                to="/"
                            >
                                Apply now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="text-5xl font-semibold mb-24">
                        <h1>
                            Connecting the right people to the right businesses.
                        </h1>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-col gap-3">
                            <p className="mb-1 text-sm opacity-50">PLATFORM</p>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Find Work
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Find Talent
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Categories
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                About Us
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="mb-1 text-sm opacity-50">
                                CATEGORIES
                            </p>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Data Science
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                IT & Networking
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Web & Mobile
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="mb-1 text-sm opacity-50">HELP</p>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                FAQ’s
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Contact Us
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Web & Mobile
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="mb-1 text-sm opacity-50">
                                GET IN TOUCH @
                            </p>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Instagram
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                LinkedIn
                            </Link>
                            <Link
                                className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all"
                                to={"/"}
                            >
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-light/50 pt-4">
                <div className="wrapper flex items-center justify-between">
                    <p>All rights reserved by Zwilt</p>

                    <div className="flex items-center gap-4">
                        <Link to={"/"} className="underline opacity-70">
                            Privacy Policy
                        </Link>
                        <Link to={"/"} className="underline opacity-70">
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
