import React from 'react';

import { useState } from 'react';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import arrowDown from '../src/img/icons/arrow-down.svg';
import arrowUp from '../src/img/icons/arrow-up.svg';

function TopBar(props) {
  const [showBar, setShowBar] = React.useState('');
  const [expander, setExpander] = React.useState(true);

  const toggleBar = () => {
    setExpander(!expander);
    setShowBar(expander ? '' : 'top-bar-show');
  };

  return (
    <div className={`top-bar-wrapper ${expander ? 'expand' : ''}`}>
      <div className={`top-bar ${showBar}`}>
        <CitySearch
          locations={props.locations}
          updateEvents={props.updateEvents}
        />
        <NumberOfEvents updateEvents={props.updateEvents} />
      </div>
      <div className="input-expand" onClick={() => toggleBar()}>
        <img src={expander ? arrowUp : arrowDown}></img>
      </div>
    </div>
  );
}

export default TopBar;
