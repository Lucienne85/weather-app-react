import React from "react";
import "./Weatherblock.css";
import Stats from "./Stats";

export default function Weatherblock() {
  return (
    <div className="Weatherblock">
      <div className="blockWeatherNow" id="weather-now">
        <div className="showNow">
          <h2 className="city" id="searched-city">
            Amsterdam
          </h2>
          <h2 className="country" id="country">
            (NL)
          </h2>
          <p className="currentDate" id="date-now">
            Last updated: Sunday - July 5th 2020 - 21:47 PM
          </p>
          <div className="weatherNow">
            <h1 className="currentTemp" id="temp-now">
              25°C
            </h1>
            <img
              className="currentIcon"
              id="current-icon"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/212/original/sun.png?1592137951"
              alt="full sun"
            />
            <p className="weatherType" id="weather-type">
              Sunny
            </p>
          </div>
          <button className="metricButton" id="fahrenheit-button">
            Show Fahrenheit
          </button>
          <div className="row todayStats">
            <Stats
              type="Humidity"
              value={30}
              description="%"
              icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/217/original/humidity.png?1592138134"
              alt="humidity icon"
            />
            <Stats
              type="Wind"
              value={5}
              description=" km/h"
              icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/218/original/wind.png?1592138180"
              alt="wind icon"
            />
            <Stats
              type="Feels like"
              value={28}
              description="°C"
              icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/417/original/thermometer.png?1593809060"
              alt="feels like icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
