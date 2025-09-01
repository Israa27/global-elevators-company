import React from 'react'
import img from '../../assets/elevator/background.jpg'
export default function Welcome() {
  return (
    <div className='min-h-screen '>
        <img src={img} className='w-[100%] h-[100vh] opacity-30' alt=''/>
        <div className=" absolute px-4 py-4 w-[30%] h-[35%]  left-56 top-32 bg-white rounded shadow-sm">
        <span className="bg-white w-6 h-6  absolute -top-2 left-52 rotate-45"></span>
        <h3 className="font-bold text-2xl text-[#0E324D]">Welcome to Global Configurator</h3>
        <p className="text-gray-600 mt-2">Create your Lift! Please select a product.</p>
        <button className="bg-orange-400 hover:bg-orange-500 mt-4  absolute right-4 text-white px-6 py-1 rounded-full">Got it!</button>
      </div>
    </div>
  )
}
