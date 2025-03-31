
import Properties from "../components/Properties";

const HomePage = ({propertyData}) => {
 
  return (
    <div className="home-page">
          <Properties propertyData={propertyData} />
    </div>
  );
};

export default HomePage;
