import React from "react";

const PropertyCard = ({ property, onClick }) => {
    return (
        <div onClick={onClick}>
            <img src={property.cover[0]} alt={property.title} />
            <h2>{property.title}</h2>
            <p>{property.description}</p>
        </div>
    );
};

export default PropertyCard;