import React from "react"

export default function WeatherForecastDay(props){

    function maxTemp(){
        return Math.round(props.data.temperature.maximum)
    }

    function minTemp(){
        return Math.round(props.data.temperature.minimum)
    }

    function day(){
       let date = new Date(props.data.time * 1000)
       let day = date.getDay()

       let days = ["Sun","Mon","Tue","Wed", "Thu", "Fri", "Sat"]

       return days[day];
    }
return (
    <div className="col-sm forecast-column">
    <img src={props.data.condition.icon_url}></img>
     <p>{day()}</p>
     <span className="max-temp">{maxTemp()}°</span> <span className="min-temp">{minTemp()}°</span>
     </div>
)
}