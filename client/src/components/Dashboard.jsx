import React, {Component} from "react";
import Jumbotron from "./Jumbotron.jsx";
import MainCard from "./MainCard.jsx";
import API from "../utils/API.jsx";

class Dashboard extends Component {
    render() {
        return (
            <>
            <Jumbotron />
            <MainCard />
            </>
          );
    };
};

export default Dashboard;