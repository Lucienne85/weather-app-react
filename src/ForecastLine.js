import React from "react";
import "./ForecastLine.css";
import CurrentIcon from "./CurrentIcon";

export default function ForecastLine(props) {

  function minimumTemp(){
    let TempMin = Math.round(props.data.main.temp_min);
    return `${TempMin}°C`
  }

  function maximumTemp(){
    let TempMax = Math.round(props.data.main.temp_max);
    return `${TempMax}°C`
  }

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
}
