import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Counter = ({ target }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; 
      const interval = 20;
      const step = (target / (duration / interval));

      const counter = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, interval);

      return () => clearInterval(counter);
    }
  }, [isInView, target]);

  return (
    <motion.div ref={ref} className="text-4xl font-bold text-red-900">
      {count.toLocaleString()}+
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#8B5A2B] text-white py-10 font-['Playfair_Display']">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
          <div>
            <Counter target={36247} /> <span className="text-lg font-semibold">ALUMNI</span>
          </div>
          <div>
            <Counter target={87} /> <span className="text-lg font-semibold">CITIES</span>
          </div>
          <div>
            <Counter target={256} /> <span className="text-lg font-semibold">CAMPUSES</span>
          </div>
          <div>
            <Counter target={67600} /> <span className="text-lg font-semibold">CURRENT STUDENTS</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4">Our College</h3>

          <div className="mb-6">
            <p><strong>WhatsApp:</strong> 0323-4319712</p>
            <p><strong>Email:</strong> info@ourcollege.edu</p>
          </div>

         
          <div className="flex space-x-6 text-lg mb-4">
            <a href="/home" className="hover:text-gray-300">Home</a>
            <a href="/aboutus" className="hover:text-gray-300">About Us</a>
            <a href="/contactus" className="hover:text-gray-300">Contact Us</a>
            <a href="/events" className="hover:text-gray-300">Events</a>
            <a href="/programmes" className="hover:text-gray-300">Programmes</a>
          </div>

      
          <div className="flex space-x-6 text-2xl mb-6">
            <FaFacebook className="cursor-pointer hover:text-blue-400" />
            <FaTwitter className="cursor-pointer hover:text-blue-300" />
            <FaInstagram className="cursor-pointer hover:text-pink-400" />
            <FaYoutube className="cursor-pointer hover:text-red-400" />
            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          </div>

          <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} Our College. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
