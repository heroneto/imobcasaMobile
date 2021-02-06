import { combineReducers } from 'redux';

import tokens from './tokens';
import loggedUser from './loggedUser'

export default combineReducers({
  tokens,
  loggedUser
});
