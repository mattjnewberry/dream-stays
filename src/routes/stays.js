import { useParams } from "react-router-dom";
import "./stays.css";
import { getStay } from "../data";
import React from "react";
import Attractions from "../routes/NearbyAttractions.js";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";


export default function Stay() {
  let params = useParams();
  let stay = getStay(params.stayId);
  return stay ? (
    <div className="app">
      <header className="app-header">
        <Link to="/">
    <button className="nav-button">Home</button>
 </Link>
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1>Dream Stays</h1>
      </header>
      <img className="stay-img" alt={stay.name} src={stay.img} />
      <h2>{stay.name}</h2>
      <p className="stay-description">{stay.description}</p>
      <Attractions attractions={stay.attractions} />
      <ReactPlayer url='https://www.youtube.com/watch?v=8qHJO_4mXfQ&pp=ygURbXQgZXRuYSBleHBsb2Rpbmc%3D' />
      
    </div>
    
  ) : (
    <></>
  );
}
