 import React from "react";
import { FaLocationArrow } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="xl:w-[1450px] xl:h-[300px] xl:ml-[44px] xl:mt-[10px]  lg:h-[300px] lg:w-[955px]  lg:ml-[25px] md:h-[220px] md:w-[715px]  md:ml-[25px]  h-[260px] w-[350px]  ml-[20px] mt-[10px] bg-gradient-to-r from-[#33565c] to-[#279e94] rounded-xl shadow-lg   transition delay-40 duration-400 ease-in-out hover:-translate-y-1.5 hover:scale-102 hover:border-green-400  shadow-blue-400/80  ">
        <div>
          <h1 className="xl:pl-[520px] xl:pt-[40px] xl:text-[40px] lg:pl-[300px] lg:pt-[30px] lg:text-[35px] md:pl-[170px] md:pt-[30px] md:text-[30px] pl-[20px] pt-[20px] text-[25px] font-[800]  text-gray-300">
            Ready to Start a Project?
          </h1>
        </div>
        <div className=" xl:pt-[6px]  xl:text-[20px] lg:text-[20px] md:text-[15px] text-[15px] text-[#c0e6ec] font-[400] ">
          <p className="hidden sm:block xl:pl-[400px] lg:pl-[160px] lg:pt-[10px] md:pl-[90px] md:pt-[5px]">
            I'm always excited to work on new database projects and learn from
            experienced
          </p>
          {/*first for mobile  */}
          <p className="sm:hidden pl-[25px] pt-[10px] ">
            I'm always excited to work on new database <br /> <p className="pl-[25px]">projects and learn from experienced</p>
          </p>
          {/* end of mobile */}
          <p className=" hidden sm:block xl:pl-[490px] lg:pl-[250px] lg:pt-[5px] md:pl-[155px] md:pt-[5px]">
            developers. Let's discuss how I can contribute to your team!
          </p>
          {/* second for mobile  */}
           <p className="sm:hidden pl-[20px] pt-[5px]">
            developers. Let's discuss how I can contribute <br /> <p className="pl-[90px]">to your team!</p>
          </p>
          {/* end of mobile */}
          <div className="flex sm:gap-10 gap-5 justify-center xl:mt-[15px]    lg:mt-[30px]   md:mt-[20px]  mt-[25px]">
            <button className="bg-gray-300 hover:text-black  duration-1000 cursor-pointer hover:bg-gradient-to-r from-[#bcc5c6] to-[#79e0d7] text-[#2a474c]   xl:py-2  lg:py-2  lg:px-5 md:px-4 md:py-2 px-2 py-1    rounded hover:bg-gray-800">
             <div className="flex items-center gap-3">
                 Get In Touch
                 <FaLocationArrow />
             </div>
            </button>
            <button className="bg-gray-300 hover:text-black  duration-1000 cursor-pointer hover:bg-gradient-to-r from-[#bcc5c6] to-[#79e0d7] text-[#2a474c]   xl:py-2  xl:px-6 lg:py-2  lg:px-6 md:px-4 md:py-2 px-3 py-1  rounded hover:bg-gray-800">
              View My Project 
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between  xl:h-[50px]  w-full bg-gray-700 mt-[60px] xl:rounded-t-[10px]">
      <p className="text-[#c0e6ec] font-[500] xl:pt-[5px] xl:pl-[5px]">All rights reserved</p>
      <p className="text-[#c0e6ec] font-[500] xl:pt-[5px] xl:pr-[5px]">© 2023 Golu Siddharth</p>
      </div>
    </div>
  );
}

export default Footer;
