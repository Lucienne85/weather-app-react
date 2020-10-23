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

    return  <img
                className="currentIcon"
                src={iconMapping[props.code]}
                alt="sunnyTest"
              />
}
// src={require('./images/sun.png')}
//{iconMapping[props.code]}