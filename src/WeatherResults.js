import React from "react";
import DateAndTime from "./DateAndTime.js";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherResults.css";

export default function WeatherResults(props) {
  return (
    <div className="WeatherResults">
      <div className="row-md-12 Weather">
        <h3>{props.data.city}</h3>
        <div className="row">
          <div className="col-7">
            <ul>
              <li>Temperature: {props.data.temperature}°F</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
          </div>
          <div className="col-5 float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="forecast">
              <a href="#">Upcoming Forecast</a>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <DateAndTime date={props.data.date} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
