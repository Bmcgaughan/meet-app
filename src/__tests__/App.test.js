import React from 'react';
import { shallow, mount } from 'enzyme';

import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';

describe('<App/> component', () => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test(' render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render number of events', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration', () => {
  test('App passes events state as prop to EvenList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes locations state as prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const citySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    citySearchWrapper.setState({ suggestions: locations });
    const suggestions = citySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await citySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get a list of all events when user selects See All Cities', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('change events input changes display', () => {
    const AppWrapper = mount(<App />);
    const eventObject = { target: { value: 1 } };
    AppWrapper.find('.event-input').simulate('change', eventObject);
    expect(AppWrapper.find('.event-input').prop('value')).toBe(1);
    AppWrapper.unmount();
  });

  test('change NumberOfEvents state when number input changes', () => {
    const AppWrapper = mount(<App />);
    const eventObject = { target: { value: 10 } };
    AppWrapper.find('.event-input').simulate('change', eventObject);
    //get state from NumberOfEvents component
    const numberOfEvents = AppWrapper.find(NumberOfEvents).state(
      'numberOfEvents'
    );
    expect(numberOfEvents).toBe(10);
    AppWrapper.unmount();
  });

  test('change Events when number input changes', () => {
    const AppWrapper = mount(<App />);
    const eventObject = { target: { value: 1 } };
    AppWrapper.find('.event-input').simulate('change', eventObject);
    expect(AppWrapper.find(EventList)).toHaveLength(1);
    AppWrapper.unmount();
  });
});
