import React from 'react'
import { useTranslation } from "react-i18next";
import img from '../assets/map2.png'

export default function ContcatSection() {
  const { t } = useTranslation();
  return (
    <div id='contcat' className='mb-20'>
      <div className='mx-5 sm:mx-10 mt-10'>
        <h2 className='text-2xl sm:text-3xl font-bold'>{t("contact.title")}</h2>
        <p className='w-full sm:w-80'>{t("contact.subtitle")}</p>
      </div>

      {/* container */}
      <div className='flex flex-col lg:flex-row items-center bg-[#012948] w-full min-h-[70vh] lg:h-[90vh] mt-5 py-5 px-5 sm:px-10 gap-5'>
        
        {/* form */}
        <form className='bg-white w-full lg:w-[30%] h-auto lg:h-[70vh] rounded flex flex-col items-center mt-4 pt-10 p-5'>
          <input 
            type='text' 
            className='bg-[#d1d0d0] w-full h-12 rounded px-5 mb-4' 
            placeholder='Your Name..'
          />
          <input 
            type='email' 
            className='bg-[#d1d0d0] w-full h-12 rounded px-5 mb-4' 
            placeholder='Your Email..'
          />
          <textarea 
            cols={3} 
            rows={6} 
            className='bg-[#d1d0d0] w-full rounded px-5 py-2 mb-4' 
            placeholder='Your Message..'
          />
          <button className='bg-[#001C30] text-white font-medium w-full h-12 rounded px-5 mb-4'>
            Send Message
          </button>
        </form>

        {/* map image */}
        <div className='w-full lg:w-[70%]'>
          <img src={img} alt='' className='w-full h-auto rounded'/>
        </div>
      </div>
    </div>
  )
}
