import React from "react";
import "./Stats.css";

export default function Stats(props) {
  return (
    <div className="col-4">
      <div className="statTotal">
        <img className="statIcon" src={props.icon} alt={props.alt} />
        <br />
        <span className="statType">{props.type}</span> <br />
        <span className="stats" id="humidity">
          {props.value}
          {props.description}
        </span>
      </div>
    </div>
  );
}
