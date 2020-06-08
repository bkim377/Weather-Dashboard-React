import React from "react";
import "./MainCard.css";

const MainCard = () => {
    return (
        // <div className="container">
        <div className="row">
            <div className="col-sm-3 card ml-5 mr-3" id="current-day">
                <h3 className="card-title" id="city-name">Alpharetta (6/8/2020)</h3>
                <img className="mx-auto" id="current-icon" alt="Current Weather" src="https://openweathermap.org/img/wn/04d@2x.png"></img>
                <p className="card-text" id="city-temp">Temperature: 82.56 °F</p>
                <p className="card-text" id="city-humid">Humidity: 69%</p>
                <p className="card-text" id="city-wind">Wind Speed: 0.89 mph</p>
                <p className="card-text" id="city-UV">UV Index: 12.7</p>
            </div>
            <div>
                <h3 className="mx-3" id="forecast-header">5-Day Forecast:</h3>
                <div className="row">
                    <div className="card mx-3 my-2" id="day-1">
                        <h4 className="card-title">06/09/2020</h4>
                        <img className="mx-auto" id="future-icons-1" src="https://openweathermap.org/img/wn/10d.png"></img>
                        <p className="card-text" id="temp-1">Temp: 82.17 °F</p>
                        <p className="card-text" id="humid-1">Humidity: 69%</p>
                    </div>
                    <div className="card mx-3 my-2" id="day-2">
                        <h4 className="card-title">06/10/2020</h4>
                        <img className="mx-auto" id="future-icons-2" src="https://openweathermap.org/img/wn/04n.png"></img>
                        <p className="card-text" id="temp-2">Temp: 79.09 °F</p>
                        <p className="card-text" id="humid-2">Humidity: 74%</p>
                    </div>
                    <div className="card mx-3 my-2" id="day-3">
                        <h4 className="card-title">06/11/2020</h4>
                        <img className="mx-auto" id="future-icons-3" src="https://openweathermap.org/img/wn/04n.png"></img>
                        <p className="card-text" id="temp-3">Temp: 76.28 °F</p>
                        <p className="card-text" id="humid-3">Humidity: 77%</p>
                    </div>
                    <div className="card mx-3 my-2" id="day-4">
                        <h4 className="card-title">06/12/2020</h4>
                        <img className="mx-auto" id="future-icons-4" src="https://openweathermap.org/img/wn/01n.png"></img>
                        <p className="card-text" id="temp-4">Temp: 73.69 °F</p>
                        <p className="card-text" id="humid-4">Humidity: 75%</p>
                    </div>
                    <div className="card mx-3 my-2" id="day-5">
                        <h4 className="card-title">06/13/2020</h4>
                        <img className="mx-auto" id="future-icons-5" src="https://openweathermap.org/img/wn/01d.png"></img>
                        <p className="card-text" id="temp-5">Temp: 74.89 °F</p>
                        <p className="card-text" id="humid-5">Humidity: 75%</p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default MainCard;