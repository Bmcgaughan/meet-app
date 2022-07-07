import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor() {
    super();

    this.state = {
      numberOfEvents: 32,
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });

    this.props.updateEvents(null, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          className="event-input"
          type="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
