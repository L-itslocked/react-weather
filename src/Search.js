import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherResults from "./WeatherResults.js";

//import { Typewriter } from "react-simple-typewriter";

export default function Search() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(null);

  function showWeatherInformation(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      ready: true,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = "99b8f9330a1bfba3a85e523fd3c2e528";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`;
    axios.get(weatherUrl).then(showWeatherInformation);
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <input type="search" autoFocus="off" onChange={updateCity} />

      <input type="Submit" value="Search" className="btn btn-sm shadow" />
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="weather-ready">
        {form}
        <WeatherResults data={weatherData} />
      </div>
    );
  } else {
    return (
      <div className="weather-notready">
        <div>{form}</div>
        <small>please enter a city</small>{" "}
      </div>
    );
  }
}
