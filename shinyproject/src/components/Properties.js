import React from 'react';
import './Properties.css';
import Property from './Property';

function Properties ({propertyData}) {
    console.log('Rendering Properties');
    console.log('propertyData', propertyData);


    return (
    <section className='properties'>
    {propertyData.map((item) => (  
        <Property
            key={item.id}
            title={item.title}
            img={item.cover} 
            id={item.id}
         /> 
      ))} 
    </section>
  );
}
export default Properties;
