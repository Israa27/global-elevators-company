import React from 'react'
import { useTranslation } from "react-i18next";
import img from '../assets/map2.png'
export default function ContcatSection() {
  const { t } = useTranslation();
  return (
    <div id='contcat'className='mb-20'>
      <div className='mx-10 mt-10 '>
      <h2 className='text-3xl font-bold'>{t("contact.title")}</h2>
          <p className='w-80'>{t("contact.subtitle")}</p>
      </div>
      <div className='flex flex-row items-center bg-[#012948] w-full h-[90vh] mt-5 py-5 px-10'>
        <form className='bg-white w-[30%] h-[70vh] rounded flex flex-col items-center mt-4 pt-10'>
          <input type='text' className='bg-[#d1d0d0] w-[80%] h-12 rounded px-5 mb-4  ' placeholder='Your Name..'/>
          <input type='email' className='bg-[#d1d0d0] w-[80%] h-12 rounded px-5 mb-4  ' placeholder='Your Email..'/>
          <textarea cols={3} rows={10} className='bg-[#d1d0d0] w-[80%]  rounded px-5 py-2 mb-4' placeholder='Your Message..'/>
          <button className='bg-[#001C30] text-white font-medium w-[80%] h-12 rounded px-5 mb-4'>Send Message</button>
        </form>
        <div className='w-[70%] '>
          <img src={img} alt=''/>
        </div>
      </div>
    </div>
  )
}
