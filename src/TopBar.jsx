import React from 'react';

import { useState } from 'react';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import arrowDown from '../src/img/icons/arrow-down.svg';
import arrowUp from '../src/img/icons/arrow-up.svg';
import { InfoAlert } from './Alert';

function TopBar(props) {
  const [showBar, setShowBar] = useState('');
  const [expander, setExpander] = useState(false);

  const toggleBar = () => {
    setExpander(!expander);
    setShowBar(expander ? '' : 'top-bar-show');
  };

  return (
    <div className={`top-bar-wrapper ${expander ? 'expand' : ''}`}>
      <div className="top-stick">
        {props.offlineText && (
          <InfoAlert alertName={'offline-alert'} text={props.offlineText} />
        )}
        {!expander ? (
          <div className="top-info">
            <div className="top-row">
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
          <img src={expander ? arrowUp : arrowDown} alt="expander arrow"></img>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
