import "./App.css";
import React from "react";
import Card from "./components/Card";

class App extends React.Component {
  handleClick = () => {
    console.log("this is:", this);
  };
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Dream Stays</h1>
        </header>
        <Card
          name="The Ritz"
          description="We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea."
          img="https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg"
          action={handleClick}
          actionText="Book Now"
        />
        <Card
          name="The Ritz"
          description="We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea."
          img="https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg"
          action={handleClick}
          actionText="Book Now"
        />
        <Card
          name="The Ritz"
          description="We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea."
          img="https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg"
          action={handleClick}
          actionText="Book Now"
        />
      </div>
    );
  }
}

function handleClick(e) {
  e.preventDefault();
  console.log("You clicked submit.");
}

export default App;
