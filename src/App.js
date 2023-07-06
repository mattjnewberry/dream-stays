import "./App.css";
import React from "react";
import Card from "./components/Card";
import { getStays } from "./data";
import { useState, useEffect } from "react";

// Main app
export default function App() {
  const egRed = "#BA0C2F";
  const [bgColor, setBgColor] = useState(egRed);
  const convertToTwoDigit = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  const changeColor = () => {
    let blue = "#00205B";
    if (bgColor === egRed) {
      setBgColor(blue);
    } else {
      setBgColor(egRed);
    }
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
  let stays = getStays();
  return (
    <div className="app">
      <header className="app-header" style={{ background: bgColor }}>
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1>Dream Stays: Norway </h1>
        <p className="app-slogan">Let The Aurora Amaze You!</p>
        <button
          type="button"
          style={{ color: bgColor }}
          className="button"
          onClick={changeColor}
        >
          Click me!
        </button>
      </header>
      <p>Have A Dream Life</p>
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
              buttonColor={bgColor}
            />
          );
        })}
      </div>
      <hr className="app-divider" />
      <div>
        <h2 className="app-subheader">Climate</h2>
        <p>Norway has a maritime climate with mild winters and cool summers.</p>
      </div>
      <hr className="app-divider" />
      <div>
        <h2 className="app-subheader">History</h2>
        <p>
          The history of Norway has been influenced to an extraordinary degree
          by the terrain and the climate of the region. About 10,000 BC,
          following the retreat inland of the great ice sheets, the earliest
          inhabitants migrated north into the territory which is now Norway.
        </p>
      </div>
      <div className="footer">2023</div>
      <div className="clock">
        <span>{convertToTwoDigit(time.hours)}:</span>
        <span>{time.minutes}:</span>
        <span>{convertToTwoDigit(time.seconds)}</span>
        <span>{time.hours >= 12 ? " PM" : " AM"}</span>
      </div>
    </div>
  );
}
