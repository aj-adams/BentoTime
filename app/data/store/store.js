import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistory } from 'redux-simple-router';
import rootReducer from 'app/data/reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function(browserHistory) {
  // Create our middleware plugins
  const loggerMiddleware = createLogger();
  const reduxRouterMiddleware = syncHistory(browserHistory);

  const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware,
    loggerMiddleware
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}
