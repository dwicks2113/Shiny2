
import Properties from "../components/Properties";
// import Banner from "../components/Banner";

const HomePage = ({propertyData}) => {
  console.log("Rendering HomePage");
  return (
    <div className="home-page">
    {/* <Banner customClass='home-banner' /> */}
       <Properties propertyData={propertyData} />
    </div>
  );
};

export default HomePage;
