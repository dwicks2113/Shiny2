import React, { useState } from 'react'
import './Carousel.scss'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
// /import { data } from 'react-router-dom';

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

  // const handleIndicatorClick = (indicatorIndex) => {
  //   setIndex(indicatorIndex);
  // };

  return (
    <div className='carousel'>
   

      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevious} />
      <div className='carousel-image-wrapper'>
         <div className='carousel-image'>
              <img src={images[index]} alt={`Slide ${index +1}`} />
         </div>
      {/* <div className='carousel-indicators'>
         {images.map((_, i) => (
             <button
              key={i}
              className={`indicator ${i === index ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(i)}
              aria-label='Go to slide {i + 1}'
             >•</button>
         ))}
      </div> */}
      <div className='carousel-photo-count'>
        <span>
          {index + 1} / {length}
        </span>
        </div>
    
    </div>

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
    
    </div>
  );
};

export default Carousel;
