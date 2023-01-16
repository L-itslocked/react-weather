import React from "react";
import "./WeatherResults.css";

export default function StructuredDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours() - 12;
  let twentyfourhours = props.date.getHours();
  let minute = props.date.getMinutes();
  let time = `${hours}:${minute}`;
  let meridien = " ";
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (twentyfourhours > 12) {
    meridien = `PM`;
  }
  if (twentyfourhours < 12) {
    meridien = `AM`;
  }
  return (
    <div className="date">
      {day}, {time} {meridien}
    </div>
  );
}
