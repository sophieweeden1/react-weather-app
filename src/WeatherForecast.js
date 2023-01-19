import axios from "axios";
import React, { useState } from "react";



export default function WeatherForecast(){
  let [loaded, setLoaded]=useState(false)
  let [forecast,setForecast]=useState(null)

  

  function handleResponse(response){
    console.log(response.data)
    setForecast(response.data.daily)
    setLoaded(true)
  }
  

  if (loaded){
    return(<div className="row weekdays" id="forecast">
    <div className="col-sm forecast-column">
     <i className="fas fa-cloud-sun weather-icon"></i>
     <p>Tues</p>
     <span className="max-temp">18°</span> <span className="min-temp">7°</span>
   </div>
 </div>)
  } else {
    
    let key = "bc090a4b344dot82abbcf6f0b"
    let city = "London"
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`
    
  
    axios.get(apiUrl).then(handleResponse);
    
      return null;
  }
  
}