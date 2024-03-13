import React from "react";
import { useMediaQuery } from "react-responsive";
import "./MainCard.css";

function MainCard({ name, description, image }) {
  const smallScreenCharLimit = 200;
  const mediumScreenCharLimit = 300;
  const largeScreenCharLimit = 1124;

  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const isMediumScreen = useMediaQuery({ minWidth: 601, maxWidth: 1073 });

  const getCharLimit = () => {
    if (isSmallScreen) {
      return smallScreenCharLimit;
    } else if (isMediumScreen) {
      return mediumScreenCharLimit;
    } else {
      return largeScreenCharLimit;
    }
  };

  const charLimit = getCharLimit();
  const trimmedDescription =
    description.length > charLimit
      ? `${description.slice(0, charLimit)}...`
      : description;

  return (
    <div className="recipe-card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{trimmedDescription}</p>
      </div>
    </div>
  );
}

export default MainCard;
