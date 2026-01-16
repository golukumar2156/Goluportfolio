import React from "react";

function SkillsCard() {
  const skills = [
       {
      title: "Backend Development",
      tools: [
        "Java",
        "SpringBoot",
        "Spring Data JPA",
        "Lombok",
        "MySQL",
      ]
    },
    {
      title: "Frontend Development",
      tools: [
        "HTML5",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Redux/Context API"
      ]
    }, 
    {
      title: "Core CS Concepts",
      tools: [
        "C and C++",        
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Operating System",
        "Database Management System"
      ]
    },
  ];
  return (
    <div className=" md:py-[40px] md:px-4 px-2 pt-[50px] ">
      <h1 className="text-4xl xl:pb-[20px] xl:pt-[60px] md:pt-[100px] lg:pt-[90px] font-bold text-black text-center ">
        Technical Skills
      </h1>

      <div className="md:flex md:gap-[10px] mb-4 lg:gap-[30px] xl:gap-[80px] xl:px-[10px] py-3 px-3 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mt-[30px]  bg-gradient-to-r from-[#46818b] to-[#0F766E]  rounded-xl shadow-lg p-6 xl:w-[400px]  
             transition-transform duration-400 ease-in-out 
             hover:-translate-y-1.5 hover:scale-105 focus:scale-105 active:scale-105   hover:border-green-400  shadow-blue-400/50  xl:ml-[27px] "
          >
            <h4 className="text-2xl font-semibold text-black mb-4">
              {skill.title}
            </h4>
            <ul className="flex flex-col gap-4">
              {skill.tools.map((tool, idx) => (
                <li
                  key={idx}
                  className="from-blue-900 rounded-lg p-4 shadow-md flex flex-col"
                >
                  <strong className="text-black">{tool}</strong>
                  <small className="text-black">{skill.level}</small>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
