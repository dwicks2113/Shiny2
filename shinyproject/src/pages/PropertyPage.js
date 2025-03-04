import React from "react";
import { useParams } from "react-router-dom";



const PropertyPage = ({propertyData}) => {
    
    const { id } = useParams();
    console.log("ID from useParams:", id);
    const property = propertyData.find((p) => p.id === id);

    if (!id) {
        console.log("ID parameter is undefined or missing");
        return <div>Error: Invalid property ID</div>;
    };

 if (!property) {
    console.log("ID from useParams:", id);
        return <div>Property not found!</div>;
    }
    return (
        <div>
        <h1>{property.title}</h1>
        <img src={property.cover} alt={property.title} />
        <p>{property.description}</p>
        <h3>Host: {property.host.name}</h3>
        <img src={property.host.picture} alt={property.host.name} />
        <h4>Location: {property.location}</h4>
        <ul>
        {property.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
        ))} 
        </ul>
        <div>
            {property.pictures.map((picture, index) => (
                <img key={index} src={picture} alt={`Property ${index}`} />

            ))
            }
        </div>  
        </div>
       
    );
};



export default PropertyPage;