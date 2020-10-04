import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import Weatherblock from "./Weatherblock";
import Weather from "./Weather";
import Forecastblock from "./Forecastblock";

export default function App() {
  return (
    <div className="App">
      <h1 className="Header">Weather App</h1>
      <Searchbar />
      <Weatherblock />
      <Forecastblock />
      <Weather />
    </div>
  );
}
