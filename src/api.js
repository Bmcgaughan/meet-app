import axios from 'axios';
import NProgress from 'nprogress';
import { mockData } from './mock-data';

//validating token if it exists
export const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};


//sending the access code to get the access token
const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);
    const { access_token } = await fetch(
      `https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/token` +
        '/' +
        encodeCode
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => error);

    access_token && localStorage.setItem('access_token', access_token);

    return access_token;
  } catch (error) {
    error.json();
  }
};

export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location);
  const locations = [...new Set(extractLocations)];
  return locations;
};


//getEvents fuction used by APP.js to get the events
export const getEvents = async () => {
  NProgress.start();
  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return mockData;
  }

  //if user offline look for the events in localStorage
  if (!navigator.onLine) {
    const data = localStorage.getItem('lastEvents');
    NProgress.done();
    return data?JSON.parse(data).events:[];
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url =
      `https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/get-events` +
      '/' +
      token;
    const results = await axios.get(url);

    if (results.data) {
      const locations = extractLocations(results.data.events);
      localStorage.setItem('lastEvents', JSON.stringify(results.data));
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    NProgress.done();
    return results.data.events;
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const results = await axios.get(
        'https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url'
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

//clearn URL
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    const newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    const newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
};
