import "./App.css";
import React from "react";
import Card from "./components/Card";
import { getStays } from "./data";

// Main app
export default function App() {
  let stays = getStays();
  return (
    <div className="app">
      <header className="app-header">
        <p className="slogan">
       "Going to Sicily is better than going to the moon" - William Shakespeare</p>
        <h1>Dream Stays: Sicily</h1>
      </header>
      <br />
      <div className="container">
        {stays.map((stay) => {
          return (
            <Card
              key={stay.id}
              id={stay.id}
              name={stay.name}
              description={stay.description}
              img={stay.img}
            />
          );
        })}
      </div>
  
      <hr className="app-divider" />
      <div>
        <h2 className="app-subheader">Climate</h2>
        <p>
          London has some of the best weather in the world, with average highs
          of 15 degress celcius
        </p>
      </div>
      <hr className="app-divider" />
      <div>
        <h2 className="app-subheader">History</h2>
        <p>
          Sicily has a rich history dating back to 1071, when it was first established as the County of Sicily, which was due to Norman Conquest of Italy.
        </p>
      </div>
    </div>
    
    
  );
}

<div className="footer">
        <p> Authors: Matthew J Reddick, Richard Antanavicius. Year made in 2023.
        </p>
            </div>

