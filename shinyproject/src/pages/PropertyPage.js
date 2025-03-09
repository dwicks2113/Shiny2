import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
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
        <section className="property-info">
        <div className="property-info">
            <div className="main-info">
                <div className="property-title">
                    <h1>{property.title}</h1>
                    <h4>{property.location}</h4>    
                </div>     
                
                <div className="host-info">
                    <h3 className="host">{property.host.name}</h3>
                    <img className="host-photo" src={property.host.picture} alt={property.host.name} />
                </div>
            </div>
            <div className="tags-rating">
                <div className="tags">
                    {property.tags.map((tag, index) => (
                    <span key={index} className="tag">
                    {tag}
                    </span>
                    ))}
                </div>
                <StarRating rating={property.rating} />
                
            </div>
        </div>
       </section>
        <section className="collapsible">
            <CollapsibleSection title="Description" content={property.description} />
            <CollapsibleSection title="Amenities" content={property.equipments} />
        </section>
        
        
    </div>  

        );
    };


export default PropertyPage;