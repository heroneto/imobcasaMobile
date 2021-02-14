import { all, takeLatest } from 'redux-saga/effects';

import { TokenTypes } from './tokens/types';
import { authenticate, getTokensStorage, refreshAccessToken } from './tokens/sagas';

import { LoggedUserTypes } from './loggedUser/types'
import { editUser, getUserStorage, logout } from './loggedUser/sagas'

import { ChangeMyPasswordTypes } from './changeMyPassword/types'
import { changeMyPassword } from './changeMyPassword/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(TokenTypes.LOAD_REQUEST, authenticate),
    takeLatest(TokenTypes.LOAD_TOKENS_STORAGE, getTokensStorage),
    takeLatest(TokenTypes.LOAD_REFRESH_ACCESSTOKEN, refreshAccessToken),
    takeLatest(LoggedUserTypes.LOAD_REQUEST, getUserStorage),
    takeLatest(LoggedUserTypes.LOAD_EDIT_USER, editUser),
    takeLatest(LoggedUserTypes.LOAD_LOGOUT, logout),
    takeLatest(ChangeMyPasswordTypes.LOAD_REQUEST, changeMyPassword),
  ]);
}
