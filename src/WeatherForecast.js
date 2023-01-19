import axios from "axios";
import React, { useState } from "react";
import Weather from "./Weather"



export default function WeatherForecast(props){
  let [loaded, setLoaded]=useState(false)
  let [forecast,setForecast]=useState(null)

  

  function handleResponse(response){
    console.log(response.data.daily)
    setForecast(response.data.daily)
    setLoaded(true)
  }
  

  if (loaded){
    return(<div className="row weekdays" id="forecast">
    <div className="col-sm forecast-column">
     <i className="fas fa-cloud-sun weather-icon"></i>
     <p>Tues</p>
     <span className="max-temp">{Math.round(forecast[0].temperature.maximum)}°</span> <span className="min-temp">{Math.round(forecast[0].temperature.minimum)}°</span>
   </div>
 </div>)
  } else {
    
    let key = "76d5aa4bc090a4b344dot82abbcf6f0b"
    let city = props.cityName
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`
    
  
    axios.get(apiUrl).then(handleResponse);
    
      return null;
  }
  
}