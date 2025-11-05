import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-[#8B5A2B] text-white min-h-screen px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          WE GOT <span className="text-red-500">HISTORY</span>
        </h1>
        <p className="mt-2 text-sm">
          <span className="text-gray-300">Home</span> /{" "}
          <span className="text-red-500">About us</span>
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold text-red-500">ABOUT US</h2>
          <p className="mt-4 text-gray-200">
            Welcome to a legacy built on excellence! For decades, we have been
            committed to providing world-class education, shaping bright futures,
            and setting new benchmarks in academic brilliance. Our institution
            is not just about books and classrooms—it's a place where dreams
            take flight.
          </p>
          <p className="mt-4 text-gray-200">
            With a passion for innovation and a dedication to quality, we ensure
            that every student receives the best learning experience. Join us in
            this journey of knowledge, growth, and success.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-red-500">OUR MISSION</h2>
          <p className="mt-4 text-gray-200">
            Our mission is simple: to empower students with knowledge, skills,
            and confidence. We strive to create an environment where learning is
            inspiring, creativity is encouraged, and excellence is a way of life.
          </p>
          <p className="mt-4 text-gray-200">
            Whether it’s academics, extracurriculars, or personal growth, we
            ensure our students are well-equipped for the challenges of the
            future.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-red-500">OUR IMPACT</h2>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Over the years, we have nurtured thousands of students, guiding them
          toward success. Our alumni are excelling in various fields worldwide,
          proving that with the right education, there are no limits.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-6xl font-bold text-red-500">67630+</h1>
        <p className="text-red-500 text-xl font-bold">STUDENTS EMPOWERED</p>
      </div>
    </div>
  );
};

export default Aboutus;
