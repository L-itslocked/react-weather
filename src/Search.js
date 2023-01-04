import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showTemperature(response) {
    let weatherIcon = `https://www.openweathermap.org/img/wn/
                ${response.data.weather[0].icon}@2x.png`;
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon({ weatherIcon });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = "2718952144ed077c12e7c160fb6fc351";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`;
    axios.get(weatherUrl).then(showTemperature);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="enter a city"
        autoFocus="on"
        onChange={updateCity}
      />
      <input type="Submit" value="Search" className="btn btn-primary" />
    </form>
  );

  if (temperature === null) {
    return (
      <div>
        {form}
        <small>please enter a city</small>
      </div>
    );
  } else {
    return (
      <div className="form">
        {form}
        <div className="Weather">
          <h3> 👋 {city}! </h3>
          <div className="row">
            <div className="col-8">
              <ul>
                <li>Temperature: {temperature}°F</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind} mph</li>
                <li>{icon}</li>
              </ul>
              <div className="col-4">
                <img src="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
