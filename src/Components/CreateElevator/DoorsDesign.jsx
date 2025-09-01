import React, { useState } from 'react';
import generalImg from '../../assets/elevator/home.jpg';
import hotelImg from '../../assets/elevator/hotel.jpg';
import villaImg from '../../assets/elevator/villa.jpg';
import officeImg from '../../assets/elevator/doors-office.jpg';

import materialImg from '../../assets/elevator/doorCol.png';
import materialImg2 from '../../assets/elevator/doorCol1.png';
import materialImg3 from '../../assets/elevator/doorCol2.png';

import colorImg from '../../assets/elevator/color.jpg';
import colorImg2 from '../../assets/elevator/color2.jpg';
import colorImg3 from '../../assets/elevator/color3.jpg';

export default function DoorsDesign({ door }) {
  const type = ["General", "Hotel Lobby", "Villa", "Office"];
  const [currentEnv, setCurrentEnv] = useState(generalImg);  
  const [currentMaterial, setCurrentMaterial] = useState(null); 

  const imagesMap = {
    General: generalImg,
    "Hotel Lobby": hotelImg,
    Villa: villaImg,
    Office: officeImg,
  };

  const material = [
    { id: 1, name: 'Brass', img: materialImg, color: colorImg },
    { id: 2, name: 'Ambre Gold', img: materialImg2, color: colorImg2 },
    { id: 3, name: 'Anthracite', img: materialImg3, color: colorImg3 }
  ];

  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div className="lg:w-[60%]  md:w-1/2 mt-36">
        <h5 className="font-bold text-4xl ml-14 mb-10">{door.name}</h5>

        {/* choose environment*/}
        <div>
          <span className="font-bold text-xl ml-14">Environment</span>
          <div className="ml-14 flex flex-row flex-wrap mt-4">
            {type.map((item) => (
              <button
                key={item}
                className="bg-gray-100 font-medium px-6 py-3 mt-2 mr-2"
                onClick={() => setCurrentEnv(imagesMap[item])}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

         {/* choose color*/}
        <div className="mt-24">
          <span className="font-bold text-xl ml-14 ">Door Frame</span>
          <div className="ml-14 flex flex-row flex-wrap mt-4">
            {material.map((item) => (
              <button
                key={item.id}
                className="bg-gray-100 font-medium px-4 py-2 mt-2 mr-2 flex flex-col items-center"
                onClick={() => setCurrentMaterial(item.img)}
              >
                {/* imge of color*/}
                <img src={item.color} alt={item.name} className="w-12 h-12 rounded mb-1" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* */}
      <div className="lg:w-[100%] md:w-1/2 h-screen relative flex justify-center items-start mt-8 md:mt-0">
        {/* */}
        <img
          src={currentEnv}
          alt="Environment"
          className="w-full h-full object-cover"
        />

       
        {!currentMaterial && (
          <img
            src={door.img}
            alt="Elevator cabin"
            className="absolute w-[76%] h-[140vh] top-[-20%] right-[-9%]"
          />
        )}

        {currentMaterial && (
          <img
            src={currentMaterial}
            alt="Door Material"
            className="absolute w-[100%] h-[100vh] top-[1%] right-[-6%]"
          />
        )}

      </div>
    </div>
  );
}
