import { combineReducers } from 'redux';

import tokens from './tokens';
import loggedUser from './loggedUser'
import listUser from './users'

export default combineReducers({
  tokens,
  loggedUser,
  listUser,
});
