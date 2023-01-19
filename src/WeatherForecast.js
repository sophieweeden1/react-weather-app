import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay"



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
    
      <WeatherForecastDay data={forecast[1]}/>
      <WeatherForecastDay data={forecast[2]}/>
      <WeatherForecastDay data={forecast[3]}/>
      <WeatherForecastDay data={forecast[4]}/>
      <WeatherForecastDay data={forecast[5]}/>
    
   
 </div>)
  } else {
    
    let key = "76d5aa4bc090a4b344dot82abbcf6f0b"
    let city = props.cityName
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`
    
  
    axios.get(apiUrl).then(handleResponse);
    
      return null;
  }
  
}