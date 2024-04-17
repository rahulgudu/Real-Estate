import React from "react";
import { AiFillHeart } from "react-icons/ai"
import "./propertyCard.css";
const PropertyCard = ({ card }) => {
  return (
    <div className="flexColStart r-card">
      <img src={card.image} />

        <AiFillHeart size={24} color="white"/>

      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>

      <span className="primaryText">{card.name}</span>
      <span className="secondaryText">{card.detail}</span>
    </div>
  );
};

export default PropertyCard;
