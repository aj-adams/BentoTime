import { merge } from 'lodash';
import { UPDATE_LOCATION } from 'redux-simple-router';
import * as ActionTypes from 'app/data/actions/ActionTypes';

const initialState = {
  book: undefined,
  chapter: undefined,
  page: undefined,
  readMode: undefined
};

export default function current(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.SET_CURRENT_BOOK:
      return merge({}, state, {
        book: action.id
      });

    case ActionTypes.SET_CURRENT_CHAPTER:
      return merge({}, state, {
        chapter: action.id
      });

    case ActionTypes.SET_CURRENT_PAGE:
      return merge({}, state, {
        page: action.id
      });

    case ActionTypes.SET_READ_MODE:
      return merge({}, state, {
        readMode: action.readMode
      });

    case UPDATE_LOCATION:
      return state;

    default:
      return state;
  }
}
