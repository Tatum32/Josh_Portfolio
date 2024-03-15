import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div><h1 className="text-red-500  mb-20 w-full text-2xl font-bold  pl-[45%] mx-auto absolute">My Skills</h1>
    <div className='flex flex-row flex-wrap justify-center gap-4'>
      
      {technologies.map((technology) => (
        <div className='w-40 h-28' key={technology.name}>
          <p className="text-center w-50 rounded-lg shadow-lg h-20 bg-white text-black font-semibold px-1 py-4">{technology.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
