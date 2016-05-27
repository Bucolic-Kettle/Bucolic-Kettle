import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default (initialState = {}, history) => {
  const devTools = window.devToolsExtension && window.devToolsExtension();
  
  // const devtoolsExt = global.devToolsExtension && global.devToolsExtension();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger(), routerMiddleware(history)),
      devTools
    )
  )
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
};
