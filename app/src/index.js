import '../styles/app.scss';

import { render } from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import makeRoutes from './routes';
import Root from './containers/Root';
import makeStore from './store/makeStore';


const initialState = window.__INITIAL_STATE__;
const store = makeStore(initialState, browserHistory);

const routes = makeRoutes(store);

// render(<Root store={store} history={history} />, document.getElementById('root'));
render(<Root store={store} history={browserHistory} routes={routes} />, document.getElementById('root'));
