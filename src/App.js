import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { getStays } from "./data";

function foo() {
  var x = "hello"
  return (
    <div></div>
  )
}

// Main app
export default function App() {
  const egOrange = "#cc0000";
  const [bgColor, setBgColor] = useState(egOrange);
  
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
  
  const changeColor = () => {
    let lilac = " #cc33ff";
    setBgColor(lilac);
};
    
  let stays = getStays();


  return (
    
 <div className="app">
       <button type="button" onClick={changeColor}>
    Click me for the time!
</button>
      <header style ={{ background: bgColor}} className="app-header">
        <div className="clock">
    <span>{time.hours}:</span>
    <span>{time.minutes}:</span>
    <span>{time.seconds}</span>
    <span>{time.hours >= 12 ? " PM" : " AM"}</span>
  </div>
        
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
          Sicily has some of the best weather in the world, with extreme highs
          of 42 degress celcius
        </p>
      </div>
      <hr className="app-divider" />
      <div>
        <h2 className="app-subheader">History</h2>
        <p>
          Sicily has a rich history dating back to 1071, when it was first established as the County of Sicily, which was due to Norman Conquest of Italy.
        </p>
      </div>
      <div className="footer">
        <p> Authors: Matthew J Reddick, Richard Antanavicius.</p>
        <p> Year made: 2023 </p>
            </div>
  </div>
    
    
    
  );
}



