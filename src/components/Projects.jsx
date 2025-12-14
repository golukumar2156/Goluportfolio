import React from "react";
import imgpath from "../images/tiktak.jpg";
import imgpathe from "../images/github.png";
import imgf from "../images/fp.png";
import imgpathes from "../images/currency.webp";
import imgpathess from "../images/rock.jpeg";
import imgpathese from "../images/garb.png";
import imagevoting from "../images/voting.png";
import video from "../download/retailschain.mp4";

const projects = [
  {
    title: "OrderCapture",
    category: "Java-FullStack",
    description:
      "Developed a OrderCapture system to automate retail operations, managing billing, inventory, and orders while providing real-time sales insights for data-driven decisions.",
    tech: ["Java", "Spring Boot", "JWT", "Razorpay", "React", "Tailwind CSS", "ShadCN", "Redux", "Axios"],
    media: video,
    type: "video",
    link: "https://youtu.be/vEQX3uvDTS4?si=B6gQwrkq8LQL-4NP"
  },
   {
    title: "Online Voting System",
    category: "Java-FullStack",
    description:
      "Developed a secure web application for digital elections with voter registration, candidate management, voting, and real-time result tracking.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    media: imagevoting,
    type: "image",
    link: "https://github.com/golukumar2156/votezyfrontend"
  },
  {
    title: "Smart Student ID Manager",
    category: "Java-FullStack",
    description:
      "Developed a Smart Student ID Manager system for college and school. It helps us find the ID of students.",
    tech: ["Java", "Spring Boot", "React", "Tailwind CSS", "Redux", "Axios"],
    media: imgf,
    type: "image",
    link: "https://www.linkedin.com/posts/golukumar2555_springboot-java-fullstackabrdevelopment-activity-7395711534305517568-tVtu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPruOsB0fJBKu09NnABBfPNVZrtuTm372w"
  },
  {
    title: "Civic Sense",
    category: "Web Development",
    description:
      "This UI prototype is for visual presentation and design showcase. It demonstrates layout and responsiveness with no backend, highlighting UI/UX skills.",
    tech: ["React_js"],
    media: imgpathese,
    type: "image",
    link: "https://newcity-git-main-golusiddharth88-2687s-projects.vercel.app/"
  },
  {
    title: "Tic-Tac-Toe game",
    category: "Web Development",
    description:
      "It features a clean, responsive 3×3 grid layout, intuitive turn-based logic, automatic win/draw detection, and a convenient restart button.",
    tech: ["Html", "Css", "JavaScript"],
    media: imgpath,
    type: "image",
    link: "https://golukumar2156.github.io/tic_game/"
  },
  {
    title: "Github Profile Finder",
    category: "Web Development",
    description:
      "Real-time GitHub user data fetch. Smooth UI with animated transitions. Responsive design with modern styling. Displays avatar, name, company, followers.",
    tech: ["Html", "Css", "JavaScript"],
    media: imgpathe,
    type: "image",
    link: "https://golukumar2156.github.io/githubdetails/"
  },
  {
    title: "Currency Converter",
    category: "Web Development",
    description:
      "In a world where exchange rates shift every second, staying updated is crucial. Our tool ensures users get accurate, real-time conversions with a smooth and intuitive experience.",
    tech: ["Html", "Css", "JavaScript"],
    media: imgpathes,
    type: "image",
    link: "https://golukumar2156.github.io/currecy_App/"
  },
  {
    title: "Rock-Paper-Scissors Game!",
    category: "Web Development",
    description:
      "Interactive design with hover effects. Real-time score tracking for both user and computer. A clear message system for results (win, lose, draw).",
    tech: ["Html", "Css", "JavaScript"],
    media: imgpathess,
    type: "image",
    link: "https://golukumar2156.github.io/game/"
  },
];

function Projects() {
  return (
    <div className="md:pt-50 pt-40 px-4 pb-10">
      <h1 className="text-center text-[#d4ae32] lg:text-6xl text-2xl font-extrabold mb-4">
        My Projects
      </h1>
      <div className="text-center lg:text-xl md:text-xl pt-2">
        A collection of projects that showcase my expertise in web development and Full-Stack Java development with foundations in modern responsive
      </div>
      <div className="text-center lg:text-xl md:text-xl py-2">
        web and scalable solutions. Passionate about solving real-world problems through thoughtful, user-centric development.
      </div>

      <div className="grid grid-cols-1 px-3 xl:pl-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="max-w-lg mx-auto bg-gradient-to-r from-[#a8d7c8] to-[#13b0a3] transition-transform duration-400 ease-in-out hover:-translate-y-1.5 hover:scale-105 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
          >
            <div className="relative h-48">
              {proj.type === "video" ? (
                <video
                  src={proj.media}
                  controls
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover rounded-t-lg"
                />
              ) : (
                <img
                  src={proj.media}
                  alt={proj.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              )}
              <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
                Featured
              </span>
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase mb-2">{proj.category}</p>
                <h3 className="text-2xl font-semibold text-green-600 mb-2">{proj.title}</h3>
                <p className="text-gray-700 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((techItem, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded px-4 py-2 mt-2">
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  view
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
