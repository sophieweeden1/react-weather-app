import React from "react"

export default function WeatherForecastDay(props){

    function maxTemp(){
        return Math.round(props.data.temperature.maximum)
    }

    function minTemp(){
        return Math.round(props.data.temperature.minimum)
    }
return (
    <div>
    <img src={props.data.condition.icon_url}></img>
     <p>{props.data.time}</p>
     <span className="max-temp">{maxTemp}°</span> <span className="min-temp">{minTemp}°</span>
     </div>
)
}