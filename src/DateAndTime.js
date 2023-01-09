import React from "react";
import "./DateAndTime.css";

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
  let minutes = props.date.getMinutes();
  let time = `${hours}:${minutes}`;
  let meridien = " ";
  if (minutes < 10) {
    minutes = `0${minutes}`;
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
