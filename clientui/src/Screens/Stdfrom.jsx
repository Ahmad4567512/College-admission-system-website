import React, { useState } from "react";
import apis from '../apis/api'

const Stdform = () => {
  const [formData, setFormData] = useState({
      fullName: "",
      fatherName: "",
      gender: "",
      campus: "",
      degree: "",
      cnic: "",
      guardianCnic: "",
      dob: "",
      guardianContact: "", 
      studentContact: "", 
      email: "",
      address: "",
      recentDegree: "", 
      passingYear: "",
      board: "",
      obtainedMarks: "", 
      totalMarks: "",
      school: "",
      heardFrom: "",
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apis[0], {  
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
          fullName: "",
          fatherName: "",
          gender: "",
          campus: "",
          degree: "",
          cnic: "",
          guardianCnic: "",
          dob: "",
          guardianContact: "", 
          studentContact: "", 
          email: "",
          address: "",
          recentDegree: "", 
          passingYear: "",
          board: "",
          obtainedMarks: "", 
          totalMarks: "",
          school: "",
          heardFrom: "",
        });
      } else {
        alert("Please Fill out all the fields");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    
    <div className="bg-gray-100 min-h-screen p-8 border-r-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#8B5A2B] text-white text-center py-16 mb-6">
          <h1 className="text-2xl font-bold">Our Colleges</h1>
          <p className="text-yellow-500">Online Admissions</p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-md">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded w-full">
              <option value="">Gender </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <select name="campus" value={formData.campus} onChange={handleChange} className="border p-2 rounded w-full">
              <option value="">Campus </option>
              <option>Main Campus</option>
              <option>City Campus</option>
              <option>Lahore Campus</option>
            </select>
            <select name="degree" value={formData.degree} onChange={handleChange} className="border p-2 rounded w-full">
              <option value="">Select Degree </option>
              <option>FSC Pre-Medical</option>
              <option>FSC Pre-Engineering</option>
              <option>ICS</option>
              <option>I.COM </option>
              <option>F.A</option>
            </select>
          </div>

          <p className="text-red-600 font-bold mb-2">Important: Fill the form as per the board result card.</p>
          <h2 className="text-lg font-bold mb-2">Personal Info</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Full Name " required />
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Father / Guardian Name " required />
            <select name="relationship" value={formData.relationship} onChange={handleChange} className="border p-2 rounded w-full">
              <option value="">Relationship</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Guardian</option>
            </select>
            <div className="w-full">
            <input 
              type="text" 
              name="cnic" 
              value={formData.cnic} 
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 13); 
                setFormData({ ...formData, cnic: value });
              }} 
              className="border p-2 rounded w-full" 
              placeholder="Student CNIC " 
            />
            <span className="text-gray-800 text-xs block mt-1">Without dashes</span>
          </div>
          <div className="w-full">
          <input 
            type="text" 
            name="guardianCnic" 
            value={formData.guardianCnic} 
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 13); 
              setFormData({ ...formData, guardianCnic: value });
            }} 
            className="border p-2 rounded w-full" 
            placeholder="Parent's / Guardian CNIC " 
          />
          <span className="text-gray-800 text-xs block mt-1">Without dashes</span>
        </div>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Date of Birth *" required />
          </div>

          <h2 className="text-lg font-bold mb-2">Contact Info</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="w-full">
          <label className="block w-full">
          <input 
            type="text" 
            name="studentContact" 
            value={formData.studentContact} 
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 11); 
              setFormData({ ...formData, studentContact: value });
            }} 
            className="border p-2 rounded w-full" 
            placeholder="Student Contact No." 
          />
          </label>
          </div>
                  
          <div className="w-full">
          <label className="block w-full">
          <input 
            type="text" 
            name="guardianContact" 
            value={formData.guardianContact} 
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 11); 
              setFormData({ ...formData, guardianContact: value });
            }} 
            className="border p-2 rounded w-full" 
            placeholder="Parent's / Guardian Contact No. " 
            required 
          />
          </label>
          </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Email " required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Address" />
          </div>

          <h2 className="text-lg font-bold mb-2">Academic Info</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <select name="recentDegree" value={formData.recentDegree} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="">Recent Degree </option>
            <option>Matriculation</option>
            <option>1st Year</option>
          </select>
          <input type="text" name="obtainedMarks" value={formData.obtainedMarks} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Obtained Marks " />
          <input type="text" name="totalMarks" value={formData.totalMarks} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Total Marks " />
          <input type="text" name="board" value={formData.board} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Board Roll No " />
          <input 
            type="text" 
            name="passingYear" 
            value={formData.passingYear} 
            onChange={handleChange} 
            className="border p-2 rounded w-full" 
            placeholder="Passing Year " 
            required 
          />
          <input type="text" name="school" value={formData.school} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Previous School/College " />
          <input type="text" name="heardFrom" value={formData.heardFrom} onChange={handleChange} className="border p-2 rounded w-full" placeholder="How did you hear about us?" />
          </div>

          <div className="mt-6">
      
        <div className="bg-[#8B5A2B] text-white p-7 rounded-md shadow-md">
          <p>
            I hereby declare that I am applying for this course with the consent of my parents/guardian. 
            If I get admission, I will abide by the rules and regulations of the college, and in case of any 
            breach, I will be liable for rustication/expulsion. The information provided by me in this form 
            is correct and authentic.
          </p>
        </div>
        
  <div className="flex items-center mt-4">
    <input type="checkbox" id="terms" className="mr-3" required />
    <label htmlFor="terms" className="text-gray-700">
      I accept and confirm the mentioned terms and conditions
    </label>
  </div>

  <div className="flex justify-end mt-4 space-x-4">
    <button type="button" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all shadow-md">
      Cancel
    </button>
    <button type="submit" className="bg-[#ac6f36] text-white px-6 py-2 rounded-md hover:bg-[#8B5A2B] transition-all shadow-md">
      Submit
    </button>
  </div>
</div>
        </div>
      </form>
    </div>
  );
};


export default Stdform;
