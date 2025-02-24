import './Property.css';

// 
//function Property({ title, img, id}) {
//     return ( 
//         <><div className='property'>{title}
//         <img src={img} alt={title} /></div>
//         </>
//      );
// }

const Property = ({ title, img, id }) => {
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