import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import myImage from "../Img/cambridge.jpg";
import logo from "../Img/logo.png";
import Animate from "./Animate";
import Services from "./Services"; 
import OurMission from "./OurMission";
import Footer from "./Footer";
import Courses from "./Courses";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Animate>
      <header className="relative bg-cover bg-center h-[103vh] pt-[80px]" style={{ backgroundImage: `url(${myImage})` }}>
        <nav
          className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 h-[60px] text-white z-50 transition-all duration-500 ease-in-out ${
            scrolling ? "bg-gradient-to-r from-[#8B5A2B] to-[#A67B5B] bg-opacity-90 shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="hidden md:flex space-x-6">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/activities">Activities</Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-14" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/programmes" className="text-white transition-all duration-300">Programmes</Link>
            <Link to="/all-courses">All Courses</Link>

            <div className="relative group">
              <button className="flex items-center">
                Apply Now <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 bg-white text-black p-2 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link to="/student-form" className="block px-4 py-2"> College Apply </Link>
                <Link to="/apply-course" className="block px-4 py-2"> Course Apply </Link>
              </div>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <div className="mt-[90px]">
        <Services />
        <OurMission/>
        <Courses/>
        <Footer/> 
      </div>
    </Animate>
  );
};

export default Home;