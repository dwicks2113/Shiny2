
import Properties from "../components/Properties";


const HomePage = ({propertyData}) => {
  console.log("Rendering HomePage");
  return (
    <div className="home-page">
          <Properties propertyData={propertyData} />
    </div>
  );
};

export default HomePage;
