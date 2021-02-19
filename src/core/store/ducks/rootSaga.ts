import { all, takeLatest } from 'redux-saga/effects';

import { LoggedUserTypes } from './loggedUser/types'
import * as loggedUserActions from './loggedUser/sagas'

import { UsersTypes } from './users/types'
import * as listUserSagas from './users/sagas'


import { AuthTypes } from './auth/types'
import * as AuthSagas from './auth/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(LoggedUserTypes.LOAD_REQUEST, loggedUserActions.getUserStorage),
    takeLatest(LoggedUserTypes.LOAD_EDIT_USER, loggedUserActions.editUser),
    takeLatest(LoggedUserTypes.LOAD_LOGOUT, loggedUserActions.logout),
    takeLatest(LoggedUserTypes.LOAD_CHANGE_PASSWORD, loggedUserActions.changeMyPassword),
    takeLatest(UsersTypes.REQUEST_LIST, listUserSagas.getUserList),
    takeLatest(UsersTypes.SELECT, listUserSagas.selectUser),
    takeLatest(UsersTypes.EDIT, listUserSagas.editUser),
    takeLatest(UsersTypes.RESET_PASSWORD, listUserSagas.resetUserPassword),
    takeLatest(UsersTypes.CREATE, listUserSagas.createUser),
    takeLatest(UsersTypes.DELETE, listUserSagas.deleteUser),
    takeLatest(AuthTypes.LOGIN, AuthSagas.login),
    takeLatest(AuthTypes.LOGOUT, AuthSagas.logout),
    takeLatest(AuthTypes.RENEW, AuthSagas.renew),

    

  ]);
}
