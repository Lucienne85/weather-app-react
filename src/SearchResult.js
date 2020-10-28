import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import "./SearchResult.css";

export default function SearchResult(props){

const[weathertype, setWeathertype] = useState("Sunny");
const[background, setBackground] = useState(false);
const[searchedcity, setSearchedcity] = useState(null)

console.log(props.data.icon);

function determineBackground(){
  if (props.data.icon === "01d") {
    setWeathertype("Sunny")
  } else if (props.data.icon === "01n") {
    setWeathertype("Clearnight")
  } else if (props.data.icon === "02d") {
    setWeathertype("Fewcloudsday")
  } else if (props.data.icon === "02n") {
    setWeathertype("Fewcloudsnight")
  } else if (props.data.icon === "03d") {
    setWeathertype("Scatteredday")
  } else if (props.data.icon === "03n") {
    setWeathertype("Scatterednight")
  } else if (props.data.icon === "04d") {
    setWeathertype("Cloudyday")
  } else if (props.data.icon === "04n") {
    setWeathertype("Cloudynight")
  } else if (props.data.icon === "50d" || props.data.icon === "50n") {
    setWeathertype("Fog")
  } else if (props.data.icon ==="13d" || props.data.icon === "13n") {
    setWeathertype("Ice")
  } else if (props.data.icon === "11d" || props.data.icon === "11n") {
    setWeathertype("Thunder")
  } else if (props.data.icon === "09d" || props.data.icon === "10d") {
    setWeathertype("Rainday")
  } else {
    setWeathertype("Rainnight")
  }
setBackground(true);
setSearchedcity(props.data.cityName);
}

let weatherClass = `blockWeatherNow ${weathertype}`


 if (background && searchedcity === props.data.cityName) {
   return (
    <div className="SearchResult">
        <div className={weatherClass}>
          <div className="showNow">
            <h2 className="city">
              {props.data.cityName}
            </h2>
            <h2 className="country">
              ({props.data.country})
            </h2>
            <p className="currentDate">
              <FormattedDate date = {props.data.date}/>
            </p>
            <WeatherInfo temperature={props.data.temperature} icon={props.data.icon} description={props.data.description} humidity={props.data.humidity} wind={props.data.wind} feelsLike={props.data.feelsLike} cityName={props.data.cityName} />
          </div>
        </div>
      </div>
    );
} else {
  determineBackground();
  return <h4>Loading</h4>;
}
}