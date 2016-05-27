import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.css'
import './app.css'

import App from 'containers/App/App'

import {hashHistory} from 'react-router'
import makeRoutes from './routes'
import makeStore from './makeStore'

const initialState = window.__INITIAL_STATE__;
const store = makeStore(initialState);

const routes = makeRoutes()

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App history={hashHistory}
        routes={routes} store={store} />,
mountNode);
