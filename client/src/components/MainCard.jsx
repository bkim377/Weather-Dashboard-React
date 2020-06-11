import React, {Component} from "react";
import "./css/MainCard.css";
import CurrentWeather from "./CurrentWeather";

class MainCard extends Component {
    render() { 
        return (
        <div className="row">
            <CurrentWeather/>
        </div>
    );
    };
};

export default MainCard;