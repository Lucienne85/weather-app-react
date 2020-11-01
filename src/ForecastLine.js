import React, { useState } from "react";
import "./ForecastLine.css";
import CurrentIcon from "./CurrentIcon";

export default function ForecastLine(props) {

  const [tempmin, setTempmin] = useState(props.data.main.temp_min);
  const [tempmax, setTempmax] = useState(props.data.main.temp_max);
 
  function TempMinFahrenheit() {
    let TempMinFahrenheit = Math.round((tempmin * 1.8) + 32);
    return `${TempMinFahrenheit}°F`
  } 

  function TempMaxFahrenheit(){
    let TempMaxFahrenheit = Math.round((tempmax * 1.8) + 32);
    return `${TempMaxFahrenheit}°F`
  }

  let unit = props.unit;

 if (unit === "celsius") {
   return (
    <div className="ForecastLine">
      <div className="row">
        <div className="col-5">
          <h5>{props.time}</h5>
        </div>
        <div className="temperature col-5">
          {Math.round(tempmin)}°C / {Math.round(tempmax)}°C
        </div>
        <div className="col-2 showIcon">
        <CurrentIcon code={props.data.weather[0].icon} />
        </div>
      </div>
      <hr />
    </div>
  );
} else {
  return (
    <div className="ForecastLine">
      <div className="row">
        <div className="col-5">
          <h5>{props.time}</h5>
        </div>
        <div className="temperature col-5">
          {TempMinFahrenheit()} / {TempMaxFahrenheit()}
        </div>
        <div className="col-2 showIcon">
        <CurrentIcon code={props.data.weather[0].icon} />
        </div>
      </div>
      <hr />
    </div>
  );
}
}
