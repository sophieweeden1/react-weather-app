import React from "react";

export default function WeatherForecast(){
    return (<div class="row weekdays" id="forecast">
     <div class="col-sm forecast-column">
      <i class="fas fa-cloud-sun weather-icon"></i>
      <p>Tues</p>
      <span class="max-temp">18°</span> <span class="min-temp">7°</span>
    </div>
    <div class="col-sm forecast-column">
      <i class="fas fa-cloud-sun-rain weather-icon"></i>
      <p>Weds</p>
      <span class="max-temp">18°</span> <span class="min-temp">7°</span>
    </div>
    <div class="col-sm forecast-column">
      <i class="fas fa-cloud-sun-rain weather-icon"></i>
      <p>Thurs</p>
      <span class="max-temp">18°</span> <span class="min-temp">7°</span>
    </div>
    <div class="col-sm forecast-column">
      <i class="fas fa-cloud-sun weather-icon"></i>
      <p>Fri</p>
      <span class="max-temp">18°</span> <span class="min-temp">7°</span>
    </div>
    <div class="col-sm forecast-column">
      <i class="fas fa-sun weather-icon"></i>
      <p>Sat</p>
      <span class="max-temp">18°</span> <span class="min-temp">7°</span>
    </div>
    <div class="col-sm forecast-column">
      <i class="fas fa-sun weather-icon"></i>
      <p>Sun</p>
      <span class="max-temp">18°</span> <span class="min-temp">7°</span>
    </div>
  </div>)
}