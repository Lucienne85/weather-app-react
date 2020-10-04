import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(0);
  let [cityName, setCityName] = useState("");

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setCityName(response.data.name);
    console.log(response.data);
  }

  let apiKey = "1192a0652f0754927fef474420498ea7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Portland&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);

  return (
    <div className="weather">
      The temperature in {cityName} is {temperature}°C
    </div>
  );
}
