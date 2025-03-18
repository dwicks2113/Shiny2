import React, { useState } from 'react'
import './Carousel.css'

const Carousel = ( { images = [] }) => {
   const [index, setIndex] = useState(0);
   const length = images.length;

    if (!images || images.length === 0) {
        return <p>No images available. </p>;
    }
  
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className='carousel'>
      <button onClick={handlePrevious}>Previous</button>
      <div className='carousel-image'>
        <img src={images[index]} alt={`Slide ${index +1}`} />
        </div>
      <button onClick={handleNext}>Next</button>
      <p>{index}</p>
    </div>
  );
};

export default Carousel
