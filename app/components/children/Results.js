// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Your Search Results</h1>
          <p>{this.props.helpers}</p> ///doublecheck this line of work
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
