import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { authenticate, getTokensStorage, refreshAccessToken } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOAD_REQUEST, authenticate),
    takeLatest(AuthTypes.LOAD_TOKENS_STORAGE, getTokensStorage),
    takeLatest(AuthTypes.LOAD_REFRESH_ACCESSTOKEN, refreshAccessToken),
  ]);
}
