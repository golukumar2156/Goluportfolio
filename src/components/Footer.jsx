import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
function Footer() {
  const location=useLocation();

  return (
    <div>
      {/* Footer card */}
      <div className="mx-4 md:mx-6 lg:mx-10 xl:mx-9 xl:ml-13 bg-gradient-to-r from-[#33565c] to-[#279e94] rounded-xl p-6 shadow-lg text-center">
        <h1 className="text-[25px] md:text-[30px] lg:text-[35px] font-[800] text-gray-300">
          Ready to Start a Project?
        </h1>
        <p className="text-[#c0e6ec] mt-3 text-[15px] md:text-[17px]">
          I'm always excited to work on new database projects and learn from
          experienced developers. Let's discuss how I can contribute to your
          team!
        </p>
        <div className="flex justify-center gap-5 mt-6">
          <div className="flex  justify-center gap-5 sm:mt-4">
            {/* Contact page link */}
           {
              location.pathname==="/contact"?null:
               <NavLink
              to="/contact"
              className="bg-gray-300 px-4 py-1 text-[10px] sm:text-[15px] rounded flex items-center gap-2 hover:bg-gray-400 transition"
            >
              Get In Touch <FaLocationArrow />
            </NavLink>
           }

            {/* Project page link */}
            {
              location.pathname==="/project"?null:
              <NavLink
              to="/project"
              className="bg-gray-300 px-4 py-2  text-[10px] sm:text-[15px] rounded hover:bg-gray-400 transition"
            >
              View My Project
            </NavLink>
            }
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center md:gap-5 h-[50px] w-full bg-gray-700 mt-[60px] rounded-t-lg">
        <p className="text-[#c0e6ec] font-[500]">All rights reserved</p>
        <p className="text-[#c0e6ec] font-[500]">© 2025 Golu Siddharth</p>
      </div>
    </div>
  );
}

export default Footer;
