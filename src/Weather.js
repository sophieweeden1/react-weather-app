import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  //states
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  //API info
  const apiKey = "76d5aa4bc090a4b344dot82abbcf6f0b";
  const apiUrl = "https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}&units=metric"

  function displayForecast(response) {
    setLoaded(true);
    console.log(response.data);
//need to edit these to align with SheCodes API
    setWeather(
      console.log(response.data),{
      
      cityName: response.data.city,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.daily.icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function searchCity(event) {
    event.preventDefault();
    axios.get(apiUrl).then(displayForecast);
   
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (<div>
     <div className="container-fluid">
        <div
          className="card bg-primary mb-3 border-light mb-3"
          stylename="width: 60%"
        >
          <div className="card-body">
            <div className="search">
              <form>
                <input
                  type="text"
                  placeholder="Enter a city here"
                  class="searchbar"
                  id="userinput"
                  autoFocus={true}
                  onChange={updateCity}
                />
                <button type="submit" class="btn btn-light" id="submit-button" value="search">
                  Submit
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  id="location-button"
                >
                  <i class="fas fa-map-marker-alt"></i>
                  Current Location
                </button>
              </form>
            </div>
          </div>
        </div>
       
      </div>

  </div>
  
          
        
  )

  if (loaded) {
      return ( <div>{form}
      <h3 className="main-date">Sunday</h3>
      <div className="main-weather">
              <img src={weather.icon} alt={weather.description} id="main-weather-icon" />
              <h2 className="card-title" id="city">
              {weather.cityName}
              </h2>
              <h1 className="temp" id="actual-temp">
              {Math.round(weather.temperature)}°C
              </h1>

              <button className="btn btn-light" id="celcius-button">
                
              </button>
              <button className="btn btn-light" id="fahrenheit-button">
                F
              </button>
              <br />
              <h4 className="description">{weather.description}</h4>

              <h5 className="humidity">Humidity:{weather.humidity}%</h5>
              <h5 className="wind">Wind:{weather.wind}km/h</h5>
            </div>
            <br />

            <div className="row weekdays" id="forecast"></div>
        <ul>
        <li>
          <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
      </div>)
    } else { return form;}
  }
