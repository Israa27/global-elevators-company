import React from 'react'
import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import img from '../assets/Desktop.png'

export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  return (
    <section id='projects' className='mx-10'>
      <div className='mb-10'>
        <h2 className='text-3xl font-bold'>{t("projects.title")}</h2>
        <p className='w-80'>{t("projects.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {projects.map((project, index) => (
          <div key={index} className="relative p-6 bg-[#E8E9E9] shadow rounded-2xl">
            <img src={img} alt='' className='mb-5'/>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 w-[90%]">{project.desc}</p>

      
            <div className="absolute bottom-[-1rem] right-[-1rem]">
              <div className="bg-gray-100 p-2 rounded-full">
                <div className="bg-[#0E324D] p-4 rounded-full">
                  <MdArrowOutward className='text-white text-2xl'/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
