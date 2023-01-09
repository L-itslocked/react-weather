import React from "react";
import DateAndTime from "./DateAndTime.js";
import "./WeatherResults.css";

export default function WeatherResults(props) {
  return (
    <div className="WeatherResults">
      <div className="row-md-12 Weather">
        <img
          src={props.data.iconURL}
          alt={props.data.description}
          className="text-capitalize"
        />

        <h3>- {props.data.city} -</h3>

        <ul>
          <li>Temperature: {props.data.temperature}°F</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} mph</li>
        </ul>
        <p>
          <DateAndTime date={props.data.date} />
        </p>
      </div>
    </div>
  );
}
