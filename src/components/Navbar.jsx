import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
function Navbar() {

  const [toggle, setToggle] = useState(false);
  const menu1 = [["flex", "items-center", "gap-1","text-[16px]"], ["text-black"]];
  const menu2 = [["flex", "items-center","p-[17px]", "gap-1"], ["text-black"]];
  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* START :this navbar for Desktop and laptop */}
      <div className=" flex bg-gradient-to-r from-[#1E293B] to-[#0F766E]  justify-between items-center font-bold xl:px-2 xl:py-3 px-4 py-5 pl-[20px] pr-[30px]">
        <div className="xl:pl-[40px] xl:text-2xl text-green-400">Hey Everyone's</div>
        <ul className="hidden md:flex gap-20 text-black text-md p-4 ">
          <li>
           <NavLink to="/"  className={({ isActive }) =>
          isActive ? "bg-blue-500 font-bold px-[10px] py-[2px] rounded-lg duration-700" : "text-black"
        }>Home</NavLink>
          </li>
          <li>
         <NavLink to="/about"  className={({ isActive }) =>
          isActive ? "bg-blue-500 font-bold px-[10px] py-[2px] rounded-lg duration-700" : "text-black"
        }>About me</NavLink>
          </li>
          <li>
           <NavLink to="/contact"  className={({ isActive }) =>
          isActive ? "bg-blue-500 font-bold px-[10px] py-[2px] rounded-lg duration-700" : "text-black"
        }>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/project"  className={({ isActive }) =>
          isActive ? "bg-blue-500 font-bold px-[10px] py-[2px] rounded-lg duration-700" : "text-black"
        }>Project</NavLink>
          </li>
        </ul>
     {/* END: */}

        {/*START: Mobile rersponsive menu */}
        <ul className={`md:hidden duration-700 bg-gradient-to-r from-[#295e65] to-[#0F766E] p-[15px] fixed right-0 w-[40%] h-[20%] rounded-2xl text-yellow-400 top-[60px]  ${toggle ? "right-[0]" : "right-[-100%]" }`}>
              <li>
           <NavLink to="/"  className={({ isActive }) =>
          isActive ? "bg-blue-500 font-bold px-[10px] py-[2px] rounded-lg duration-700" : "text-black"
        }>Home</NavLink>
          </li>
          <li className="pt-[10px]">
         <NavLink to="/about"  className={({ isActive }) =>
          isActive ? "bg-blue-500 font-bold px-[10px] py-[2px] rounded-lg duration-700" : "text-black"
        }>About me</NavLink>
          </li>
          <li className="pt-[10px]">
           <NavLink to="/contact"  className={({ isActive }) =>
          isActive ? "bg-blue-500 font-bold px-[10px] py-[2px] rounded-lg duration-700" : "text-black"
        }>Contact</NavLink>
          </li>
          <li className="pt-[10px]">
            <NavLink to="/project"  className={({ isActive }) =>
          isActive ? "bg-blue-500 font-bold px-[10px] py-[2px] rounded-lg duration-700" : "text-black"
        }>Project</NavLink>
          </li>
        </ul>
        {/* END: */}

        <div className="md:hidden text-2xl">
          {toggle ? (
            <RxCross2 
              className="cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <MdMenu
              className="cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default Navbar;
