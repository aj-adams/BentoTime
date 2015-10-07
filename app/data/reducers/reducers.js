import { combineReducers } from 'redux';
import libraryReducer from 'app/data/reducers/libraryReducer';
import userReducer from './userReducer';
import { routeReducer } from 'redux-simple-router';

export default combineReducers({
  routing: routeReducer,
  user: userReducer,
  library: libraryReducer
});
