import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import UnitConversion from "./UnitConversion";
import WeatherForecast from "./WeatherForecast"
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  const apiKey = "76d5aa4bc090a4b344dot82abbcf6f0b";
  
  function displayForecast(response) {
    setLoaded(true);

    setWeather({
      
      cityName: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000)
    });
  }

  function searchCity(event) {
    event.preventDefault();
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayForecast);
   
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (<div>
     <div className="container-sm">
        <div
          className="card bg-primary mb-3 border-light mb-3"
        >
          <div className="card-body">
            <div className="search">
              <form onSubmit={searchCity}>
                <input
                  type="text"
                  placeholder="Enter a city here"
                  className="searchbar"
                  id="userinput"
                  autoFocus={true}
                  onChange={updateCity}
                  
                />
                <button type="submit" className="btn btn-light" id="submit-button" value="search">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
       
      </div>

  </div>
  
          
        
  )

  if (loaded) {
      return ( <div>
        {form}
      <div className="container-sm">
      <div
          className="card bg-primary mb-3 border-light mb-3"
          
          
        >
          <div className="card-body">
      <FormattedDate date={weather.date}/>
      <div className="main-weather">
              <img src={weather.icon} alt={weather.description} id="main-weather-icon" />
              <h2 className="card-title" id="city">
              {weather.cityName}
              </h2>
              <UnitConversion celsius={weather.temperature} />
              <br />
              <h4 className="description">{weather.description}</h4>

              <h5 className="humidity">Humidity: {weather.humidity}%</h5>
              <h5 className="wind">Wind: {weather.wind}km/h</h5>
            </div>
            <br />
            <WeatherForecast cityName={weather.cityName}/>
            </div>
            </div>

            
      
      </div>
      </div>)
    } else { return form}
  }
