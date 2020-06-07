import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
    return( 
    <div className="jumbotron jumbotron-responsive">
        <div className="page-header">
          <h1>Weather Dashboard</h1>
          <h4>Enter a city name in the search bar below and click the search button or press Enter.</h4>
          <h4>Click on a city name you already searched in the provided search list to search it again.</h4>
        </div>
        <div id="city-section">
        <form class="form-inline" id="city-form">
        <div class="form-group mx-sm-3 mb-2">
          <label for="citySearchBar" class="mr-2">Search for a City:  </label>
          <input type="text" class="form-control" id="city-search-bar" placeholder="Enter city name" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </div> 
        </form>
        </div>
        {/* <ul id="city-list"></ul> */}
    </div>
    );
};

export default Jumbotron;