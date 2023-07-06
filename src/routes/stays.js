import { useParams } from "react-router-dom";
import "./stays.css";
import { getStay } from "../data";
import React from "react";
import { Link } from "react-router-dom";
import Attractions from "../components/NearbyAttractions";
import ReactPlayer from "react-player";

// https://www.youtube.com/watch?v=T75IKSXVXlc

export default function Stay() {
  let params = useParams();
  let stay = getStay(params.stayId);
  return stay ? (
    <div className="app">
      <header className="app-header">
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <Attractions attractions={stay.attractions} />
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>
        <h1>Dream Stays</h1>
      </header>
      <img className="stay-img" alt={stay.name} src={stay.img} />
      <h2>{stay.name}</h2>
      <p className="stay-description">{stay.description}</p>
      <div className="video-container">
        <ReactPlayer url={stay.videoUrl} />
      </div>
    </div>
  ) : (
    <></>
  );
}
