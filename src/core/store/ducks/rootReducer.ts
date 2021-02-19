import { combineReducers } from 'redux';

import loggedUser from './loggedUser'
import listUser from './users'
import auth from './auth'

export default combineReducers({
  loggedUser,
  listUser,
  auth
});
