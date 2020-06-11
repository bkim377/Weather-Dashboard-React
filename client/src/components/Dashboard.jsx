import React, {Component} from "react";
import Row from "./Row.jsx";
import Col from "./Col.jsx";
import Jumbotron from "./Jumbotron.jsx";
import MainCard from "./MainCard.jsx";
import API from "../utils/API.jsx";
import WeeklyForecast from "./WeeklyForecast.jsx";

class Dashboard extends Component {
    render() {
        return (
            <>
            <Jumbotron />
            <Row>
            <Col size="md-4">
            <MainCard />
            </Col>
            <Col size="sm-8">
            <WeeklyForecast />
            </Col>
            </Row>
            </>
          );
    };
};

export default Dashboard;