import React, { useState } from "react";
import apis from "../apis/api";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.split(" ").length > 13) return;
    if (name === "message" && value.split(" ").length > 150) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(apis[2], {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Please fill out all the fields properly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-[#8B5A2B] text-white min-h-screen px-8 py-12">
 
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          GET IN <span className="text-red-500">TOUCH</span>
        </h1>
        <p className="mt-2 text-sm">
          <span className="text-gray-300">Home</span> /{" "}
          <span className="text-red-500">Contact Us</span>
        </p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-red-500">
          Send Us a Message
        </h2>
        <p className="text-center text-gray-600 mt-2">
          We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name "
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message (Max 150 words)"
            rows="5"
            className="mt-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
