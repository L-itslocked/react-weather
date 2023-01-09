import React from "react";
import DateAndTime from "./DateAndTime.js";

export default function WeatherResults(props) {
  return (
    <div className="WeatherResults">
      <div className="Weather">
        <h3>
          <span>
            <a alt="waving hand" />
            👋
          </span>{" "}
          Hi {props.data.city}!
        </h3>
        <div className="row">
          <div className="col-md-12 weather-icon">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="text-capitalize"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ul>
              <li>Temperature: {props.data.temperature}°F</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
            <div className="col-md-3 globe-image">
              <img src="images/globe.svg" alt="{city weather conditions}" />
            </div>
          </div>
        </div>
        <p>
          <DateAndTime date={props.data.date} />
        </p>
      </div>
    </div>
  );
}
