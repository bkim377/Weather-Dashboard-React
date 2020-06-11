import React from "react";
import moment from "moment";

function FutureWeather(props) {
    return (
            <div className="row">
                <div className="card mx-auto my-2" id="day-1">
                    <h4 className="card-title">{moment().add(1, "days").format("L")}</h4>
                    <img className="mx-auto" id="future-icons-1" alt="1 day ahead"></img>
                    <p className="card-text" id="temp-1">Temp: ___°F</p>
                    <p className="card-text" id="humid-1">Humidity: ___</p>
                </div>
                <div className="card mx-auto my-2" id="day-2">
                    <h4 className="card-title">{moment().add(2, "days").format("L")}</h4>
                    <img className="mx-auto" id="future-icons-2" alt="2 days ahead"></img>
                    <p className="card-text" id="temp-2">Temp: ___°F</p>
                    <p className="card-text" id="humid-2">Humidity: ___</p>
                </div>
                <div className="card mx-auto my-2" id="day-3">
                    <h4 className="card-title">{moment().add(3, "days").format("L")}</h4>
                    <img className="mx-auto" id="future-icons-3" alt="3 days ahead"></img>
                    <p className="card-text" id="temp-3">Temp: ___°F</p>
                    <p className="card-text" id="humid-3">Humidity: ___</p>
                </div>
                <div className="card mx-auto my-2" id="day-4">
                    <h4 className="card-title">{moment().add(4, "days").format("L")}</h4>
                    <img className="mx-auto" id="future-icons-4" alt="4 days ahead"></img>
                    <p className="card-text" id="temp-4">Temp: ___°F</p>
                    <p className="card-text" id="humid-4">Humidity: ___</p>
                </div>
                <div className="card mx-auto my-2" id="day-5">
                    <h4 className="card-title">{moment().add(5, "days").format("L")}</h4>
                    <img className="mx-auto" id="future-icons-5" alt="5 days ahead"></img>
                    <p className="card-text" id="temp-5">Temp: ___°F</p>
                    <p className="card-text" id="humid-5">Humidity: ___</p>
                </div>
            </div>
    );
};

export default FutureWeather;