import React from 'react'
import img from '../assets/image.png'
import img1 from '../assets/repair.png'
import img2 from '../assets/lifting.png'
import img3 from '../assets/power.png'
import img4 from '../assets/assistant.png'
import { useTranslation } from "react-i18next";
export default function ServicesSection() {
  const { t } = useTranslation();
   const services = [
    {
      img:img1 ,
      title: t("services.items.installation.title"),
      desc: t("services.items.installation.desc"),
    },
    {
      img: img2,
      title: t("services.items.maintenance.title"),
      desc: t("services.items.maintenance.desc"),
    },
    {
      img: img3,
      title: t("services.items.modernization.title"),
      desc: t("services.items.modernization.desc"),
    },
    {
      img: img4,
      title: t("services.items.consulting.title"),
      desc: t("services.items.consulting.desc"),
    },
  ];

  return (
    <section id='services' className='flex  mt-10 mb-24  '>
      <div className='flex w-full flex-row justify-between '>
        <div >
          <h2 className='text-3xl font-bold'>{t("services.title")}</h2>
          <p className='w-80'>{t("services.subtitle")}</p>
          <img src={img} className='w-64' alt =''/>
        </div>
       
      <div className="grid grid-cols-2 grid-rows-2  gap-10 relative max-w-2xl ">
        {services.map((service,index)=>(
        <div className="bg-gray-100 p-6 rounded-lg shadow text-center flex flex-col items-center justify-center" key={index}>
          <h3 className="font-bold text-lg mb-2">{service.title}</h3>
          <p className="text-gray-600 leading-tight">{service.desc}</p>
        </div>
        ))}
       
       

  
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 items-center">
          <div className="flex gap-4">
            <div className="bg-white p-2 rounded-full ">
            <div className="bg-orange-100  p-4 rounded-full ">
              <img src={services[0].img} className='w-[50px]' alt=''/>
              </div>
            </div>
            <div className="bg-white p-2 rounded-full ">
              <div className="bg-orange-100 p-4 rounded-full ">
              <img src={services[1].img} className='w-[50px]' alt=''/>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-2 rounded-full ">
            <div className="bg-orange-100 p-4 rounded-full ">
              <img src={services[2].img}   className='w-[50px]'alt=''/>
              </div>
            </div>
            <div className="bg-white p-2 rounded-full ">
            <div className="bg-orange-100 p-4 rounded-full ">
              <img src={services[3].img} className='w-[50px]' alt=''/>
              </div>
            </div>
          </div>
        </div>
             </div>
      </div>
    </section>
  )
}
