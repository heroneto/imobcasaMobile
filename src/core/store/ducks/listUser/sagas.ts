import { Effect, put } from 'redux-saga/effects';
import { getUsers as getUsersService } from '@core/services/apis'

import { loadSuccess, loadFailure } from './actions';

import { getAccessToken } from '@core/services/storage'

export function* getUsers(){
  try {
    const accessToken = yield getAccessToken()
    const result = yield getUsersService(accessToken)
    yield put(loadSuccess(result.data))
  } catch (error) {
    console.log(error.response)
    yield put(loadFailure());

  }
}