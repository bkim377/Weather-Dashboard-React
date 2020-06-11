import React, {Component} from "react";
import moment from "moment";
import Moment from "react-moment";
import "./MainCard.css";
// import API from "../utils/API.jsx";

class MainCard extends Component {
    render() { 
        return (
        <div className="row">
            <div className="card mx-auto px-3" id="current-day">
                <h3 className="card-title" id="city-name">[City] - {(moment().format("MM/DD/YYYY, hh:mm a"))}</h3>
                <img className="mx-auto" id="current-icon" alt="Current Weather" alt="Today's Weather"></img>
                <p className="card-text" id="city-temp">Temperature: ___°F</p>
                <p className="card-text" id="city-humid">Humidity: ___</p>
                <p className="card-text" id="city-wind">Wind Speed: ___ mph</p>
                <p className="card-text" id="city-UV">UV Index: ___</p>
            </div>
        </div>
    );
    };
};

export default MainCard;