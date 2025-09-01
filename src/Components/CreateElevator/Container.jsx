import { useState } from "react";
import MainNav from "./MainNav";
import Welcome from "./Welcome";
import Doors from "./Doors";
import Cabins from "./Cabins";
import CabinDesign from "./CabinsDesign";
import DoorsDesign from "./DoorsDesign";

export default function Container() {
  const [activeComponent, setActiveComponent] = useState("welcome");
  const [selectedCabin, setSelectedCabin] = useState(null);
  const [selectedDoor, setSelectedDoor] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case "welcome":
        return <Welcome />;
      case "doors":
        return <Doors setSelectedDoor={setSelectedDoor} 
            setActiveComponent={setActiveComponent}/>;
      case "cabins":
        return (
          <Cabins 
            setSelectedCabin={setSelectedCabin} 
            setActiveComponent={setActiveComponent} 
          />
        );
      case "cabin-design":
        return <CabinDesign cabin={selectedCabin} />;
          case "door-design":
        return <DoorsDesign door={selectedDoor} />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="flex flex-col relative">
      <MainNav setActiveComponent={setActiveComponent} />
      <div className="w-full">
        {renderComponent()}
      </div>
    </div>
  );
}
