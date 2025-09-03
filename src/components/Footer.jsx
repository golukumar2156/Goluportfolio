import React from "react";
import { FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <div className="">
<div className="w-full max-w-[1450px] mx-auto  mt-4 px-4 min-h-[230px] bg-gradient-to-r from-[#33565c] to-[#279e94] rounded-xl shadow-lg transition delay-40 duration-400 ease-in-out hover:-translate-y-1.5 hover:scale-102 hover:border-green-400 shadow-blue-400/80">
        <div>
          <h1 className="text-center pt-6 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-300">
            Ready to Start a Project?
          </h1>
        </div>

        <div className="pt-3 text-sm md:text-base lg:text-lg text-[#c0e6ec] font-[400] text-center px-4">
          {/* Desktop */}
          <p className="hidden sm:block">
            I'm always excited to work on new database projects and learn from
            experienced
          </p>
          {/* Mobile */}
          <p className="sm:hidden">
            I'm always excited to work on new database <br />
            projects and learn from experienced
          </p>

          {/* Desktop */}
          <p className="hidden sm:block">
            developers. Let's discuss how I can contribute to your team!
          </p>
          {/* Mobile */}
          <p className="sm:hidden">
            developers. Let's discuss how I can contribute <br />
            to your team!
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 sm:gap-10 mt-6">
            <button className="bg-gray-300 hover:text-black font-[600] duration-1000 cursor-pointer hover:bg-gradient-to-r from-[#bcc5c6] to-[#79e0d7] text-[#2a474c] py-2 px-4 md:px-6 md:py-2 rounded hover:bg-gray-800">
              <div className="flex items-center gap-3">
                Get In Touch
                <FaLocationArrow />
              </div>
            </button>
            <button className="bg-gray-300 hover:text-black font-[600] duration-1000 cursor-pointer hover:bg-gradient-to-r from-[#bcc5c6] to-[#79e0d7] text-[#2a474c] py-2 px-4 md:px-6 md:py-2 rounded hover:bg-gray-800">
              View My Project
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-[50px] w-full bg-gray-700 mt-10 rounded-t-lg px-4 py-2">
        <p className="text-[#c0e6ec] font-[500] text-center sm:text-left">
          All rights reserved
        </p>
        <p className="text-[#c0e6ec] font-[500] text-center sm:text-right">
          © 2023 Golu Siddharth
        </p>
      </div>
    </div>
  );
}

export default Footer;
