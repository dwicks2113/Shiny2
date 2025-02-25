import './Properties.css'
import Property from './Property'
import Gallery from '../Gallery.json'

function Properties () {
    console.log('Gallery', Gallery);

//     const uniqueProperties = Array.from(new Set(Gallery.map(item => item.id)))
  
//   .map(id => {
//     return Gallery.find(item => item.id === id)
//   });

    return (
    <section className='properties'>
   
      {Gallery.map((item) => (
        <Property
            key={item.id}
            title={item.title}
            img={item.cover} /> 
      ))} 
      
   
    </section>
  );
}
export default Properties
