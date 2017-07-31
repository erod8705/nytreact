// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    this.setState({ term: event.target.value});
  },

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", start:"", end:""};
  },

  handleStart: function(event) {
    this.setState({ start: event.target.value});
  },

  handleEnd: function(event) {
    this.setState({ end: event.target.value});
  },

  handleChange: function(event) {
    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: event.target.value });
},
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Topic Search</strong>
              </h4>

            
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
            </div>
            <div className="form-group">
              <h4 className="">
                <strong>Start Date</strong>
              </h4>

            
              <input
                value={this.state.start}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleStart}
                required
              />
              <br />
            </div>
<div className="form-group">
              <h4 className="">
                <strong>End Date</strong>
              </h4>
              <input
                value={this.state.end}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleEnd}
                required
              />
              <br />
            </div>
            <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
