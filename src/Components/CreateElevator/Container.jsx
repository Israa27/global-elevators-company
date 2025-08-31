import { useState } from "react";
import MainNav from "./MainNav";
import Welcome from "./Welcome";
import Doors from "./Doors";
import Cabins from "./Cabins";
import CabinDesign from "./CabinsDesign";

export default function Container() {
  const [activeComponent, setActiveComponent] = useState("welcome");
  const [selectedCabin, setSelectedCabin] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "welcome":
        return <Welcome />;
      case "doors":
        return <Doors />;
      case "cabins":
        return (
          <Cabins 
            setSelectedCabin={setSelectedCabin} 
            setActiveComponent={setActiveComponent} 
          />
        );
      case "cabin-design":
        return <CabinDesign cabin={selectedCabin} />;
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
