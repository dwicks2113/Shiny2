
import Properties from "../components/Properties";

const HomePage = ({propertyData}) => {
  console.log("Rendering HomePage");
  return (
    <div className="home-page">
    <div className="Banner home-banner"></div>
     <Properties propertyData={propertyData} />
    </div>
  );
};

export default HomePage;
