import React, { Component } from 'react';

import { InfoAlert } from './Alert';

class CitySearch extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: undefined,
      infoText: '',
    };
  }

  //user typing into search box updates query state
  //will provide alert if city is not found in the list
  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'No city with that name - please try another',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: '',
      });
    }
  };

  //handling whether suggestions displays or now when input is clicked
  handleFocus = () => {
    this.setState({ showSuggestions: !this.state.showSuggestions });
  };

  //user clicks on a city from the list will update the Events in App.js
  handleItemClicked = (suggestion) => {
    console.log(suggestion)
    this.setState({
      query: suggestion,
      infoText: '',
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion, null);
  };

  render() {
    return (
      <div className="CitySearch">
        
        <p>Search for a city:</p>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => this.handleFocus()}
          ref={this.clickRef}
        />
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: 'none' }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked('all')} key="all">
            <b>See all Cities</b>
          </li>
        </ul>
        <InfoAlert alertName={'info-alert'} text={this.state.infoText} />
      </div>
    );
  }
}

export default CitySearch;
