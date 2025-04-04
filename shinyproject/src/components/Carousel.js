import React, { useState } from 'react'
import './Carousel.scss'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

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
    {length > 1 && (
         
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevious} />
    )}

      <div className='carousel-image-wrapper'>
         <div className='carousel-image'>
              <img src={images[index]} alt={`Slide ${index +1}`} />
         </div>
      {length > 1 && (
      <div className='carousel-photo-count'>
        {index + 1} / {length}
      </div>
      )}
    </div>

      {length > 1 && (
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
      )}
    </div>
  );
};

export default Carousel;
