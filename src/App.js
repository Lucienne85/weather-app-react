import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import Weatherblock from "./Weatherblock";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1 className="Header">Weather App</h1>
      <Searchbar />
      <Weatherblock />
      <Weather />
    </div>
  );
}
