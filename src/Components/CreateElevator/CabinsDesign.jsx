import React, { useState } from 'react';
import generalImg from '../../assets/elevator/cabins-home.jpg';
import hotelImg from '../../assets/elevator/cabins-hotel.jpg';
import villaImg from '../../assets/elevator/cabins-home.jpg';
import officeImg from '../../assets/elevator/cabins-office.jpg';

export default function CabinsDesign({ cabin }) {
  const type = ["General", "Hotel Lobby", "Villa", "Office"];

  
  const [currentImg, setCurrentImg] = useState(generalImg);


  const imagesMap = {
    General: generalImg,
    "Hotel Lobby": hotelImg,
    Villa: villaImg,
    Office: officeImg,
  };

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="lg:w-[60%]  md:w-1/2 mt-36">
        <h5 className="font-bold text-4xl ml-14 mb-10">{cabin.name}</h5>

        <div>
          <span className="font-bold text-xl ml-14">Environment</span>
          <div className="ml-14 flex flex-row flex-wrap mt-4">
            {type.map((item) => (
              <button
                key={item}
                className="bg-gray-100 font-medium px-6 py-3 mt-2 mr-2"
                onClick={() => setCurrentImg(imagesMap[item])} 
              >
                {item}
              </button>
            ))}
          </div>
        </div>


      
      </div>

      <div className="lg:w-[100%] h-[77vh] md:w-1/2 flex justify-center items-start mt-8 md:mt-0">
        <img src={currentImg} alt={cabin.name} className="w-full h-auto object-cover " />
        <img
          src={cabin.img}
          alt="Elevator cabin"
          className=" absolute lg:w-[38.2%] right-[-1px] top-[-92px] md:w-1/2 flex justify-center items-start mt-8 md:mt-0"
        />
      </div>
    </div>
  );
}
