import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { getStays } from "./data";

// Main app

export default function App() {
  let stays = getStays();
  const egBlue = "#3662d8";
  const [bgColor, setBgColor] = useState(egBlue);
  const changeColor = () => {
    let purple = "#01081d";
    setBgColor(purple);
  };
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const convertToTwoDigit = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  // <img
  //         className="background-img"
  //         alt="background-pic-img"
  //         src="https://thumbs.dreamstime.com/b/vertical-distant-shot-singapore-marina-bay-sands-nighttime-156133815.jpg"
  //       />
  return (
    <div className="app">
      <header style={{ background: bgColor }} className="app-header">
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1>Dream Stays: Singapore</h1>
        <p className="app-slogan">Where The Future is Happening</p>
        <button type="button" onClick={changeColor}>
          Click me!
        </button>
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
              className="card"
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
        <div className="clock">
          <span>{time.hours}:</span>
          <span>{time.minutes}:</span>
          <span>{time.seconds}</span>
        </div>
      </div>
    </div>
  );
}
