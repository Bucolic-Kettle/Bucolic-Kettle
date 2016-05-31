import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';
import './app.css';

import Root from './containers/RootContainer';

import { browserHistory } from 'react-router';
import makeRoutes from './makeRoutes';
import makeStore from './makeStore';
import { syncHistoryWithStore } from 'react-router-redux';


const initialState = window.__INITIAL_STATE__;
const store = makeStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

const routes = makeRoutes();

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
mountNode);
