import { all, call, takeLatest } from 'redux-saga/effects';

import { LoggedUserTypes } from './loggedUser/types'
import * as loggedUserActions from './loggedUser/sagas'

import { UsersTypes } from './users/types'
import * as listUserSagas from './users/sagas'

import { AuthTypes } from './auth/types'
import * as AuthSagas from './auth/sagas'

import { FacebookFormsTypes } from './facebookForms/types'
import * as FacebookFormsSagas from './facebookForms/sagas'

import { FormsTypes } from './forms/types'
import * as FormsSagas from './forms/sagas'

import { UserFormTypes } from './userForm/types'
import * as UserFormSagas from './userForm/sagas'

export default function* rootSaga() : Generator {
  return yield all([
    takeLatest(LoggedUserTypes.GET, loggedUserActions.getUserStorage),
    takeLatest(LoggedUserTypes.EDIT, loggedUserActions.editUser),
    takeLatest(LoggedUserTypes.CHANGE_PASSWORD, loggedUserActions.changeMyPassword),
    takeLatest(UsersTypes.REQUEST_LIST, listUserSagas.getUserList),
    takeLatest(UsersTypes.SELECT, listUserSagas.selectUser),
    takeLatest(UsersTypes.EDIT, listUserSagas.editUser),
    takeLatest(UsersTypes.RESET_PASSWORD, listUserSagas.resetUserPassword),
    takeLatest(UsersTypes.CREATE, listUserSagas.createUser),
    takeLatest(UsersTypes.DELETE, listUserSagas.deleteUser),
    takeLatest(AuthTypes.LOGIN, AuthSagas.login),
    takeLatest(AuthTypes.LOGOUT, AuthSagas.logout),
    takeLatest(AuthTypes.RENEW, AuthSagas.renew),
    takeLatest(FacebookFormsTypes.LIST, FacebookFormsSagas.listForms),
    takeLatest(FacebookFormsTypes.LOAD_MORE, FacebookFormsSagas.listMoreForms),
    takeLatest(FormsTypes.CREATE, FormsSagas.createFormSagas),
    takeLatest(FormsTypes.GET, FormsSagas.getFormSaga),
    takeLatest(FormsTypes.REQUEST_LIST, FormsSagas.getFormListSaga),
    takeLatest(FormsTypes.ENABLE, FormsSagas.activeFormSaga),
    takeLatest(FormsTypes.DISABLE, FormsSagas.inactiveFormSaga),
    takeLatest(FormsTypes.ADD_USER, FormsSagas.addUser),
    takeLatest(UserFormTypes.REQUEST_LIST, UserFormSagas.requestUsers),    
    takeLatest(UserFormTypes.REMOVE, UserFormSagas.removeUserForm),
  ]);
}
