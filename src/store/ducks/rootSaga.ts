import { all, takeLatest } from 'redux-saga/effects';

import { TokenTypes } from './token/types';
import { requestTokens } from './token/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(TokenTypes.LOAD_REQUEST, requestTokens),
  ]);
}
