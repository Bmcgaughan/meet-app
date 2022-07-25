import React, { useEffect, useState } from 'react';

import './WelcomeScreen.css';
import background from './img/wm_back.svg';

function WelcomeScreen(props) {
  const [visible, setVisible] = useState(false);

  //setVisible on first render with delay
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <img className="welcome-background" alt='' src={background}></img>
      <div
        className={`welcome-content-wrapper ${visible ? 'fadeIn' : 'fadeOut'}`}
      >
        <h1>Welcome to the Meet app</h1>
        <h4>
          Log in to see upcoming events around the world for full-stack
          developers
        </h4>
        <div className="button_cont" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              className="btn-text"
            >
              <b>Sign in with google</b>
              
            </button>
          </div>
        </div>
        <a
          className="priv-link"
          href="https://bmcgaughan.github.io/meet-app/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    </div>
  ) : null;
}
export default WelcomeScreen;
