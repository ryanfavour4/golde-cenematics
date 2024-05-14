import { Link } from "react-router-dom";
import logo from "@svg/logo.svg";

export default function Navbar() {
    return (
        <nav className="border-b border-primary w-full font-oswald font-light py-6">
            <ul className="flex items-center gap-14 justify-center">
                <li>
                    <Link
                        className="uppercase hover:text-primary text-light"
                        to={"/"}
                    >
                        Our Work
                    </Link>
                </li>
                <li>
                    <Link
                        className="uppercase hover:text-primary text-light"
                        to={"/"}
                    >
                        Our Process
                    </Link>
                </li>

                <li>
                    <Link
                        className="uppercase hover:text-primary text-light"
                        to={"/"}
                    >
                        <img className="w-14" src={logo} alt="logo" />
                    </Link>
                </li>

                <li>
                    <Link
                        className="uppercase hover:text-primary text-light"
                        to={"/"}
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        className="uppercase hover:text-primary text-light"
                        to={"/"}
                    >
                        Contact us
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
