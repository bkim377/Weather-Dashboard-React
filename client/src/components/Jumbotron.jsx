import React from "react";
import "./css/Jumbotron.css";

function Jumbotron(props) {
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
          <input 
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text" 
          className="form-control" 
          id="city-search-bar" 
          placeholder="Enter city name" />
          <button onClick={props.handleFormSubmit} className="btn btn-primary"><i className="fa fa-search"></i></button>
        </div> 
        </form>
        </div>
        <ul id="city-list"></ul>
    </div>
    );
  };

export default Jumbotron;
