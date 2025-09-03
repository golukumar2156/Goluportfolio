import React from "react";

function SkillsCard() {
  return (
    <div className=" md:py-[40px] md:px-4 px-2 pt-[50px] ">
      <h1 className="text-4xl xl:pb-[20px] xl:pt-[60px] md:pt-[100px] lg:pt-[90px] font-bold text-black text-center ">
        Technical Skills
      </h1>
      <div className="md:flex md:gap-[10px] lg:gap-[30px] xl:gap-[15px] xl:px-[10px] py-3 px-3 ">
        <div className="mt-[30px]  bg-gradient-to-r from-[#46818b] to-[#0F766E]  rounded-xl shadow-lg p-6 xl:w-[400px]  transition delay-20 duration-420 ease-in-out hover:-translate-y-1.5 hover:scale-104 hover:border-green-400  shadow-blue-400/50  xl:ml-[27px] ">
          <h4 className="text-2xl font-semibold text-black mb-4">
            Forntend Development
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="from-blue-900 rounded-lg p-4 shadow-md flex flex-col">
              <strong className="text-black">HTML5</strong>
              <small className="text-black">Intermediate</small>
            </li>
            <li className="from-blue-900 rounded-lg p-4 shadow-md flex flex-col">
              <strong className="text-black">CSS</strong>
              <small className="text-black">Intermediate</small>
            </li>
            <li className="from-blue-900 rounded-lg p-4 shadow-md flex flex-col">
              <strong className="text-black">JavaScript</strong>
              <small className="text-black">Intermediate</small>
            </li>
            <li className="from-blue-900 rounded-lg p-4 shadow-md flex flex-col">
              <strong className="text-black">ReactJS</strong>
              <small className="text-black">Intermediate</small>
            </li>
            <li className="from-blue-900 rounded-lg p-4 shadow-md flex flex-col">
              <strong className="text-black">Tailwind CSS</strong>
              <small className="text-black">Intermediate</small>
            </li>
            <li className="from-blue-900 rounded-lg p-4 shadow-md flex flex-col">
              <strong className="text-black">Bootstrap</strong>
              <small className="text-black">Intermediate</small>
            </li>
          </ul>
        </div>

   <div className="mt-[30px] bg-gradient-to-r from-[#46818b] to-[#0F766E] text-white rounded-xl shadow-lg p-6 xl:w-[400px] xl:ml-[100px] transition delay-20 duration-420 ease-in-out hover:-translate-y-1.5 hover:scale-104 hover:border-green-400 shadow-blue-400/50">
  <h4 className="text-2xl font-semibold text-black mb-4">
    Backend  Development
  </h4>
  <ul className="flex flex-col gap-4">
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Java</strong>
      <small className="text-black">Intermediate</small>
    </li>
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Spring Boot</strong>
      <small className="text-black">Intermediate</small>
    </li>
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">REST APIs</strong>
      <small className="text-black">Intermediate</small>
    </li>
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">MySQL / SQL</strong>
      <small className="text-black">Intermediate</small>
    </li>
     <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Spring Data JPA</strong>
      <small className="text-black">Intermediate</small>
    </li>
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Maven </strong>
      <small className="text-black">Intermediate</small>
    </li>
  </ul>
</div>


       <div className="mt-[30px] bg-gradient-to-r from-[#46818b] to-[#0F766E] text-white rounded-xl shadow-lg p-6 xl:w-[400px] xl:ml-[100px] transition delay-20 duration-420 ease-in-out hover:-translate-y-1.5 hover:scale-104 hover:border-green-400 shadow-blue-400/50">
  <h4 className="text-2xl font-semibold text-black mb-4">
    Core CS Concepts
  </h4>
  <ul className="flex flex-col gap-4">
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Operating System (OS)</strong>
      <small className="text-black">Intermediate</small>
    </li>
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Database Management System (DBMS)</strong>
      <small className="text-black">Intermediate</small>
    </li>
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Computer Networks (CN)</strong>
      <small className="text-black">Intermediate</small>
    </li>
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Data Structures & Algorithms (DSA)</strong>
      <small className="text-black">intermediate</small>
    </li>
    <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Object Oriented Programming (OOP)</strong>
      <small className="text-black">intermediate</small>
    </li>
      <li className="rounded-lg p-4 shadow-md flex flex-col">
      <strong className="text-black">Software Engineering (SE)</strong>
      <small className="text-black">intermediate</small>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}

export default SkillsCard;
