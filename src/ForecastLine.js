import React from "react";
import "./ForecastLine.css";

export default function ForecastLine(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-5">
          <h5>{props.time}</h5>
        </div>
        <div className="temperature col-5" id="three-hour-temp">
          {props.minTemp}
          {props.description} / {props.maxTemp}
          {props.description}
        </div>
        <div className="col-2 showIcon">
          <img
            className="hourIcons"
            id="three-hour-icon"
            src={props.icon}
            alt={props.alt}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}
