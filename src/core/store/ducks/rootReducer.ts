import { combineReducers } from 'redux';

import loggedUser from './loggedUser'
import user from './users'
import auth from './auth'
import facebookForms from './facebookForms'
import forms from './forms'
import userForm from './userForm'
import lead from './lead'
import leadStatus from './leadStatus'
import leadSources from './leadSources'

export default combineReducers({
  loggedUser,
  user,
  auth,
  facebookForms,
  forms,
  userForm,
  lead,
  leadStatus,
  leadSources
});

