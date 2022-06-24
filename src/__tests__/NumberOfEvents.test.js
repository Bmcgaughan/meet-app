import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let numberOfEventsWrapper;

  beforeAll(() => {
    numberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('component renders', () => {
    expect(numberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('text box renders', () => {
    expect(numberOfEventsWrapper.find('.event-input')).toHaveLength(1);
  });

  test('event count is 32 by default', () => {
    expect(numberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

  test('textbox populated with 32 by default', () => {
    expect(numberOfEventsWrapper.find('.event-input').prop('value')).toBe(32);
  });

  test('change state when number input changes', () => {
    const eventObject = { target: { value: 10 } };
    numberOfEventsWrapper.find('.event-input').simulate('change', eventObject);
    expect(numberOfEventsWrapper.state('numberOfEvents')).toBe(10);
  });

  test('change input value display when input changes', () => {
    const eventObject = { target: { value: 10 } };
    numberOfEventsWrapper.find('.event-input').simulate('change', eventObject);
    expect(numberOfEventsWrapper.find('.event-input').prop('value')).toBe(10);
  });
});
