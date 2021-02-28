import { combineReducers } from 'redux';

import loggedUser from './loggedUser'
import listUser from './users'
import auth from './auth'
import facebookForms from './facebookForms'
import forms from './forms'

export default combineReducers({
  loggedUser,
  listUser,
  auth,
  facebookForms,
  forms
});
