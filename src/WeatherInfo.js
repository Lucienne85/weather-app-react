import React from "react";
import CurrentIcon from "./CurrentIcon";
import Stats from "./Stats";

export default function WeatherInfo(props){
    return <div className="WeatherInfo">
            <div className="weatherNow">
              <h1 className="currentTemp">
                {Math.round(props.temperature)}°C
              </h1>
              <CurrentIcon code={props.icon}/>
              <p className="text-capitalize weatherType">
                {props.description}
              </p>
             </div>
             <button className="metricButton">
              Show Fahrenheit
            </button>
            <div className="row todayStats">
              <Stats
                type="Humidity"
                value={props.humidity}
                description="%"
                icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/217/original/humidity.png?1592138134"
                alt="humidity icon"
              />
              <Stats
                type="Wind"
                value={Math.round(props.wind)}
                description=" km/h"
                icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/218/original/wind.png?1592138180"
                alt="wind icon"
              />
              <Stats
                type="Feels like"
                value={Math.round(props.feelsLike)}
                description="°C"
                icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/417/original/thermometer.png?1593809060"
                alt="feels like icon"
              />
            </div>
    </div>
}