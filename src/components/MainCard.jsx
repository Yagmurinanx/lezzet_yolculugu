import React from "react";
import "./MainCard.css"

function MainCard ({name, description, image }) {
    return <div className="recipe-card">
     <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
    </div>
}

export default MainCard;

    