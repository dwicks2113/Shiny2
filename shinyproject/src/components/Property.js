import './Property.css';
import { Link } from 'react-router-dom'


const Property = ({ title, img, id }) => {
    console.log('Rendering Property:', title);
   const propertyStyle = {
     backgroundImage: `url(${img})`
   }

return (
  <Link to='./about' className='property' style={propertyStyle}>
  
     <div className='property-title'>{title}</div>
    
    </Link>
    );
};

   export default Property;