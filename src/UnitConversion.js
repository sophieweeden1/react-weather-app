import React, { useState } from "react";

export default function UnitConversion(props){
    const [unit, setUnit] = useState("celsius")

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius") { return 
        (<div>
        <h1 className="temp" id="actual-temp">
              {Math.round(props.celsius)}°C
              </h1>
        <button className="btn btn-light" id="celsius-button">
    C
    </button>
    <button className="btn btn-light" id="fahrenheit-button" onClick={showFahrenheit}>
      F
    </button>
    </div>)} 
    else {
        let fahrenheit = (props.celsius * 9/5) + 32
        return (<div>
        <h1 className="temp" id="actual-temp">
              {Math.round(fahrenheit)}°F
              </h1>
        <button className="btn btn-light" id="celsius-button" onClick={showCelsius}>
    C
    </button>
    <button className="btn btn-light" id="fahrenheit-button" >
      F
    </button>
    </div>)}
};