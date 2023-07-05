import "./App.css";
import React, { useState, UseEffect, useEffect } from "react";
import Card from "./components/Card";
import { getStays } from "./data";



// Main app
export default function App() {
  let stays = getStays();
  const egBlue = "3662d8"
  const [bgColor, setBgcolor] = useState(egBlue);
  const changeColor = () => {
    let purple = "#A020F0";
    setBgcolor(purple);
};
const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
});
  useEffect(() => {
    const intervalId = setInterval(() => {
        const date = new Date();
        setTime({
            minutes: date.getMinutes(),
            hours: date.getHours(),
            seconds: date.getSeconds()
        });
    }, 1000);

    return () => clearInterval(intervalId);
}, []);
  
  return (
    <div className="app">
      <header className="app-header">
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1>Dream Stays: Dubai</h1>
        <p className="app-slogan"> "Dazzling Dubai: Where Dreams Dance with Delight!"</p>
      </header>        
      <button type="button" 
      onClick={changeColor}
      style={{ background: bgColor }} >
    Click me! 
</button>


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
      <div classname="footer">
        <p> Author: Yacine, 2023 </p>
      </div>
  <div className="clock">
    <span>{time.hours}:</span>
    <span>{time.minutes}:</span>
    <span>{time.seconds}</span>
    <span>{time.hours >= 12 ? " PM" : " AM"}</span>
  </div>
    </div>
  );
}
