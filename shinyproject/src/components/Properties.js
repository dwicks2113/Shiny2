import React from 'react';
import './Properties.scss';
import Property from './Property';

function Properties ({propertyData}) {

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
