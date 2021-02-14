import { combineReducers } from 'redux';

import tokens from './tokens';
import loggedUser from './loggedUser'
import changeMyPassword from './changeMyPassword'

export default combineReducers({
  tokens,
  loggedUser,
  changeMyPassword
});
