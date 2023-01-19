import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay"



export default function WeatherForecast(props){
  let [loaded, setLoaded]=useState(false)
  let [forecast,setForecast]=useState(null)

  useEffect(()=>{
    setLoaded(false);
  }, [props.cityName])

  

  function handleResponse(response){
    console.log(response.data.daily)
    setForecast(response.data.daily)
    setLoaded(true)
  }
  

  if (loaded){
    return(
      <div className="WeatherForecast">
    <div className="row weekdays" id="forecast">
    {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-sm forecast-cols" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    
    let key = "76d5aa4bc090a4b344dot82abbcf6f0b"
    let city = props.cityName
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`
    
  
    axios.get(apiUrl).then(handleResponse);
    
      return null;
  }
  
}