import React, {Component} from "react";
import Row from "./Row.jsx";
import Col from "./Col.jsx";
import Jumbotron from "./Jumbotron.jsx";
import MainCard from "./MainCard.jsx";
import API from "../utils/API.js";
import WeeklyForecast from "./WeeklyForecast.jsx";

class Dashboard extends Component {
    state = {
        result: {},
        main: {},
        search: ""
      };

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
        this.searchCity(this.state.search);
    };

    render() {
        return (
            <>
            <Jumbotron 
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <Row>
            <Col size="md-4">
            <MainCard 
            city={this.state.result.name}
            // temp={this.state.result.main.temp}
            />
            </Col>
            <Col size="md-7">
            <WeeklyForecast />
            </Col>
            </Row>
            </>
          );
    };
};

export default Dashboard;