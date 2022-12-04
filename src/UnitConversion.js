import React, { useState } from "react";

export default function UnitConversion(props){
    let [unit, setUnit] = useState("celsius")

   function convertToF(event){
    console.log(Math.round(props.celsius));
        let fahrenheit = Math.round((props.celsius * 9/5) + 32)
        setUnit(fahrenheit);
        console.log(unit);
        
    }

    return (<div>
        <button className="btn btn-light" id="celsius-button">
    C
    </button>
    <button className="btn btn-light" id="fahrenheit-button" onClick={convertToF}>
      F
    </button>
    </div>)
};