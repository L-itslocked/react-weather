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
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(`https://www.openweathermap.org/img/wn/
                ${response.data.weather[0].icon}@2x.png`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = "4d475337437168dcfab5cc631940d51b";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${updateCity}&appid=${api}&units=imperial`;
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
      <div className="ContainerResults">
        {form}
        <div className="Weather">
          <h3> 👋 {city}! </h3>
          <div>
            <ul>
              <li>Temperature: {temperature}°F</li>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind} km/h</li>
              <li>{icon}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
