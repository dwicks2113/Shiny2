import './Property.css';


const Property = ({ title, img }) => {
    console.log('Rendering Property:', title);
   const propertyStyle = {
     backgroundImage: `url(${img})`
   }

return (
   <div className='property' style={propertyStyle}>
     <div className='property-title'>{title}</div>
    </div>
    );
};

   export default Property;