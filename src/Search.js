import React, { useState } from "react";
import axios from "axios";
//import { Typewriter } from "react-simple-typewriter";
import "./index.css";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

const bootstrap = require("bootstrap");

export default function Search() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(null);

  function showWeatherInformation(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
      ready: true,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = "2718952144ed077c12e7c160fb6fc351";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`;
    axios.get(weatherUrl).then(showWeatherInformation);
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <input type="search" autoFocus="off" onChange={updateCity} />

      <input
        type="Submit"
        value="Search"
        className="btn btn-sm btn-dark shadow"
      />
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="form">
        {form}
        <div className="Weather">
          <h3>
            <span>
              <a alt="waving hand" />
              👋
            </span>{" "}
            Hi {weatherData.city}!
          </h3>
          <div className="row">
            <div className="col-md-12 weather-icon">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="text-capitalize"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <ul>
                <li>Temperature: {weatherData.temperature}°F</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} mph</li>
              </ul>
              <div className="col-md-3 globe-image">
                <img src="images/globe.svg" alt="{city weather conditions}" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>{form}</div>
        <small>please enter a city</small>{" "}
      </div>
    );
  }
}
