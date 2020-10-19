import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Searchbar.css";
import axios from "axios";

export default function Weatherblock(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
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

function search(){
const apiKey = "1192a0652f0754927fef474420498ea7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
search();
}

function updateCity(event) {
setCity(event.target.value);
}

  if (weatherData.ready) {
    return (
      <div className = "Weatherblock">
      <div className="Searchbar">
      <div className="row">
        <form className="totalform" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Search your location"
            autoComplete="off"
            onChange={updateCity}
          />
          <button className="searchButton" type="submit">
            <i className="fas fa-search"></i>
          </button>
          <button className="currentLocation" id="current-location">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/426/original/location.png?1593886732"
              alt="locationIcon"
              className="locationIcon"
            />
          </button>
        </form>
      </div>
    </div>
      <WeatherInfo data={weatherData}/>
      </div>
    );
  } else {
    search();
    return <h4>Loading</h4>;
  }
}
