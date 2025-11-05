import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8B5A2B] text-white py-10 font-['Playfair_Display']">
      <div className="container mx-auto text-center">
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