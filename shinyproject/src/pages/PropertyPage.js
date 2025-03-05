import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import data from "./Gallery.json";
import "./PropertyPage.css";
import Properties from '../components/Properties'

const CollapsibleSection = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

return (
    <div className="collapsible-section">
        <button className="collapsible-button" onClick={toggle}>
            {title}
        </button>
        {isOpen && (
            <div className="collapsible-content">
            {Array.isArray(content) ? (
            <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            ) : (
                <p>{content}</p>
            )}
         </div>
        )}
    </div>
);
};
const PropertyPage = ({ propertyData }) => {
    const { id } = useParams();
    console.log("ID from useParams:", id);
    const property = propertyData.find(item => item.id === id);
     <Properties propertyData={propertyData} />

    if (!property) {
    return <div>Property not found!</div>;
    } 
    return (
        <div className="property-page">
        
      <Carousel 
            showThumbs={false} 
            infiniteLoop={true} 
            showArrows={true}
            dynamicHeight={false}
            className="propert-carousel">
            {property.pictures.map((picture, index) => (
                <div key={index} className="carousel-item">
                    <img src={picture} alt={`Property ${index + 1}`} />
        </div>
            ))}
        </Carousel>
        
        <h1>{property.title}</h1>
            <h4>{property.location}</h4>
        <div className="tags">
            {property.tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
        <div className="rating">
            <span>Rated: {property.rating} out of 5 stars</span>
            </div>
        <CollapsibleSection title="Description" content={property.description} />
        <CollapsibleSection title="Amenities" content={property.equipments} />
      
        <h3>Host: {property.host.name}</h3>
        <img src={property.host.picture} alt={property.host.name} />
        
        
    </div>  

        );
    };


export default PropertyPage;