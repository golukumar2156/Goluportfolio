import React from "react";
import Introduction from "./Introduction";
import img from "../images/c.png";
import img2 from "../images/cP.png";
import ja from "../images/java.jpeg";
import Footer from "./Footer";
function Achievements() {
  return (
    <section className="w-full py-12 ">
      <Introduction />
      <div className="max-w-8xl mx-auto px-8 xl:ml-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
          Achievements & Certifications
        </h2>
        <p className="text-center text-gray-300 mt-2 mb-10">
          Recognition and certifications that validate my expertise
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {/* Hackathon Achievement */}
          <div className="bg-gradient-to-r from-[#4c5e7b] to-[#0F766E] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300  hover:scale-105">
            <div className=" p-2 mb-4">
              <span className="text-indigo-800 text-3xl">🚀</span>
            </div>
            <h3 className="font-semibold text-[#bf7f36] text-lg mb-2">
              Finalist – Techsangam Hackathon 2025
            </h3>
            <p className="text--[#dee6ee] font-bold">National Hackathon, Pune</p>
            <p className="text-[#dee6ee] mt-2 text-sm">
              Showcased innovation and teamwork in real-world problem solving
            </p>
          </div>

          {/* Award Achievement */}
          <div className="bg-gradient-to-r from-[#617597] to-[#0F766E] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 hover:scale-105">
            <div className=" p-2  mb-4">
              <span className="text-yellow-800 text-3xl">🏆</span>
            </div>
            <h3 className="font-semibold text-[#bf7f36] text-lg mb-2">
              Awarded by Chancellor Sir
            </h3>
            <p className="text--[#dee6ee] font-bold">
              IES College of Technology, Bhopal
            </p>
            <p className="text-[#dee6ee] mt-2 text-sm">
              For excellence in academics and perfect attendance
            </p>
          </div>

          {/* Card 1 - C++ */}
          <div className="bg-gradient-to-r from-[#5c6d89] to-[#0F766E] rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 hover:scale-105">
            <div className=" p-2  mb-4">
              <span className="text-green-600 text-3xl">⚡</span>
            </div>
            <p className="text-[#bf7f36] font-medium">Elite Silver</p>
            <h3 className="font-semibold text-[#dee6ee] text-lg mb-2">
              Certification in Fundamentals of Object-Oriented Programming
            </h3>
            <p className="text-[#dee6ee] font-bold text-[27px]">IIT Roorkee</p>
          </div>

          {/* Card 2 - C */}
          <div className="bg-gradient-to-r from-[#4c5e7b] to-[#0F766E] rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 hover:scale-105">
            <div className=" w-8 h-8 mb-4 flex items-center justify-center rounded-2xl">
              <img
                src={img}
                alt="C language logo"
                className="rounded-2xl w-8 h-8"
              />
            </div>
            <p className="text-[#bf7f36] font-medium">Successfully</p>
            <h3 className="font-semibold text-[#dee6ee] text-lg mb-2">
              Certification in Problem Solving through C Language
            </h3>
            <p className="text-[#dee6ee] font-bold text-[26px]">
              IIT Kharagpur
            </p>
          </div>

          {/* Card 3 - OOP */}
          <div className="bg-gradient-to-r from-[#4c5e7b] to-[#0F766E] rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 hover:scale-105">
            <div className="gap-2 w-8 h-8 mb-4 flex items-center justify-center rounded-2xl">
              <img
                src={img}
                alt="C language logo"
                className="rounded-2xl w-8 h-8"
              />
              <img
                src={img2}
                alt="C language logo"
                className="rounded-2xl w-8 h-8"
              />
            </div>
            <h3 className="font-semibold text-[#bf7f36] text-lg mb-2">
              Certification in C & C++
            </h3>
            <p className="text-[#dee6ee]">Sharma Computer Academy, Bhopal</p>
            <p className="text-[#dee6ee] mt-2 text-sm">
              Completed C & C++ certification, covering programming
              fundamentals, OOP concepts.
            </p>
          </div>

          {/* Card 4 - Programming Language */}
          <div className="bg-gradient-to-r from-[#4c5e7b] to-[#0F766E] rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 hover:scale-105">
            <div className=" w-10 h-10 mb-3 flex items-center justify-center rounded-2xl">
              <img
                src={ja}
                alt="C language logo"
                className="rounded-2xl w-10 h-10"
              />
            </div>
            <h3 className="font-semibold text-[#bf7f36] text-lg mb-2">
              Certification in Full Stack Java
            </h3>
            <p className="text-[#dee6ee]">Sharma Computer Academy, Bhopal</p>
            <p className="text-[#dee6ee] mt-2 text-sm">
              covering Core Java, JDBC, Servlets, JSP, and frontend technologies
              (HTML, CSS, JavaScript) for building dynamic web applications.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#4c5e7b] to-[#0F766E] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300  hover:scale-105">
            <h3 className="font-semibold text-[#bf7f36] text-lg mb-2">
              Certification in SpringBoot
            </h3>

            <p className="text-[#dee6ee] font-semibold">
              Sharma Computer Academy, Bhopal
            </p>

            <p className="text-[#dee6ee] mt-2 text-sm">
              Developed robust backend solutions with{" "}
              <strong>Spring Boot</strong> implementing backend development,
              RESTful API and database-driven application skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
