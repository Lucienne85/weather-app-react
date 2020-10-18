import React from "react";
import FormattedDate from "./FormattedDate";
import Stats from "./Stats";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
        <div className="blockWeatherNow" id="weather-now">
          <div className="showNow">
            <h2 className="city" id="searched-city">
              {props.data.cityName}
            </h2>
            <h2 className="country" id="country">
              ({props.data.country})
            </h2>
            <p className="currentDate" id="date-now">
              <FormattedDate date = {props.data.date}/>
            </p>
            <div className="weatherNow">
              <h1 className="currentTemp" id="temp-now">
                {Math.round(props.data.temperature)}°C
              </h1>
              <img
                className="currentIcon"
                id="current-icon"
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/212/original/sun.png?1592137951"
                alt="full sun"
              />
              <p className="text-capitalize weatherType">
                {props.data.description}
              </p>
            </div>
            <button className="metricButton" id="fahrenheit-button">
              Show Fahrenheit
            </button>
            <div className="row todayStats">
              <Stats
                type="Humidity"
                value={props.data.humidity}
                description="%"
                icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/217/original/humidity.png?1592138134"
                alt="humidity icon"
              />
              <Stats
                type="Wind"
                value={Math.round(props.data.wind)}
                description=" km/h"
                icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/218/original/wind.png?1592138180"
                alt="wind icon"
              />
              <Stats
                type="Feels like"
                value={Math.round(props.data.feelsLike)}
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