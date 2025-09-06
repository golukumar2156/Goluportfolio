import React from "react";
import imagePath from "../images/prof.jpg";
import resume from "../download/My_resume.pdf";
import { IoIosCodeDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

function MidText() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-2  pt-45 md:ml-10">

           {/* Profile Image */}
      <div className="w-60 h-60 md:w-72 md:h-72 lg:w-100 lg:h-100 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 xl:mr-50  md:mr-10  ">
        <img
          src={imagePath}
          alt="Golu Kumar"
          className="w-full h-full object-cover transition-transform duration-400 ease-in-out 
  hover:-translate-y-1.5 hover:scale-105 focus:scale-120 active:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-2xl lg:ml-15 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
          Hi, I’m{" "}
          <span className="text-red-500 drop-shadow-md">Golu Kumar</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl  text-gray-200 mb-8">
          A passionate <span className="font-semibold">Java Full Stack Developer</span>
        </p>

        {/* Resume Button */}
        <a
          href={resume}
          download="My_resume.pdf"
          className="inline-flex xl:ml-20 items-center bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300 mb-6"
        >
          <IoIosCodeDownload className="mr-2 text-2xl" />
          Download Resume
        </a>

        {/* Social Icons */}
        <div className="flex justify-center xl:ml-25 md:justify-start space-x-8 text-4xl  text-gray-200">
          <a href="https://github.com/golukumar2156" aria-label="GitHub" target="_blank">
            <FaGithub className="hover:text-green-600 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/golukumar2555/" aria-label="LinkedIn" target="_blank">
            <CiLinkedin className="hover:text-green-600 transition duration-300" />
          </a>
            <a href="https://x.com/Gol9uKumar2155?t=C10xmq0VcrkbkYumQLWU8A&s=0" aria-label="twitter" target="_blank">
                    <FaSquareXTwitter className="hover:text-green-600 transition duration-300" />
                  </a>
        </div>
      </div>
   
    </section>
  );
}

export default MidText;
