import React, { useState } from "react";
import { GiWeight } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import img1 from "../../assets/elevator/doors1.jpg";
import img2 from "../../assets/elevator/doors2.jpg";
import img3 from "../../assets/elevator/doors3.jpg";
import img4 from "../../assets/elevator/doors4.jpg";

export default function Doors() {
    const doors = [
        {
          id: 1,
          name: "Life Desire",
          img: img1,
          weight: "Up to 1000 KG",
          persons: "Up to 16 persons",
          type: "Swing Doors",
        },
        {
          id: 2,
          name: "City Life",
          img: img2,
          weight: "Up to 800 KG",
          persons: "Up to 10 persons",
          type: "Swing Doors",
        },
        {
          id: 3,
          name: "Life Shine",
          img: img3,
          weight: "Up to 600 KG",
          persons: "Up to 8 persons",
          type: "Sliding Doors",
        },
        {
          id: 4,
          name: "Mini Life",
          img: img4,
          weight: "Up to 100 KG",
          persons: "Up to 3 persons",
          type: "Sliding Doors",
        },
      ];

      //type
        const types = ["Sliding Doors","Swing Doors"];
      
        const [selectedType, setSelectedType] = useState("Sliding Doors");
      
        // filter
        const filteredDoors =
          selectedType === "Sliding Doors"
            ? doors
            : doors.filter((door) => door.type === selectedType);
  return (
   <div className="bg-[#f7f6f6] w-full flex flex-row">
         {/* Left side */}
         <div className="w-[25%] border-r-2 flex flex-col mt-32 border-[#eee]">
           {types.map((type) => (
             <button
               key={type}
               onClick={() => setSelectedType(type)}
               className={`w-full border-b-2 border-[#eee] font-semibold text-xl px-10 py-8 hover:bg-[#d9d9d9] ${
                 selectedType === type ? "bg-[#d9d9d9]" : ""
               }`}
             >
               {type}
             </button>
           ))}
         </div>
   
         {/* Right side */}
         <div className="flex-1 mt-32 ml-5 flex flex-wrap gap-6">
           {filteredDoors.length > 0 ? (
             filteredDoors.map((door) => (
               <div
                 key={door.id}
                 className=" p-4 w-[250px] text-left"
               >
                 <img
                   src={door.img}
                   alt={door.name}
                   className="w-[200px] h-[250px] object-cover rounded mx-auto"
                 />
                 <h2 className="text-xl font-bold mt-4">{door.name}</h2>
                 <p className="text-lg mt-2 flex flex-row items-center">
                   <GiWeight className="mr-2 text-xl "/>
                   {door.weight}</p>
                 <p className="text-lg mt-2 flex flex-row items-center">
                   <IoIosPeople className="mr-2 text-xl "/>
                    {door.persons}</p>
               </div>
             ))
           ) : (
             <p className="text-xl text-gray-500">
               Not Found -_-({selectedType})
             </p>
           )}
         </div>
       </div>
  )
}
