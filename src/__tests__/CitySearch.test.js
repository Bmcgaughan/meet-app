import React from 'react';
import { shallow } from 'enzyme';

import CitySearch from '../CitySearch';

describe('<CitySearch /> component', () => {
  let citySearchWrapper;

  beforeAll(() => {
    citySearchWrapper = shallow(<CitySearch />);
  });

  test('render text input', () => {
    expect(citySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('renders list of suggestions', () => {
    expect(citySearchWrapper.find('.suggestions')).toHaveLength(1);
  });
});
