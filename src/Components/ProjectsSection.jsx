import React from 'react'
import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import img from '../assets/Desktop.png'
export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });
  return (
    <div className=' mx-10 '>
       <div className='mb-10' >
            <h2 className='text-3xl font-bold'>{t("projects.title")}</h2>
            <p className='w-80'>{t("projects.subtitle")}</p>
              </div>
        <div className="grid grid-cols-3 grid-rows-1  gap-4 relative ">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-[#E8E9E9] shadow rounded-2xl">
            <img src={img} alt='' className='mb-5'/>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 w-[90%]">{project.desc}</p>
          </div>
        ))}
           <div className="absolute bottom-0 left-0  flex flex-col gap-2 items-center">
                <div className="flex gap-4">
                  <div className="bg-gray-100 p-2 rounded-full absolute bottom-[-1rem] left-[24rem] ">
                  <div className="bg-[#0E324D]  p-4 rounded-full ">
                     <MdArrowOutward className='text-white text-2xl'/>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-full absolute bottom-[-1rem] left-[52rem] ">
                    <div className="bg-[#0E324D] p-4 rounded-full ">
                     <MdArrowOutward className='text-white text-2xl'/>
                    </div>
                  </div>
                   <div className="bg-gray-100 p-2 rounded-full absolute bottom-[-1rem] left-[82rem] ">
                  <div className="bg-[#0E324D] p-4 rounded-full ">
                    <MdArrowOutward className='text-white text-2xl'/>
                    </div>
                  </div>
                </div>
                
              </div>
      </div>
    
    </div>
  )
}
