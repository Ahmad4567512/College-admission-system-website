import React from 'react'
const Programmes = () => {
    return (
      <div className="bg-gradient-to-r from-[#8B5A2B] to-[#A67B5B] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">INTERMEDIATE AT</h2>
          <h2 className="text-3xl font-bold mt-2">OUR COLLEGES</h2>
          <p className="text-white text-lg font-semibold mt-4">Our Programmes:</p>
          <p className="text-gray-300 mt-2">
            OUR Colleges offer purpose-built campuses featuring state-of-the-art facilities backed by an experienced
            faculty, providing you a variety of courses to choose from.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
            {[
              { title: "FSC.", subtitle: "Pre-Medical", text: "This programme aims to deliver diverse knowledge and education related to medicine and other related fields." },
              { title: "FSC.", subtitle: "Pre-Engineering", text: "This programme serves as a gateway to prepare our students with practical knowledge and education of engineering fields in order to achieve their place in the top engineering universities of the country." },
              { title: "F.A.", subtitle: "", text: "Our F.A programme is designed for students who are interested in developing careers in the fields of arts, humanities, journalism, media and other related fields." },
              { title: "ICS", subtitle: "", text: "ICS programme is designed to enhance the skills of our students in computer science and information technology." },
              { title: "I.COM", subtitle: "", text: "Our I. Com programme helps build your skills in the fields of commerce and accounting, leading to promising careers in accountancy and other related fields." }
            ].map((program, index) => (
              <div key={index} className="bg-white text-[#1E1F5C] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{program.title}</h3>
                <p className="text-red-500 font-semibold mt-1">{program.subtitle}</p>
                <p className="mt-2 text-sm">{program.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-white text-3xl font-bold">CAMPUS LIFE:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {[
              { title: "Clubs & Societies:", text: "Apart from academics, Our Colleges provide extra classroom activities to their students in the form of societies & clubs for Dramatics, Music, Debating, Literary, IT, sports and more.", image: "bg-purple-900" },
              { title: "Annual Sports Gala:", text: "At Our Colleges, a mega sports event is organized annually to encourage extra-curricular and sports activities. Our students participate in local, regional and nation-wide competitions.", image: "bg-red-600" },
              { title: "Study & Recreational Trips:", text: "Our Colleges offer vibrant student life with its recreational activities through trips to movie cinemas, seminars and adventure tours.", image: "bg-blue-900" },
              { title: "Welcome & Farewell Events:", text: "From the time our students join us till the time they leave, Punjab Colleges arrange a celebration of the memorable moments of fun and joy with their students each year.", image: "bg-red-600" }
            ].map((activity, index) => (
              <div key={index} className={`${activity.image} text-white p-6 rounded-lg shadow-md`}> 
                <h3 className="text-lg font-bold">{activity.title}</h3>
                <p className="mt-2 text-sm">{activity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    );
  }
 export default Programmes;