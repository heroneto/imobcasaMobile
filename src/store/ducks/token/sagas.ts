import { Effect, put } from 'redux-saga/effects';
import { login } from '../../../services/apis'

import { loadSuccess, loadFailure } from './actions';

interface RequestTokensProps {
  username: string,
  password: string
}

export function* requestTokens(action: Effect) {
  try {    
    const { username, password } = action.payload
    const response = yield login(username, password)

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
