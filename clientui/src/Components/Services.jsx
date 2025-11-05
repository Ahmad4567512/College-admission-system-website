import React from "react";
import { FaChalkboardTeacher, FaRegClipboard, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import Library from "../Img/libraryyy.jpg";
import Coaching from "../Img/coach-vie-pour-education-consultation-auto-coaching-dans-modele-illustration-dessin-anime-dessine-main_2175-7816.avif";
import Registration from "../Img/original-open-english-mission-1aobcdr.avif";

const Services = () => {
  return (
    <section className="">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 tracking-wide">
          Our Services
        </h2>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {[ 
          {
            title: "Academic Coaching",
            description:
              "Personalized coaching to help students excel, offering expert guidance in various academic subjects and career advice.",
            icon: <FaChalkboardTeacher />,
            img: Coaching,
          },
          {
            title: "Our Courses",
            description:
              "Our courses provide essential skills for career success, with expert instructors and an up-to-date curriculum tailored to industry.",
            icon: <FaRegClipboard />,
            img: Registration,
          },
          {
            title: "Library Access",
            description:
              "Access a wide range of books and research materials to support your academic journey and research needs.",
            icon: <FaBook />,
            img: Library,
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 shadow-lg rounded-lg relative overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl max-w-xs mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="w-full h-40 mb-4 overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-gray-800 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 transition-all duration-300 hover:text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600 transition-all duration-300 text-sm">
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
