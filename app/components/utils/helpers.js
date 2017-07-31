// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var nytAPI = "baaf0c38ce6647068958c3900394856a"
// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(topic, startYear, endYear) {

    console.log(topic, startYear, endYear);

    
    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };            
    // Figure out the NYT search
    var queryURL = "//api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&api-key=" + nytAPI + "&begin_date=01012016" + "&end_date=12312017";
    return axios.get(queryURL).then(function(response) {
      console.log(response.docs);
    if (response.data.results[0]) {
    return response.data.results[0].formatted;
       }
      // // If we don't get any results, return an empty string
    return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
