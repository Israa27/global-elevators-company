import React from 'react'
import { LuCamera } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FiMaximize } from "react-icons/fi";
export default function RightSideBtns() {
 
  return (
    <div className="fixed top-1/3 right-5 flex flex-col gap-4 z-50">

      <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100">
        <FiMaximize className="w-6 h-6 text-gray-700" />
      </button>

      <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100">
        <LuCamera className="w-6 h-6 text-gray-700" />
      </button>

      <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100">
        <FaRegFilePdf className="w-6 h-6 text-gray-700" />
      </button>


      <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100">
        <FaLink className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );


  
}

