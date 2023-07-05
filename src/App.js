import "./App.css";
import React from "react";
import Card from "./components/Card";
import { getStays } from "./data";
import useState from "react";


// Main app
export default function App() {
  const egBlue = "#3662d8"; 
  const [bgColor, setBgColor] = useState(egBlue);
  
  const changeColor = () => {
    let purple = "#A020F0";
    setBgColor(purple);
   };
<button type="button" onClick={changeColor}>
    Click me!
</button>
  let stays = getStays();
  return (
    <div className="app">
      <header className="app-header">
        style={{ background: bgColor }}
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1>Dream Stays: Norway </h1>
        <p className="app-slogan">Let The Aurora Amaze You!</p>
      </header> Have A Dream Life
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
          Norway has a maritime climate with mild winters and cool summers.
        </p>
      </div>
      <hr className="app-divider" />
      <div>
        <h2 className="app-subheader">History</h2>
        <p>
          The history of Norway has been influenced to an extraordinary degree by the terrain and the climate of the region. About 10,000 BC, following the retreat inland of the great ice sheets, the earliest inhabitants migrated north into the territory which is now Norway. 
        </p>
      </div>  
      <div className="footer">2023
    </div>
      </div>
      
  );
}
