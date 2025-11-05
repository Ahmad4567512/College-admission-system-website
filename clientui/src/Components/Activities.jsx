import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import sportsImage from "../Img/img-activities031.jpg";
import musicImage from "../Img/img-activities011.jpg";


const Activities = () => {
  return (
    <div className="bg-[#8B5A2B] text-white min-h-screen">
  
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">ACTIVITIES</h1>
        <p className="mt-2 text-lg text-gray-300">
          <Link to="/" className="text-white hover:underline">Home</Link> / 
          <Link to="/activities" className="text-red-500 hover:underline">Activities</Link>
        </p>
      </header>


      <div className="bg-red-500 h-16 flex items-center justify-center">
        <div className="w-full h-full  bg-cover bg-center"></div>
      </div>

  
      <section className="p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-red-500">BLOOD DONOR SOCIETY</h2>
            <p className="mt-2 text-gray-300">
              The aim of the Blood Donor Society is to gather a team of highly motivated students who can
              enthusiastically put in an effort to gather blood from volunteer donors amongst the students, faculty, and staff
              of the college. The responsibility of the society is to ensure the availability of blood at a time of emergency or for
              regular cases.
            </p>
            <h2 className="text-2xl font-bold text-red-500 mt-8">SPORTS CLUB</h2>
            <p className="mt-2 text-gray-300">
              Extracurricular activities are incomplete without sports. Our sports club keeps students engaged with
              league tournaments of badminton, basketball, cricket, hockey, football, and table tennis. Apart from on-campus
              activities, students also take an active part in inter-college tournaments.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img src={sportsImage} alt="Sports Club" className="w-full max-w-sm h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img src={musicImage} alt="Debating Event" className="w-full max-w-sm h-auto rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-red-500">DEBATING SOCIETY</h2>
            <p className="mt-2 text-gray-300">
              The Debating Society facilitates students with opportunities to explore their capability in debating. Monthly and
              annual debating events take place, where students compete and receive trophies based on their performances.
            </p>
            <h2 className="text-2xl font-bold text-red-500 mt-8">DRAMATIC CLUB</h2>
            <p className="mt-2 text-gray-300">
              Our Dramatic Club plays a vital role in improving students' confidence and public speaking skills through
              dramatics. It is an essential part of welcome parties, concerts, and other occasions.
            </p>
            <h2 className="text-2xl font-bold text-red-500 mt-8">MUSIC SOCIETY</h2>
            <p className="mt-2 text-gray-300">
              The Music Society polishes students' singing and musical abilities. Regular workshops are held to discuss
              various music genres, and frequent concerts and singing competitions are organized.
            </p>
          </div>
        </div>
      </section>

  
      <footer className="bg-[#8B5A2B] text-white py-16 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold">OUR COLLEGE </h2>
            <p className="text-sm mt-4">© 2025 Our College. All Rights Reserved.</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">WhatsApp: <span className="font-normal">0323-4319712</span></p>
            <p className="font-bold">EMAIL: <span className="font-normal">info@ourcollege.edu</span></p>
            <p className="font-bold">COMPLAINT PORTAL: <span className="font-normal">complaint.ourcollege.edu</span></p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaYoutube size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaLinkedin size={24} /></a>
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg">APPLY NOW</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Activities;
