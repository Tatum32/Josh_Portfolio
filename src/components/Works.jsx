import React from "react";
import { styles } from "../styles";
import { arrow } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div>
      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
      >
        <div className='relative w-full h-[230px] '>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl '
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={arrow}
                alt='source code'
                className='w-1/2 h-1/2 object-contain bg-white rounded-full'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
        >
          Dive into a showcase of my portfolio, where strategic prowess meets 
          creative finesse. I've spearheaded transformative journeys for clients, 
          breathing life into their online presence. From meticulously setting 
          up and curating impactful social media platforms to crafting visually 
          stunning graphic designs, optimizing SEO, driving PPC success, and 
          spearheading lead generation, I've left an indelible mark. Our 
          collaborative ventures extend to implementing robust email marketing 
          strategies, while some clients have thrived with our CRM software 
          for seamless client management. It's not just a portfolio; it's a testament 
          to the power of comprehensive digital solutions.Explore the digital landscapes we've 
          shaped, exemplified by projects like : 
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
