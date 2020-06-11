import React, {Component} from "react";
import moment from "moment";
import Moment from "react-moment";
import "./MainCard.css";
// import API from "../utils/API.jsx";

class MainCard extends React.Component {
    render() { 
        return (
        // <div className="container">
        <div className="row">
            <div className="col-sm-3 card mx-5" id="current-day">
                <h3 className="card-title" id="city-name">City - {(moment().format("MM/DD/YYYY, h:mm:ss a"))}</h3>
                <img className="mx-auto" id="current-icon" alt="Current Weather" alt="Today's Weather"></img>
                <p className="card-text" id="city-temp">Temperature: ___°F</p>
                <p className="card-text" id="city-humid">Humidity: ___</p>
                <p className="card-text" id="city-wind">Wind Speed: ___ mph</p>
                <p className="card-text" id="city-UV">UV Index: ___</p>
            </div>
            <div>
                <h3 className="mx-3 py-2 border border-primary" id="forecast-header">5-Day Forecast:</h3>
                <div className="row">
                    <div className="card mx-3 my-2" id="day-1">
                        <h4 className="card-title">{moment().add(1, "days").format("L")}</h4>
                        <img className="mx-auto" id="future-icons-1" alt="1 day ahead"></img>
                        <p className="card-text" id="temp-1">Temp: ___°F</p>
                        <p className="card-text" id="humid-1">Humidity: ___</p>
                    </div>
                    <div className="card mx-3 my-2" id="day-2">
                        <h4 className="card-title">{moment().add(2, "days").format("L")}</h4>
                        <img className="mx-auto" id="future-icons-2" alt="2 days ahead"></img>
                        <p className="card-text" id="temp-2">Temp: ___°F</p>
                        <p className="card-text" id="humid-2">Humidity: ___</p>
                    </div>
                    <div className="card mx-3 my-2" id="day-3">
                        <h4 className="card-title">{moment().add(3, "days").format("L")}</h4>
                        <img className="mx-auto" id="future-icons-3" alt="3 days ahead"></img>
                        <p className="card-text" id="temp-3">Temp: ___°F</p>
                        <p className="card-text" id="humid-3">Humidity: ___</p>
                    </div>
                    <div className="card mx-3 my-2" id="day-4">
                        <h4 className="card-title">{moment().add(4, "days").format("L")}</h4>
                        <img className="mx-auto" id="future-icons-4" alt="4 days ahead"></img>
                        <p className="card-text" id="temp-4">Temp: ___°F</p>
                        <p className="card-text" id="humid-4">Humidity: ___</p>
                    </div>
                    <div className="card mx-3 my-2" id="day-5">
                        <h4 className="card-title">{moment().add(5, "days").format("L")}</h4>
                        <img className="mx-auto" id="future-icons-5" alt="5 days ahead"></img>
                        <p className="card-text" id="temp-5">Temp: ___°F</p>
                        <p className="card-text" id="humid-5">Humidity: ___</p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
    };
};

export default MainCard;