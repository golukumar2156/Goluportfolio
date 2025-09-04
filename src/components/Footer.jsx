 import React from "react";
import { FaLocationArrow } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="w-full max-w-[1450px] h-auto mx-auto mt-3 
  bg-gradient-to-r from-[#33565c] to-[#279e94] 
  rounded-xl shadow-lg transition duration-400 ease-in-out 
  hover:-translate-y-1.5 hover:scale-102 hover:border-green-400 
  shadow-blue-400/80 p-5">
  
  <h1 className="text-center text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[800] text-gray-300 mt-4">
    Ready to Start a Project?
  </h1>

  <div className="text-center text-[15px] md:text-[15px] lg:text-[20px] xl:text-[20px] text-[#c0e6ec] font-[400] mt-3">
    <p>
      I'm always excited to work on new database projects and learn from
      experienced developers. Let's discuss how I can contribute to your team!
    </p>
  </div>

  <div className="flex justify-center gap-5 mt-6">
    <button className="bg-gray-300 hover:text-black font-[600] duration-1000 cursor-pointer 
      hover:bg-gradient-to-r from-[#bcc5c6] to-[#79e0d7] text-[#2a474c] 
      px-4 py-2 rounded hover:bg-gray-800 flex items-center gap-2">
      Get In Touch <FaLocationArrow />
    </button>

    <button className="bg-gray-300 hover:text-black font-[600] duration-1000 cursor-pointer 
      hover:bg-gradient-to-r from-[#bcc5c6] to-[#79e0d7] text-[#2a474c] 
      px-4 py-2 rounded hover:bg-gray-800">
      View My Project
    </button>
  </div>
</div>

<div className="flex justify-center items-center gap-5 h-[50px] w-full bg-gray-700 mt-[60px] rounded-t-lg">
  <p className="text-[#c0e6ec] font-[500]">All rights reserved</p>
  <p className="text-[#c0e6ec] font-[500]">© 2023 Golu Siddharth</p>
</div>

    </div>
  );
}

export default Footer;
