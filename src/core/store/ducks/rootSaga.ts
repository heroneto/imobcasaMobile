import { all, takeLatest } from 'redux-saga/effects';

import { TokenTypes } from './tokens/types';
import { authenticate, getTokensStorage, refreshAccessToken } from './tokens/sagas';

import { LoggedUserTypes } from './loggedUser/types'
import * as loggedUserActions from './loggedUser/sagas'

import { ListUserTypes } from './listUser/types'
import { getUsers } from './listUser/sagas'

import { SelectedUserTypes } from './selectedUser/types'
import * as selectedUserSagas from './selectedUser/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(TokenTypes.LOAD_REQUEST, authenticate),
    takeLatest(TokenTypes.LOAD_TOKENS_STORAGE, getTokensStorage),
    takeLatest(TokenTypes.LOAD_REFRESH_ACCESSTOKEN, refreshAccessToken),
    takeLatest(LoggedUserTypes.LOAD_REQUEST, loggedUserActions.getUserStorage),
    takeLatest(LoggedUserTypes.LOAD_EDIT_USER, loggedUserActions.editUser),
    takeLatest(LoggedUserTypes.LOAD_LOGOUT, loggedUserActions.logout),
    takeLatest(LoggedUserTypes.LOAD_CHANGE_PASSWORD, loggedUserActions.changeMyPassword),
    takeLatest(ListUserTypes.LOAD_REQUEST, getUsers),
    takeLatest(SelectedUserTypes.LOAD_REQUEST, selectedUserSagas.getUserStorage),
    takeLatest(SelectedUserTypes.LOAD_EDIT_USER, selectedUserSagas.editUser)
  ]);
}
