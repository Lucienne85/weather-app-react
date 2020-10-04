import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import Searchbar from "./Searchbar";

export default function App() {
  return (
    <div className="App">
      <h1 className="Header">Weather App</h1>
      <Searchbar />
      <Weather city="Amsterdam" />
    </div>
  );
}
