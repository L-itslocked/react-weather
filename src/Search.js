import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }
  function showHumidity(response) {
    Math.round(response.data.main.humidity);
  }

  function showWind(response) {
    Math.round(response.data.wind.speed);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateCity();
  }

  let api = "acf4f9701d8363a6ed361252f2b74e65";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${updateCity}&appid=${api}&units=imperial`;
  axios.get(weatherUrl).then(showTemperature);

  if (temperature === null) {
    return (
      <div className="ContainerSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <small>please enter a city</small>
      </div>
    );
  } else {
    return (
      <div className="ContainerResults">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <div className="Weather">
          <h3> 👋 {city}! </h3>
          <p>
            Temperature: {showTemperature}°F
            <br />
            Humidity: {showHumidity}%
            <br />
            Wind: {showWind} mph
            <br />
          </p>
        </div>
      </div>
    );
  }
}
