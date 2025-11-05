import React from "react";
import { motion } from "framer-motion";
import myImage from "../Img/cambridge-university-libraries-246_websize-1600x1068.jpeg";

const OurMission = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-10 px-6 bg-transparent mt-10">
      <motion.div
        className="w-full md:w-1/2 space-y-4 text-center md:text-left m-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-[#8B5A2B]">Our Mission</h2>
        <p className="text-lg text-gray-600">
          We are dedicated to providing high-quality education that empowers students to become leaders in their respective fields. Our mission is to foster critical thinking, creativity, and innovation in all our students.
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-600 space-y-2">
          <li>To provide world-class education in a nurturing environment.</li>
          <li>To promote community involvement and leadership skills.</li>
          <li>To equip students with the tools they need to succeed globally.</li>
        </ul> 
      </motion.div>

      <motion.div
        className="w-full md:w-1/3 mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src={myImage}
          alt="Our Mission"
          className="w-full h-auto max-h-64 object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default OurMission;
