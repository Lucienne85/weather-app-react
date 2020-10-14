import React from "react";

export default function FormattedDate(props) {    
    
function formatHours(timestamp) {
  let date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

    function getType(date) {
  if (date === 1 || date === 21 || date === 31) {
    return "st";
  } else if (date === 2 || date === 22) {
    return "nd";
  } else if (date === 3 || date === 23) {
    return "rd";
  } else return "th";
}
    
    let days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let dateType = getType(date);
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();

      let formattedTime = formatHours(props.date);
    
    return `Last updated: ${day} - ${month} ${date}${dateType} ${year} - ${formattedTime}`
}

