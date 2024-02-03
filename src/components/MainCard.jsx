import React from "react";
import "./MainCard.css"

function MainCard ({name, description, image }) {
    return <div className="recipe-card">
    <img src={image} alt={name} />
   <div className="card-content">
   <h3>{name}</h3>
   <p>{description}</p>
   </div>
   </div>
}

export default MainCard;

    