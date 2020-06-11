import React, {Component} from "react";
import moment from "moment";
import "./css/MainCard.css";
import FutureWeather from "./FutureWeather";

class WeeklyForecast extends Component {
    render() { 
        return (
        <div>
            <h3 className="mx-3 py-2 border border-primary" id="forecast-header">5-Day Forecast:</h3>
            <FutureWeather />
        </div>
        );
    }
};

export default WeeklyForecast;