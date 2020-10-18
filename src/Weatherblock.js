import React, { useState } from "react";
import "./Weatherblock.css";
import FormattedDate from "./FormattedDate";
import Stats from "./Stats";
import axios from "axios";

export default function Weatherblock(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      cityName: response.data.name,
      country: response.data.sys.country,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000)
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weatherblock">
        <div className="blockWeatherNow" id="weather-now">
          <div className="showNow">
            <h2 className="city" id="searched-city">
              {weatherData.cityName}
            </h2>
            <h2 className="country" id="country">
              ({weatherData.country})
            </h2>
            <p className="currentDate" id="date-now">
              <FormattedDate date = {weatherData.date}/>
            </p>
            <div className="weatherNow">
              <h1 className="currentTemp" id="temp-now">
                {Math.round(weatherData.temperature)}°C
              </h1>
              <img
                className="currentIcon"
                id="current-icon"
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/212/original/sun.png?1592137951"
                alt="full sun"
              />
              <p className="text-capitalize weatherType">
                {weatherData.description}
              </p>
            </div>
            <button className="metricButton" id="fahrenheit-button">
              Show Fahrenheit
            </button>
            <div className="row todayStats">
              <Stats
                type="Humidity"
                value={weatherData.humidity}
                description="%"
                icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/217/original/humidity.png?1592138134"
                alt="humidity icon"
              />
              <Stats
                type="Wind"
                value={Math.round(weatherData.wind)}
                description=" km/h"
                icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/218/original/wind.png?1592138180"
                alt="wind icon"
              />
              <Stats
                type="Feels like"
                value={Math.round(weatherData.feelsLike)}
                description="°C"
                icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/417/original/thermometer.png?1593809060"
                alt="feels like icon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1192a0652f0754927fef474420498ea7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return <h4>Loading</h4>;
  }
}
