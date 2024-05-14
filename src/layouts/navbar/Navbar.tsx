import { Link } from "react-router-dom";
import logo from "@image/Frame 55.png";

export default function Navbar() {
    return (
        <div className="pt-10">
            <nav className="nav text-white py-4 px-6 flex justify-between items-center border-10 border-black rounded-lg"> 
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 mr-2" />
                </div>
                <div className="space-x-4 hidden md:flex">
                    <Link to="/find-work" className="hover:text-black">Find Work</Link>
                    <Link to="/find-talent" className="hover:text-black">Find Talent</Link>
                    <Link to="/articles" className="hover:text-black">Articles</Link>
                    <Link to="/about-us" className="hover:text-black">About Us</Link>
                    <Link to="/contact-us" className="hover:text-black">Contact Us</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <button className="hover:text-black">Log In</button> 
                    <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100 border-5 border-black">Join Now</button> 
                </div>
            </nav>
        </div>
    );
}
