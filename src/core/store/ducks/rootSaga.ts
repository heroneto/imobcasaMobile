import { all, takeLatest } from 'redux-saga/effects';

import { TokenTypes } from './tokens/types';
import { authenticate, getTokensStorage, refreshAccessToken } from './tokens/sagas';

import { LoggedUserTypes } from './loggedUser/types'
import * as loggedUserActions from './loggedUser/sagas'

import { ListUserTypes } from './listUser/types'
import * as listUserSagas from './listUser/sagas'


export default function* rootSaga() {
  return yield all([
    takeLatest(TokenTypes.LOAD_REQUEST, authenticate),
    takeLatest(TokenTypes.LOAD_TOKENS_STORAGE, getTokensStorage),
    takeLatest(TokenTypes.LOAD_REFRESH_ACCESSTOKEN, refreshAccessToken),
    takeLatest(LoggedUserTypes.LOAD_REQUEST, loggedUserActions.getUserStorage),
    takeLatest(LoggedUserTypes.LOAD_EDIT_USER, loggedUserActions.editUser),
    takeLatest(LoggedUserTypes.LOAD_LOGOUT, loggedUserActions.logout),
    takeLatest(LoggedUserTypes.LOAD_CHANGE_PASSWORD, loggedUserActions.changeMyPassword),
    takeLatest(ListUserTypes.REQUEST_LIST, listUserSagas.getUserList),
    takeLatest(ListUserTypes.SELECT, listUserSagas.selectUser),
    takeLatest(ListUserTypes.EDIT, listUserSagas.editUser),
    takeLatest(ListUserTypes.RESET_PASSWORD, listUserSagas.resetUserPassword),
    takeLatest(ListUserTypes.CREATE, listUserSagas.createUser),
    takeLatest(ListUserTypes.DELETE, listUserSagas.deleteUser),
  ]);
}
