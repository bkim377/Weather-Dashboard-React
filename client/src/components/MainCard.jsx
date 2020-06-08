import React from "react";
import "./MainCard.css";

const MainCard = () => {
    return (
        // <div className="container">
        <div className="row">
            <div className="col-sm-3 card mx-4">
                <h3 className="card-title" id="city-name">Alpharetta (6/8/2020)</h3>
                <img className="mx-auto" id="current-icon" alt="Current Weather" src="https://openweathermap.org/img/wn/04d@2x.png"></img>
                <p className="card-text" id="city-temp">Temperature: 82.56 °F</p>
                <p className="card-text" id="city-humid">Humidity: 69%</p>
                <p className="card-text" id="city-wind">Wind Speed: 0.89 mph</p>
                <p className="card-text" id="city-UV">UV Index: 12.7</p>
            </div>
            <div className="card">
                <h3 className="mx-3" id="forecast-header">5-Day Forecast:</h3>
            </div>
            <div>
                
            </div>
        </div>
        // </div>
    );
};

export default MainCard;