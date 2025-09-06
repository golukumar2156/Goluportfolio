import React from "react";
import imagePath from "../images/prof.jpg";
import resume from "../download/My_resume.pdf";
import { IoIosCodeDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
function Introduction() {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-0 xl:px-32 py-30 ">
      {/* Profile Image */}
      <div
        className="w-70 h-70 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-98 xl:h-98
                rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-45 xl:mr-45 lg:mr-0
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl
                focus:scale-105 focus:shadow-2xl
                active:scale-105 active:shadow-2xl
                cursor-pointer"
      >
        <img
          src={imagePath}
          alt="Golu Kumar"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:shadow-2xl
           focus:scale-105 focus:shadow-2xl
                active:scale-105 active:shadow-2xl"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#bf7f36] mb-6">
          About Me
        </h1>
        <p className="text-black leading-relaxed mb-4">
          Hi, I'm <span className="font-semibold">Golukumar</span>, an{" "}
          <span className="text-green-600">
            aspiring Java Full Stack Developer
          </span>{" "}
          passionate about building complete web applications. I work with{" "}
          <strong>Java, Spring Boot, MySQL, and React.js</strong>, along with
          frontend technologies like HTML, CSS, and JavaScript, to create
          scalable and user-friendly solutions.
        </p>
        <p className="text-black leading-relaxed mb-4">
          My journey began with learning <strong>C, C++, Java, and SQL</strong>,
          which provided me with a strong foundation in programming and
          problem-solving. I then expanded into <strong>Spring Boot</strong> for
          backend development and <strong>React.js</strong> for frontend,
          combining both to build dynamic full-stack projects.
        </p>
        <p className="text-black leading-relaxed mb-6">
          I’m continuously learning and exploring new technologies to grow as a
          developer. My goal is to become a skilled Java Full Stack Developer
          capable of designing, developing, and deploying efficient web
          applications that solve real-world problems.
        </p>

        {/* Resume Button */}
        <a
          href={resume}
          download="My_resume.pdf"
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300 mb-6"
        >
          <IoIosCodeDownload className="mr-2 text-2xl" />
          Download Resume
        </a>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-12 text-4xl text-white">
          <a
            href="https://github.com/golukumar2156"
            aria-label="GitHub"
            target="_blank"
          >
            <FaGithub className="hover:text-green-600 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/golukumar2555/"
            aria-label="LinkedIn"
            target="_blank"
          >
            <CiLinkedin className="hover:text-green-600 transition duration-300" />
          </a>
          <a
            href="https://x.com/Gol9uKumar2155?t=C10xmq0VcrkbkYumQLWU8A&s=0"
            aria-label="twitter"
            target="_blank"
          >
            <FaSquareXTwitter className="hover:text-green-600 transition duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
