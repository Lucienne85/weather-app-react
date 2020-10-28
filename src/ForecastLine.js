import React from "react";
import "./ForecastLine.css";
import CurrentIcon from "./CurrentIcon";

export default function ForecastLine(props) {

  function minimumTemp(){
    let TempMin = Math.round(props.data.main.temp_min);
    return `${TempMin}°C`
  }

  function TempMinFahrenheit() {
    let TempMin = props.data.main.temp_min;
    let TempMinFahrenheit = Math.round((TempMin * 1.8) + 32);
    return `${TempMinFahrenheit}°F`
  } 

  function maximumTemp(){
    let TempMax = Math.round(props.data.main.temp_max);
    return `${TempMax}°C`
  }

  function TempMaxFahrenheit(){
    let TempMax = props.data.main.temp_max;
    let TempMaxFahrenheit = Math.round((TempMax * 1.8) + 32);
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
          {minimumTemp()} / {maximumTemp()}
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
