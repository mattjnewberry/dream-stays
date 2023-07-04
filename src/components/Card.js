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
        src="https://media.istockphoto.com/id/141215014/photo/etna-volcano.jpg?s=1024x1024&w=is&k=20&c=1nj-aDnyxMgiVe9kGdwuG6M9OaXiYwlmxMURBe81VMk="
      />
      <p className="card-body"> {cardData.description} </p>
      <Link to={cardData.id}>
        <button className="card-button">View More</button>
      </Link>
    </div>
  );
}

export default Card;
