import React, { useState } from "react";
import { GiWeight } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import img1 from "../../assets/elevator/cabins5.png";
import img2 from "../../assets/elevator/cabins2.png";
import img3 from "../../assets/elevator/cabins3.png";
import img4 from "../../assets/elevator/cabins4.png";

export default function Cabins({setSelectedCabin,setActiveComponent}) {
  const cabins = [
    {
      id: 1,
      name: "Life Desire",
      img: img1,
      weight: "Up to 1000 KG",
      persons: "Up to 16 persons",
      type: "Life Desire",
    },
    {
      id: 2,
      name: "City Life",
      img: img2,
      weight: "Up to 800 KG",
      persons: "Up to 10 persons",
      type: "City Life",
    },
    {
      id: 3,
      name: "Life Shine",
      img: img3,
      weight: "Up to 600 KG",
      persons: "Up to 8 persons",
      type: "Life Shine",
    },
    {
      id: 4,
      name: "Mini Life",
      img: img4,
      weight: "Up to 100 KG",
      persons: "Up to 3 persons",
      type: "Life Shine",
    },
  ];

  //type
  const types = ["Life Desire","Life Shine", "City Life"];

  const [selectedType, setSelectedType] = useState("Life Desire");

  // filter
  const filteredCabins =
    selectedType === "Life Desire"
      ? cabins
      : cabins.filter((cabin) => cabin.type === selectedType);

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
        {filteredCabins.length > 0 ? (
          filteredCabins.map((cabin) => (
            <div
              key={cabin.id}
              className=" p-4 w-[250px] text-left"
            >
              <img
                src={cabin.img}
                alt={cabin.name}
                onClick={() => {
                setSelectedCabin(cabin); 
                setActiveComponent("cabin-design"); 
               
            }}
                className="w-[200px] h-[250px] object-cover bg-[#eee] rounded mx-auto"
              />
              <h2 className="text-xl font-bold mt-4">{cabin.name}</h2>
              <p className="text-lg mt-2 flex flex-row items-center">
                <GiWeight className="mr-2 text-xl "/>
                {cabin.weight}</p>
              <p className="text-lg mt-2 flex flex-row items-center">
                <IoIosPeople className="mr-2 text-xl "/>
                 {cabin.persons}</p>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-500">
            Not Found -_-({selectedType})
          </p>
        )}
      </div>
    </div>
  );
}
