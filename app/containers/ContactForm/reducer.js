/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT,
  CREATE_CONTACT_ERROR,
  CHANGE_FILE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  contactData: {},
  file: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CONTACT:
      return state
        .set('contactData', action.contactData)
        .set('loading', true)
        .set('error', false)
        .set('responseContact', false);
    case CREATE_CONTACT_SUCCESS:
      return state
        .set('responseContact', action.responseContact)
        .set('loading', false)
    case CHANGE_FILE:
      return state
        .set('file', action.file)
    case CREATE_CONTACT_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
