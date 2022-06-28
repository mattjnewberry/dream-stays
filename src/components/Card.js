import "./Card.css";
import {Link} from "react-router-dom";
import {getHotelPrice} from "../pricing-server";
import {useEffect, useState} from "react";

function Card(cardData) {
    const [hotelPrice, setHotelPrice] = useState(0);

    // I am called when Chrome is displaying the hotel
    useEffect(() => {
        // getHotelPrice will call our python function
        getHotelPrice('theritz').then(price => { // price is returned by our python function
            setHotelPrice(price)  // we update the price which will update the website
        })
    }, []);


    return (
        <div className="card">
            <h1 className="card-header"> {cardData.name} </h1>
            <img className="card-header-img" alt={cardData.alt} src={cardData.img}/>
            <p className="card-body"> {hotelPrice} </p>
            <p className="card-body"> {cardData.description} </p>
            <Link to={cardData.id}>
                <button className="card-button">View More</button>
            </Link>
        </div>
    );
}

export default Card;
