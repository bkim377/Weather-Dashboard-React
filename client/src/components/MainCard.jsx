import React from "react";
import "./MainCard.css";

const MainCard = () => {
    return (
        <row>
            <div className="col-lg-8 card mx-auto">
                <h3 className="card-title" id="city-name">Alpharetta (6/8/2020)</h3>
                <img className="mx-auto" id="current-icon" alt="Current Weather" src="https://openweathermap.org/img/wn/04d@2x.png"></img>
                <p className="card-text" id="city-temp">Temperature: 82.56 °F</p>
                <p className="card-text" id="city-humid">Humidity: 69%</p>
                <p className="card-text" id="city-wind">Wind Speed: 0.89 mph</p>
                <p className="card-text" id="city-UV">UV Index: 12.7</p>
            </div>
        </row>
    );
};

export default MainCard;