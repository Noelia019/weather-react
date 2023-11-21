import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `5da7b2dc058f07286fea39c4cee516a3`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temperature,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="Search" placeholder="type a city..." onChange={updateCity} />
      <input type="Submit" value="Search" />
      <input type="Submit" value="Current" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>{weather.temperature}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
