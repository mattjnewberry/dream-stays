import "./App.css";
import React from "react";
import Card from "./components/Card";
import {getStays} from "./data";

export default function App() {
    let stays = getStays();
    return (
        <div className="app">
            <header className="app-header">
                <h1>Dream Stays</h1>
            </header>
            <div className="container">
                {stays.map((stay) => {

                    return <Card
                        key={stay.id}
                        id={stay.id}
                        name={stay.name}
                        description={stay.description}
                        img={stay.img}
                    />
                })}
            </div>
        </div>
    );
}
