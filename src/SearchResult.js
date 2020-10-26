import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import "./SearchResult.css";

export default function SearchResult(props){
    return (
    <div className="SearchResult">
        <div className="blockWeatherNow">
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
}