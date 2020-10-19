import React from "react";
import "./App.css";
import Weatherblock from "./Weatherblock";
import Forecastblock from "./Forecastblock";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="Header">Weather App</h1>
        <Weatherblock defaultCity="Salta" />
        <Forecastblock />
        <Footer />
      </div>
    </div>
  );
}
