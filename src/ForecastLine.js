import React from "react";
import "./ForecastLine.css";
import CurrentIcon from "./CurrentIcon";

export default function ForecastLine(props) {
  return (
    <div className="ForecastLine">
      <div className="row">
        <div className="col-5">
          <h5>{props.time}</h5>
        </div>
        <div className="temperature col-5">
          {Math.round(props.minTemp)}
          {props.description} / {Math.round(props.maxTemp)}
          {props.description}
        </div>
        <div className="col-2 showIcon">
<CurrentIcon code={props.icon} />
        </div>
      </div>
      <hr />
    </div>
  );
}
