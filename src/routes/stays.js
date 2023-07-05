import { useParams } from "react-router-dom";
import "./stays.css";
import { getStay } from "../data";
import React from "react";
import Card from "./components/Card.js" ;
import { Link } from "react-router-dom";
import Attractions from "./attr/NearbyAttractions.js" ;

export default function Stay() {
  let params = useParams();
  let stay = getStay(params.stayId);
  return stay ? (
    <div className="app">
      <header className="app-header">
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1>Dream Stays</h1>
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>
      </header>
      <img className="stay-img" alt={stay.name} src={stay.img}  />
      <h2>{stay.name}</h2>
      <p className="stay-description">{stay.description}</p>
    </div>
  ) : (
    <></>
  );
}
