import React from "react";
import moment from "moment";

function CurrentWeather(props) {
    return (
        <div className="card mx-auto px-3" id="current-day">
                <h3 className="card-title" id="city-name">{props.city} ({(moment().format("MM/DD/YYYY, hh:mm a"))})</h3>
                <img className="mx-auto" id="current-icon" alt="Current Weather" src={props.src}></img>
                <p className="card-text" id="city-temp">Temperature: {props.temperature} </p>
                <p className="card-text" id="city-humid">Humidity: {props.humidity} </p>
                <p className="card-text" id="city-wind">Wind Speed: {props.wind} </p>
                <p className="card-text" id="city-UV">UV Index: {props.uv} </p>
            </div>
    );
};

export default CurrentWeather;