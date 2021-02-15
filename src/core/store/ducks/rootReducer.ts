import { combineReducers } from 'redux';

import tokens from './tokens';
import loggedUser from './loggedUser'
import changeMyPassword from './changeMyPassword'
import listUser from './listUser'
import selectedUser from './selectedUser'

export default combineReducers({
  tokens,
  loggedUser,
  changeMyPassword,
  listUser,
  selectedUser
});
