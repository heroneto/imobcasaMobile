import { all, takeLatest } from 'redux-saga/effects';

import { TokenTypes } from './tokens/types';
import { authenticate, getTokensStorage, refreshAccessToken } from './tokens/sagas';

import { LoggedUserTypes } from './loggedUser/types'
import * as loggedUserActions from './loggedUser/sagas'

import { UsersTypes } from './users/types'
import * as listUserSagas from './users/sagas'


export default function* rootSaga() {
  return yield all([
    takeLatest(TokenTypes.LOAD_REQUEST, authenticate),
    takeLatest(TokenTypes.LOAD_TOKENS_STORAGE, getTokensStorage),
    takeLatest(TokenTypes.LOAD_REFRESH_ACCESSTOKEN, refreshAccessToken),
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
  ]);
}
