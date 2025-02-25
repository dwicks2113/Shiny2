import React from 'react';
import './Properties.css';
import Property from './Property';
import Gallery from '../Gallery.json';

function Properties () {
    console.log('Rendering Properties');
    console.log('Gallery', Gallery);

//     const uniqueProperties = Array.from(new Set(Gallery.map((item => item.id)))
//     .map(id => {
//         return Gallery.find(item => item.id === id)
//     }));
//     console.log('uniqueProperties', uniqueProperties);
    
//     return (
//     <section className='properties'>
//    {uniqueProperties.map((item) => (
    return (
    <section className='properties'>
    {Gallery.map((item) => (  
        <Property
            key={item.id}
            title={item.title}
            img={item.cover} 
         /> 
      ))} 
    </section>
  );
}
export default Properties;
