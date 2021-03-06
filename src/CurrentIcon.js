import React from "react";
import "./CurrentIcon.css";

export default function CurrentIcon(props){

const iconMapping = {
"01d": "images/sun.png",
"01n": "images/moon.png",
"02d": "images/partialsun.png",
"02n": "images/halfmoon.png",
"03d": "images/cloud.png",
"03n": "images/cloud.png",
"04d": "images/cloudy.png",
"04n": "images/cloudy.png",
"09d": "images/umbrella.png",
"09n": "images/umbrella.png",
"10d": "images/umbrella.png",
"10n": "images/umbrella.png",
"11d": "images/thunder.png",
"11n": "images/thunder.png",
"13d": "images/ice.png",
"13n": "images/ice.png",
"50d": "images/fog.png",
"50n": "images/fog.png"
    };

const altMapping = {
  "01d": "sun icon",
  "01n": "clear moon icon",
  "02d": "partial sun icon",
  "02n": "partal moon icon",
  "03d": "cloud icon",
  "03n": "cloud icon",
  "04d": "multiple clouds icon",
  "04n": "multiple clouds icon",
  "09d": "umbrella icon",
  "09n": "umbrella icon",
  "10d": "umbrella icon",
  "10n": "umbrella icon",
  "11d": "thunder icon",
  "11n": "thunder icon",
  "13d": "snow icon",
  "13n": "snow icon",
  "50d": "fog icon",
  "50n": "fog icon"
};

    return  <img
                className="currentIcon"
                src={iconMapping[props.code]}
                alt={altMapping[props.code]}
              />
}