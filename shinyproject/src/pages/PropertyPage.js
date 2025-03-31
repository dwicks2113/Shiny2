import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import "./PropertyPage.scss";
import Properties from '../components/Properties'
import Carousel from "../components/Carousel";

const CollapsibleSection = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

return (
    <div className="collapsible-section">
        <button className="collapsible-button" onClick={toggle}>
            {title}
            <span className={`collapse-arrow ${isOpen ? "open" : "closed"}`}></span>
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
    const property = propertyData.find(item => item.id === id);
    const images = property.pictures;
    // const showCarousel = images.length > 1;
    
    <Properties propertyData={propertyData} />

    if (!property) {
    return <div>Property not found!</div>;
    } 
    return (
        
 <div className="property-page">
 <Carousel 
    images={images} 
    showArrows={images.length > 1}
    showPhotoCount={images.length > 1}
 />
 {/* {showCarousel && <Carousel images={images} />} */}
 
    {/* <Carousel images={images} /> */}

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