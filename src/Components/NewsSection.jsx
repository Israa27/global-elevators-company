import React from 'react'
import { useTranslation } from "react-i18next";
import img from '../assets/elevator1.jpg'
import img2 from '../assets/elevator2.jpg'
export default function NewsSection() {
  const { t } = useTranslation();
  return (
    <section id='about' className='mx-10 mt-20 h-[80vh]'>
      <div>
      <h2 className='text-3xl font-bold'>{t("about.title")}</h2>
          <p className='w-80'>{t("about.subtitle")}</p>
      </div>
      <div className='relative '>
        <div className='absolute top-[-14rem] right-[30rem]'> <img  className='w-72 h-96 rounded' src={img} alt=''/></div>
         <div className='absolute  top-[-10rem] right-[7rem]'> <img  className='w-72 h-96 rounded' src={img2} alt=''/></div>
       
      </div>
    </section>
  )
}
