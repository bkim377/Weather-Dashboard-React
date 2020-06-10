import React, {Component} from "react";
import "./MainCard.css";
import API from "../utils/API.jsx";

class MainCard extends React.Component {
    state = {
        result: {},
        search: ""
    };

    // search for a city in the search bar
    searchCity = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

    // for entering text in the search bar
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

    // When the form is submitted, search the OpenWeather API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
    };

    render() { 
        return (
        // <div className="container">
        <div className="row">
            <div className="col-sm-3 card mx-5" id="current-day">
                <h3 className="card-title" id="city-name">City (6/10/2020)</h3>
                <img className="mx-auto" id="current-icon" alt="Current Weather" alt="Today's Weather"></img>
                <p className="card-text" id="city-temp">Temperature: ___°F</p>
                <p className="card-text" id="city-humid">Humidity: </p>
                <p className="card-text" id="city-wind">Wind Speed: ___ mph</p>
                <p className="card-text" id="city-UV">UV Index: </p>
            </div>
            <div>
                <h3 className="mx-3 py-2 border border-primary" id="forecast-header">5-Day Forecast:</h3>
                <div className="row">
                    <div className="card mx-3 my-2" id="day-1">
                        <h4 className="card-title">06/11/2020</h4>
                        <img className="mx-auto" id="future-icons-1" alt="1 day ahead"></img>
                        <p className="card-text" id="temp-1">Temp: ___°F</p>
                        <p className="card-text" id="humid-1">Humidity: </p>
                    </div>
                    <div className="card mx-3 my-2" id="day-2">
                        <h4 className="card-title">06/12/2020</h4>
                        <img className="mx-auto" id="future-icons-2" alt="2 days ahead"></img>
                        <p className="card-text" id="temp-2">Temp: ___°F</p>
                        <p className="card-text" id="humid-2">Humidity: </p>
                    </div>
                    <div className="card mx-3 my-2" id="day-3">
                        <h4 className="card-title">06/13/2020</h4>
                        <img className="mx-auto" id="future-icons-3" alt="3 days ahead"></img>
                        <p className="card-text" id="temp-3">Temp: ___°F</p>
                        <p className="card-text" id="humid-3">Humidity: </p>
                    </div>
                    <div className="card mx-3 my-2" id="day-4">
                        <h4 className="card-title">06/14/2020</h4>
                        <img className="mx-auto" id="future-icons-4" alt="4 days ahead"></img>
                        <p className="card-text" id="temp-4">Temp: ___°F</p>
                        <p className="card-text" id="humid-4">Humidity: </p>
                    </div>
                    <div className="card mx-3 my-2" id="day-5">
                        <h4 className="card-title">06/15/2020</h4>
                        <img className="mx-auto" id="future-icons-5" alt="5 days ahead"></img>
                        <p className="card-text" id="temp-5">Temp: ___°F</p>
                        <p className="card-text" id="humid-5">Humidity: </p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
    };
};

export default MainCard;