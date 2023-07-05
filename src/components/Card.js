import "./Card.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Card(cardData) {
  const [hotelPrice, setHotelPrice] = useState(0);

  // I am called when Chrome is displaying the hotel
  useEffect(() => {}, []);

  return (
    <div className="card">
      <h1 className="card-header"> {cardData.name} </h1>
      <img
        className="card-header-img"
        alt={cardData.alt}
        src={cardData.img}
      />
      <p className="card-body"> {cardData.description} </p>
      <Link to={cardData.id}>
        <button className="card-button">View More</button>
      </Link>
    </div>
  );
}

export default Card;
