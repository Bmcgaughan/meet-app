import React from 'react';
import { shallow } from 'enzyme';

import EventList from '../EventList';
import Event from '../Event';

import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let eventWrapper;

  beforeAll(() => {
    eventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render corrent number of events', () => {
    expect(eventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event summary', () => {
    expect(eventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render event start time', () => {
    expect(eventWrapper.find('.start-time')).toHaveLength(1);
  });

  test('render event location', () => {
    expect(eventWrapper.find('.location')).toHaveLength(1);
  });

  test('show details is false on render', () => {
    expect(eventWrapper.state('showDetails')).toBe(false);
  });

  test('click showDetails toggles state to true', () => {
    const toggleState = eventWrapper.state('showDetails');
    eventWrapper.find('.show-button').simulate('click');
    expect(eventWrapper.state('showDetails')).toBe(!toggleState);
  });

  test('second click showDetails hides details', () => {
    eventWrapper.setState({
      showDetails: true,
    });
    eventWrapper.find('.show-button').simulate('click');
    expect(eventWrapper.state('showDetails')).toBe(false);
  });

  test('details are hidden on render', () => {
    expect(eventWrapper.find('.description')).toHaveLength(0);
  });

  test('details shown when clicked', () => {
    eventWrapper.find('.show-button').simulate('click');
    expect(eventWrapper.find('.description')).toHaveLength(1);
  });
});
