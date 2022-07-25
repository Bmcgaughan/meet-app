import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('User has not specified number of Events to Display', ({
    given,
    when,
    then,
  }) => {
    given('use has not specified number of events to Display', () => {});

    let AppWrapper;
    when('user loads the page', () => {
      AppWrapper = mount(<App />);
    });

    then('number of events to display is set to thirty two', () => {
      AppWrapper.update();
      let numberOfEvents = AppWrapper.state('numberOfEvents');
      expect(numberOfEvents).toBe(32);
    });
  });

  test('User can change the number of events they want to display', ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      'the user wants to specify the number of events to display',
      () => {}
    );
    let AppWrapper;
    and('the user loads the page', () => {
      AppWrapper = mount(<App />);
      AppWrapper.setState({ showWelcomeScreen: false });
      AppWrapper.update();
    });

    when('the user changes the number of events to display', () => {
      AppWrapper.update();
      AppWrapper.find('.input-expand').simulate('click');
      AppWrapper.find('.event-input').simulate('change', {
        target: { value: 1 },
      });
    });

    then('the number of events to display is changed to the new number', () => {
      AppWrapper.update();
      console.log(AppWrapper.debug())
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });
});
