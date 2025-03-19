import './Property.scss';
import { Link } from 'react-router-dom'


const Property = ({ title, img, id }) => {
    console.log('Rendering Property:', title);
    console.log('img:', img);
    console.log('id:', id);
    

   const propertyStyle = {
     backgroundImage: `url(${img})`
   }

return (
  <Link key={propertyStyle.id} to={`/property/${id}`} className='property' style={propertyStyle}>
      <div className='property-title'>{title}</div>
  </Link>

    );
};

   export default Property;