import React, { useState } from "react";
import apis from '../apis/api'

const ApplyCourseForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    cnic: "",
    email: "",
    studentContact: "",
    gardianContact: "",
    courseName: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(apis[1], {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setFormData({
          studentName: "",
          cnic: "",
          email: "",
          studentContact: "",
          gardianContact: "",
          courseName: "",
          message: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(`Failed to submit. Please try again. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1E293B] to-gray-200 p-6">
      
      {/*  Success Message */}
      {success && (
        <div className="absolute top-16 right-10 bg-white text-black px-5 py-3 rounded-lg shadow-lg flex items-center animate-slideIn">
          <span className="text-2xl text-black mr-3">✔</span>
          <span className="font-medium">Submitted Successfully!</span>
        </div>
      )}

      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-[#A97C50] text-center mb-6">Apply for a Course</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Full Name " required />
          <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} maxLength="13" className="w-full p-2 border rounded-md" placeholder="CNIC " required />
          <small className="text-gray-800">Enter CNIC without dashes</small>

          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Email " required />
          <input type="text" name="studentContact" value={formData.studentContact} onChange={handleChange} maxLength="11" className="w-full p-2 border rounded-md" placeholder="Student Contact " required />
          <input type="text" name="gardianContact" value={formData.gardianContact} onChange={handleChange} maxLength="11" className="w-full p-2 border rounded-md" placeholder="Guardian Contact " required />

          <select name="courseName" value={formData.courseName} onChange={handleChange} className="w-full p-2 border rounded-md" required>
            <option value="">Select Course </option>
            <option>MERN Stack Development</option>
            <option>Python Full Stack</option>
            <option>English Speaking</option>
            <option>Digital Marketing</option>
            <option>UI/UX Design</option>
            <option>Full Stack Graphic Design</option>
            <option>Data Science Diploma</option>
          </select>

          <textarea name="message" value={formData.message} onChange={handleChange} maxLength="50" className="w-full p-2 border rounded-md" placeholder="Message (Optional)" />

          <button type="submit" className="w-full bg-[#946a40] text-white py-2 rounded-md font-semibold hover:bg-[#8B5A2B] transition-all" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-out;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default ApplyCourseForm;
