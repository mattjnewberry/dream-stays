import "./App.css";
import React from "react";
import Card from "./components/Card";
import { getStays } from "./data";

class App extends React.Component {
  render() {
    let stays = getStays();
    return (
      <div className="app">
        <header className="app-header">
          <h1>Dream Stays</h1>
        </header>
        <div className="container">
          {stays.map((stay) => (
            <Card
              id={stay.id}
              name={stay.name}
              description={stay.description}
              img={stay.img}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
