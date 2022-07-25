import React, { Component } from 'react';
import './App.css';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

//importing components
import WelcomeScreen from './WelcomeScreen';
import EventList from './EventList';
import TopBar from './TopBar';
import EventGenre from './EventGenre';

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

  //checking if user is authenticated and if token is still valid
  //if not authenticated then show WelcomeScreen
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
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

    //if using offline populate a warning message
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

  //function used by CitySearch and NumberOfEvents to update the events
  updateEvents = (location, eventCount) => {
    if (!eventCount) {
      eventCount = this.state.numberOfEvents;
    } else {
      eventCount = parseInt(eventCount);
      this.setState({ numberOfEvents: eventCount });
    }

    if (location === 'pass') {
      location = this.state.query;
    }

    if (location !== this.state.query) {
      this.setState({ query: location });
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

  //generating count of events per location
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
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
            {/* sending values to the topbar to render the CitySearch and NumberOfEvents components */}
            <TopBar
              locations={this.state.locations}
              updateEvents={this.updateEvents}
              query={this.state.query}
              numEvents={this.state.numberOfEvents}
              eventCount={this.state.availableEvents}
              eventDisplay={this.state.events.length}
              offlineText={this.state.offlineText}
            />
            <div className="chart-wrapper">
              <div className="genre-chart">
                <EventGenre events={this.state.events} />
              </div>
              <div className="scatter-chart">
                <ResponsiveContainer height={400} width={'100%'}>
                  <ScatterChart
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 0,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis type="category" dataKey="city" name="city" />
                    <YAxis
                      type="number"
                      dataKey="number"
                      name="number of events"
                      allowDecimals={false}
                    />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter
                      name="Events by City"
                      data={this.getData()}
                      fill="#fff"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
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
