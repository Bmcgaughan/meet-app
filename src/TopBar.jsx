import React from 'react';

import { useState } from 'react';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import arrowDown from '../src/img/icons/arrow-down.svg';
import arrowUp from '../src/img/icons/arrow-up.svg';
import meetLogo from '../src/img/meet-app-192.png';

function TopBar(props) {
  const [showBar, setShowBar] = React.useState('');
  const [expander, setExpander] = React.useState(true);

  const toggleBar = () => {
    setExpander(!expander);
    setShowBar(expander ? '' : 'top-bar-show');
  };

  return (
    <div className={`top-bar-wrapper ${expander ? 'expand' : ''}`}>
      <div className="top-stick">
        {!expander ? (
          <div className="top-info">
            <div className="top-row">
              {/* <div className="meet-logo-wrap">
              <img src={meetLogo}></img>
            </div> */}
              <div className="top-col">
                <div className="top-query-val">
                  {props.query ? props.query : 'Searching All Cities'}
                </div>
                <div className="top-event-count">{`${props.eventDisplay} of ${props.eventCount} Events`}</div>
              </div>
              <div className="top-title">Meet App</div>
            </div>
          </div>
        ) : null}
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
    </div>
  );
}

export default TopBar;
