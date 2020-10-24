import React, { useState } from "react";
import axios from "axios";
import "./Forecastblock.css";
import ForecastLine from "./ForecastLine";

export default function Forecastblock(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState({});

function handleForecastResponse(response){
  setForecast(response.data);
  setLoaded(true);
}

 if (loaded && props.city === forecast.city.name) {   
   console.log(forecast);
  return (
    <div className="Forecastblock">
      <div className="upcomingHours">
        <ForecastLine
          time="The next hour"
          minTemp={forecast.list[0].main.temp_min}
          maxTemp={forecast.list[0].main.temp_max}
          description="°C"
          icon={forecast.list[0].weather[0].icon}
        />
        <ForecastLine
          time="In 3 hours"
          minTemp={forecast.list[1].main.temp_min}
          maxTemp={forecast.list[1].main.temp_max}
          description="°C"
          icon={forecast.list[1].weather[0].icon}
        />
        <ForecastLine
          time="In 6 hours"
          minTemp={forecast.list[2].main.temp_min}
          maxTemp={forecast.list[2].main.temp_max}
          description="°C"
          icon={forecast.list[2].weather[0].icon}
        />
        <ForecastLine
          time="In 9 hours"
          minTemp={forecast.list[3].main.temp_min}
          maxTemp={forecast.list[3].main.temp_max}
          description="°C"
          icon={forecast.list[3].weather[0].icon}
        />
      </div>
    </div>
  );
 } else {
let apiKey = "1192a0652f0754927fef474420498ea7";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleForecastResponse); 
return null;
 }
} 
