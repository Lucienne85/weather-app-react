import React from "react";
import "./Forecastblock.css";
import Forecast from "./Forecast";

export default function Forecastblock() {
  return (
    <div className="Forecastblock">
      <div className="upcomingHours">
        <Forecast
          time="The next hour"
          minTemp={13}
          maxTemp={18}
          description="°C"
          icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/212/original/sun.png?1592137951"
        />
        <Forecast
          time="In 3 hours"
          minTemp={-1}
          maxTemp={2}
          description="°C"
          icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/220/original/ice.png?1592138257"
        />
        <Forecast
          time="In 6 hours"
          minTemp={0}
          maxTemp={1}
          description="°C"
          icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/218/original/wind.png?1592138180"
        />
        <Forecast
          time="In 9 hours"
          minTemp={2}
          maxTemp={5}
          description="°C"
          icon="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/213/original/partialsun.png?1592137989"
        />
      </div>
    </div>
  );
}
