import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('When user loads the page, the event details should be hidden', ({
    given,
    when,
    then,
  }) => {
    given("the user hasn't clicked the Show Event Details button", () => {});

    let AppWrapper;
    when('the user loads the page', () => {
      AppWrapper = mount(<App />);
    });

    then('the event details should be hidden', () => {
      expect(AppWrapper.find('.event .description')).toHaveLength(0);
    });
  });

  test('When user clicks the Show Event Details button, the event details should be shown', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given('the user wants to see even details', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks the Show Event Details" button', () => {
      AppWrapper.update();
      let firstEvent = AppWrapper.find('.event').at(0);
      firstEvent.find('.show-button').simulate('click');
    });

    then('the event details should be shown', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event .description')).toHaveLength(1);
    });
  });

  test('When user clicks the Show Event Details button again, the event details should be hidden', ({
    given,
    and,
    then,
  }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);

    given('the user has clicked the Show Event Details button', () => {
        AppWrapper.update();
        let firstEvent = AppWrapper.find('.event').at(0);
        firstEvent.find('.show-button').simulate('click');
    });

    and('the user has clicked the Show Event Details button again', () => {
        AppWrapper.update();
        let firstEvent = AppWrapper.find('.event').at(0);
        firstEvent.find('.show-button').simulate('click');
    });

    then('the event details should be hidden', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event .description')).toHaveLength(0);
    });
  });
});
