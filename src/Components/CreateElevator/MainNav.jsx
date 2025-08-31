import React from 'react'
import logo from '../../assets/logo.png'
import { IoMdArrowDropdown } from "react-icons/io";
export default function MainNav({setActiveComponent }) {
  return (
    <div className='z-50'>
        <div className=' absolute  left-8 mt-1 flex items-center gap-2  font-bold py-8 uppercase'>
                <img src={logo}  onMouseEnter={()=>setActiveComponent("welcome")} loading="lazy" className='lg:w-40 w-40' alt="Logo" />
            </div>
            <div className=" absolute left-60 mt-12 flex flex-row">
                  <button onClick={()=>setActiveComponent("cabins")} className="bg-[#0E324D] text-white font-medium px-8 py-3 flex flex-row items-center justify-center ">
                    Cabins 
                    <IoMdArrowDropdown  className="ml-1 mt-1"/>
                   </button>
                  <button  onClick={()=>setActiveComponent("doors")} className="bg-[#0E324D] text-white font-medium px-8 py-3  flex flex-row items-center justify-center">
                    Doors 
                    <IoMdArrowDropdown className="ml-1 mt-1" />
                  </button>
              </div>
    </div>
  )
}
