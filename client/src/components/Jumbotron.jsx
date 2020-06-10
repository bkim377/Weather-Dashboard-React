import React, {Component} from "react";
import "./Jumbotron.css";

class Jumbotron extends React.Component {
  render() {  
  return ( 
    <div className="jumbotron jumbotron-responsive">
        <div className="page-header">
          <h1>Weather Dashboard</h1>
          <h4>Enter a city name in the search bar below and click the search button or press Enter.</h4>
          <h4>Click on a city name you already searched in the provided search list to search it again.</h4>
        </div>
        <p></p>
        <div id="city-section">
        <form className="form-inline" id="city-form">
        <div className="form-group mx-auto">
          <label htmlFor="citySearchBar" className="mr-2">Search for a City:  </label>
          <input type="text" className="form-control" id="city-search-bar" placeholder="Enter city name" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </div> 
        </form>
        </div>
        {/* <ul id="city-list"></ul> */}
    </div>
    );
  };
};

export default Jumbotron;
