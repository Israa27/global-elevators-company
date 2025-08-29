import React from 'react'
import { useTranslation } from "react-i18next";
import img from '../assets/elevator1.jpg'
import img2 from '../assets/elevator2.jpg'

export default function NewsSection() {
  const { t } = useTranslation();
  return (
    <section id='about' className='mx-5 md:mx-10 mt-20 min-h-[80vh] relative'>
      {/*text */}
      <div className='mb-10 md:mb-16 text-center md:text-left'>
        <h2 className='text-2xl md:text-3xl font-bold mb-2'>{t("about.title")}</h2>
        <p className='max-w-md mx-auto md:mx-0 text-gray-600'>{t("about.subtitle")}</p>
      </div>

       {}
 
      <div className="relative w-full flex justify-center md:justify-start py-20">
      <div className="absolute top-0 sm:-top-0 md:-top-0 lg:-top-56 right-[23rem] sm:right-[24rem] md:right-40 lg:right-[25rem]">
        <img
          className="w-36 h-52 sm:w-44 sm:h-64 md:w-56 md:h-80 lg:w-72 lg:h-96 rounded-lg shadow-lg object-cover"
          src={img}
          alt="Elevator 1"
        />
      </div>

      <div className="absolute top-0 sm:-top-0 md:-top-0 lg:-top-40 right-1 sm:right-24 md:right-16 lg:right-10">
        <img
          className="w-32 h-48 sm:w-40 sm:h-64 md:w-52 md:h-72 lg:w-72 lg:h-96 rounded-lg shadow-lg object-cover"
          src={img2}
          alt="Elevator 2"
        />
      </div>
      </div>
    </section>
  );


   
  
}
