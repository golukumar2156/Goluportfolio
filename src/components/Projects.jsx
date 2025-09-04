import React from "react";
import imgpath from "../images/tiktak.jpg";
import imgpathe from "../images/github.png";
import imgpathes from "../images/currency.webp";
import imgpathess from "../images/rock.jpeg";
import imgpathese from "../images/garb.png";
function Projects() {
  return (
    <div className="md:pt-50 pt-40 px-4 pb-10">
      <h1 className="text-center text-[#d4ae32] lg:text-6xl text-2xl font-extrabold mb-4">
        My Projects
      </h1>
      <div className="text-center lg:text-xl md:text-xl  pt-2 ">
        A collection of projects that showcase my expertise in web development
        and Full-Stack Java development with foundations in modern responsive{" "}
      </div>
      <div className="text-center lg:text-xl md:text-xl  py-2 ">
        web and scalable solutions. Passionate about solving real-world problems
        through thoughtful, user-centric development.
      </div>

      {/* Responsive   */}
      <div className="grid grid-cols-1 px-3 xl:pl-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
        {/* first card */}
        <div className="max-w-lg mx-auto bg-gradient-to-r from-[#a8d7c8] to-[#13b0a3] transition-transform duration-400 ease-in-out 
  hover:-translate-y-1.5 hover:scale-105 focus:scale-105 active:scale-105  rounded-lg shadow-md overflow-hidden h-fit">
          <div className="relative">
            <img
              src={imgpathese}
              alt="images_project"
              className="w-full h-50 block object-cover hover:scale-95 duration-700"
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
              Featured
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 uppercase mb-2">
              Web Development
            </p>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Civic Sense
            </h3>
            <p className="text-gray-700 mb-4">
              This UI prototype is for visual presentation and design showcase.
              It demonstrates layout and responsiveness with no backend, and
              highlights UI/UX skills by previewing the final product.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                React_js
              </span>
            </div>
            <button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded px-4 py-2">
              <a
                href="https://newcity-git-main-golusiddharth88-2687s-projects.vercel.app/"
                target="_blank"
              >
                view
              </a>
            </button>
          </div>
        </div>

        {/* first card */}
        <div className="max-w-lg mx-auto bg-gradient-to-r from-[#a8d7c8] to-[#13b0a3] transition-transform duration-400 ease-in-out 
  hover:-translate-y-1.5 hover:scale-105 focus:scale-105 active:scale-105 rounded-lg shadow-md overflow-hidden h-fit">
          <div className="relative">
            <img
              src={imgpath}
              alt="images_project"
              className="w-full h-50 block object-cover hover:scale-95 duration-700"
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
              Featured
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 uppercase mb-2">
              Web Development
            </p>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Tic-Tac-Toe game
            </h3>
            <p className="text-gray-700 mb-4">
              It features a clean, responsive 3×3 grid layout, intuitive
              turn-based logic, automatic win/draw detection, and a convenient
              restart button—making it a compact but impactful
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Html
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Css
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                JavaScript
              </span>
            </div>
            <button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded px-4 py-2">
              <a
                href="https://golukumar2156.github.io/tic_game/"
                target="_blank"
              >
                view
              </a>
            </button>
          </div>
        </div>

        {/* first card */}
        <div className="max-w-lg mx-auto bg-gradient-to-r from-[#a8d7c8] to-[#13b0a3] transition-transform duration-400 ease-in-out 
  hover:-translate-y-1.5 hover:scale-105 focus:scale-105 active:scale-105  rounded-lg shadow-md overflow-hidden h-fit">
          <div className="relative">
            <img
              src={imgpathe}
              alt="images_project"
              className="w-full h-50 block object-cover hover:scale-95 duration-700"
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
              Featured
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 uppercase mb-2">
              Web Development
            </p>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Github Profile Finder
            </h3>
            <p className="text-gray-700 mb-4">
              Real-time GitHub user data fetch Smooth UI with animated
              transitions Responsive design with modern styling Displays avatar,
              name, company, followers
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Html
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Css
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                JavaScript
              </span>
            </div>
            <button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded px-4 py-2">
              <a
                href="https://golukumar2156.github.io/githubdetails/"
                target="_blank"
              >
                view
              </a>
            </button>
          </div>
        </div>

        {/* first card */}
        <div className="max-w-lg mx-auto bg-gradient-to-r from-[#a8d7c8] to-[#13b0a3] transition-transform duration-400 ease-in-out 
  hover:-translate-y-1.5 hover:scale-105 focus:scale-105 active:scale-105 rounded-lg shadow-md overflow-hidden h-fit">
          <div className="relative">
            <img
              src={imgpathes}
              alt="images_project"
              className="w-full h-50 block object-cover hover:scale-95 duration-700"
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
              Featured
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 uppercase mb-2">
              Web Development
            </p>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Currency Converter
            </h3>
            <p className="text-gray-700 mb-4">
              In a world where exchange rates shift every second, staying
              updated is crucial. Our tool ensures users get accurate, real-time
              conversions with a smooth and intuitive experience
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Html
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Css
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                JavaScript
              </span>
            </div>
            <button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded px-4 py-2">
              <a
                href="https://golukumar2156.github.io/currecy_App/"
                target="_blank"
              >
                view
              </a>
            </button>
          </div>
        </div>

        {/* first card */}
        <div className="max-w-lg mx-auto bg-gradient-to-r from-[#a8d7c8] to-[#13b0a3] transition-transform duration-400 ease-in-out 
  hover:-translate-y-1.5 hover:scale-105 focus:scale-105 active:scale-105  rounded-lg shadow-md overflow-hidden h-fit">
          <div className="relative">
            <img
              src={imgpathess}
              alt="images_project"
              className="w-full h-50 block object-cover hover:scale-95 duration-700"
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
              Featured
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 uppercase mb-2">
              Web Development
            </p>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Rock-Paper-Scissors Game!
            </h3>
            <p className="text-gray-700 mb-4">
              Interactive design with hover effects. Real-time score tracking
              for both user and computer. A clear message system for results
              (win, lose, draw).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Html
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Css
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                JavaScript
              </span>
            </div>
            <button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded px-4 py-2">
              <a href="https://golukumar2156.github.io/game/" target="_blank">
                view
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
// https://golukumar2156.github.io/
