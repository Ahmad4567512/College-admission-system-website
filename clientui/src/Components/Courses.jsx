import React, { useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import mernStackImage from "../Img/mern-stack.png";
import pythonFullStackImage from "../Img/Python-Full-Stack.png.webp";
import digitalMarketingImage from "../Img/Digital-Marketing2.png";
import uiUxDesignImage from "../Img/uiux.png";
import englishSpeakingImage from "../Img/english.jpg";
import dataScienceDiplomaImage from "../Img/datasciense.webp";

const courses = [
  {
    title: "MERN Stack Development",
    image: mernStackImage,
    description:
      "Learn full-stack JavaScript development using MongoDB, Express, React, and Node.js. Gain hands-on experience building modern web applications.",
  },
  {
    title: "Python Full Stack",
    image: pythonFullStackImage,
    description:
      "Become proficient in Python and full-stack development, learning both backend and frontend technologies. Explore frameworks like Django and Flask.",
  },
  {
    title: "Digital Marketing",
    image: digitalMarketingImage,
    description:
      "Master digital marketing strategies such as SEO, SEM, content marketing, and social media marketing to drive traffic and conversions.",
  },
  {
    title: "Data Science Diploma",
    image: dataScienceDiplomaImage,
    description:
      "Gain expertise in data science, learning how to process and interpret large data sets to provide actionable business insights.It is demanding in industry",
  },
  {
    title: "UI/UX Design",
    image: uiUxDesignImage,
    description:
      "Learn UI/UX design principles and tools like Figma and Adobe XD to create stunning and user-friendly interfaces.It gives many tools and technologies",
  },
  {
    title: "English Speaking",
    image: englishSpeakingImage,
    description:
      "Improve your English speaking skills with interactive lessons and real-world conversation practice to enhance fluency and pronunciation.",
  },
];

const Courses = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl mb-6 text-center tracking-wide font-semibold font-poppins">
        Our Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center px-6">
        {currentCourses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 100, scale: 0.8 }} 
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1, 
            }}
            viewport={{ once: false, amount: 0.3 }} 
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05, 
              transition: { duration: 0.3 },
            }}
          >
            <Card
              className="bg-[#252525] shadow-lg rounded-2xl overflow-hidden mx-auto"
              sx={{ width: "320px", height: "auto" }}
            >
              <div className="p-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <CardContent className="text-left px-4 pb-4">
                <Typography
                  variant="h6"
                  component="div"
                  className="text-white font-semibold mb-2 font-roboto"
                >
                  {course.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-gray-400 mb-3 font-roboto text-sm"
                >
                  {course.description}
                </Typography>

                <Typography
                  variant="body2"
                  color="primary"
                  className="text-left cursor-pointer font-semibold text-blue-400 hover:underline font-roboto text-sm"
                >
                  Learn More
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Pagination
          count={Math.ceil(courses.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          size="large"
          variant="outlined"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{ borderRadius: "50%", color: "primary", borderColor: "white" }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Courses;
