import { Effect, put } from 'redux-saga/effects'
import { getUser } from '@core/services/storage'

import { loadFailure, loadSuccess } from './actions'


export function* getUserStorage() {
  try {
    const data = yield getUser()
    const user = JSON.parse(data)
    console.log(user)
    yield put(loadSuccess(user))
  } catch (error) {
    console.log(error)
    yield put(loadFailure())
  }
}