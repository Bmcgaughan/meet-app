import React, { Component } from 'react';
import './App.css';

import WelcomeScreen from './WelcomeScreen';
import EventList from './EventList';
import TopBar from './TopBar';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';

import './styles.css';
import './App.css';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    availableEvents: 0,
    query: '',
    showWelcomeScreen: undefined,
    offlineText: '',
  };

  async componentDidMount() {
    this.mounted = true;
    //checking if user is authenticated and if token is still valid
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    console.log(isTokenValid);
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    this.setState({ showWelcomeScreen: !(code || isTokenValid) });

    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events,
            locations: extractLocations(events),
            availableEvents: events.length,
          });
        }
      });
    }

    // getEvents().then((events) => {
    //   if (this.mounted) {
    //     this.setState({
    //       events: events,
    //       locations: extractLocations(events),
    //       availableEvents: events.length,
    //     });
    //   }
    // });

    // this.setState({ showWelcomeScreen: true });

    if (!navigator.onLine) {
      this.setState({
        offlineText: 'You are offline - info may not be up to date',
      });
    } else {
      this.setState({ offlineText: '' });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if (!eventCount) {
      eventCount = this.state.numberOfEvents;
    } else {
      eventCount = parseInt(eventCount);
      this.setState({ numberOfEvents: eventCount });
    }

    if (!location && !this.state.query) {
      location = 'all';
    } else {
      if (location !== this.state.query) {
        this.setState({ query: location });
      }
    }

    getEvents().then((events) => {
      let locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      this.setState({ availableEvents: locationEvents.length });
      this.setState({ events: locationEvents.slice(0, eventCount) });
    });
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) {
      return <div className="App" />;
    }
    return (
      <div className="App">
        {this.state.showWelcomeScreen ? (
          <WelcomeScreen
            showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => {
              getAccessToken();
            }}
          />
        ) : (
          <div className="main-wrapper">
            <TopBar
              locations={this.state.locations}
              updateEvents={this.updateEvents}
              query={this.state.query}
              numEvents={this.state.numberOfEvents}
              eventCount={this.state.availableEvents}
              eventDisplay={this.state.events.length}
              offlineText={this.state.offlineText}
            />
            <div className="event-list-wrapper">
              <EventList events={this.state.events} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
