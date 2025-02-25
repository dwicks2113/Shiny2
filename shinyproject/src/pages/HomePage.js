import { useEffect } from "react";
import Property from "../components/Property";
import Gallery from "../Gallery.json";
import properties from "../components/Properties";
import { useState } from "react";
import Properties from "../components/Properties";

const HomePage = () => {
  // const [propertyList, setPropertyList] = useState([]);

  // useEffect(() => {
  //   setPropertyList(properties);
  // }, []);

  return (
    <div className="home-page">
      
    <Properties />
    </div>
  );
};



export default HomePage
