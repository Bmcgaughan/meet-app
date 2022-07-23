import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();

    this.state = {
      showDetails: false,
    };
  }

  //format date to MM/DD/YYY HH: AM/PM
  formatDate(value) {
    const date = new Date(value);
    return date.toLocaleString();
  }

  handleDetailClick = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };

  render() {
    const { event } = this.props;
    const formatDate = this.formatDate(event.start.dateTime);

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
        <p className="start-time">{formatDate}</p>
        <p className="location">{event.location}</p>
        {this.state.showDetails && (
          <p className="description">{event.description}</p>
        )}
        <button className="show-button" onClick={this.handleDetailClick}>
          {!this.state.showDetails ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}

export default Event;
