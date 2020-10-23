import React, { useState } from "react";
import axios from "axios";
import "./Forecastblock.css";
import ForecastLine from "./ForecastLine";

export default function Forecastblock(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState({});

function handleForecastResponse(response){
  setForecast(response.data);
  console.log(forecast);
  setLoaded(true);
}

 if (loaded && props.city === forecast.city.name) { return (
    <div className="Forecastblock">
      <div className="upcomingHours">
        <ForecastLine
          time={props.city}
          minTemp={13}
          maxTemp={18}
          description="°C"
          icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/212/original/sun.png?1592137951"
        />
        <ForecastLine
          time="In 3 hours"
          minTemp={-1}
          maxTemp={2}
          description="°C"
          icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/220/original/ice.png?1592138257"
        />
        <ForecastLine
          time="In 6 hours"
          minTemp={0}
          maxTemp={1}
          description="°C"
          icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/218/original/wind.png?1592138180"
        />
        <ForecastLine
          time="In 9 hours"
          minTemp={2}
          maxTemp={5}
          description="°C"
          icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/213/original/partialsun.png?1592137989"
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
