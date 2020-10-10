import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import Weatherblock from "./Weatherblock";
import Weather from "./Weather";
import Forecastblock from "./Forecastblock";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="Header">Weather App</h1>
        <Searchbar />
        <Weatherblock />
        <Forecastblock />
        <Footer />
        <Weather />
      </div>
    </div>
  );
}
