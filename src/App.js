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
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1>Dream Stays: Singapore</h1>
        <p className="app-slogan">Where The Future is Happening</p>
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
          London has a rich history dating back to 43 CE. Explore edwardian and
          victorian architecture.
        </p>
      </div>
      <div className="footer">
        {" "}
        Author: Prahlad <br />
        <img
          className="me-img"
          alt="me-asf-img"
          src="https://th.bing.com/th/id/OIP.R48ftLKepcouLw4OjxYyjQHaGz?w=197&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          width="150"
          height="120"
        />
      </div>
    </div>
  );
}
