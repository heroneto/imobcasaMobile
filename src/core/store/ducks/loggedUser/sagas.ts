import { Effect, put } from 'redux-saga/effects';
import { loadSuccess, loadFailure } from './actions';

import { setUser as setUserService, getUser as getUserService, getAccessToken } from '@core/services/storage'
import { editLoggedUser } from '@core/services/apis'

export function* getUserStorage() {
  try {
    const data = yield getUserService()
    const user = JSON.parse(data)
    yield put(loadSuccess(user))
  } catch (error) {
    console.log(error)
    yield put(loadFailure());
  }
}

export function* editUser(action: Effect) {
  try {
    const { data } = action.payload
    data.active = true

    const accessToken = yield getAccessToken()

    console.log(data)
    console.log(accessToken)


    const result = yield editLoggedUser(data, accessToken)
    const user = result.data
    delete user.createdAt
    delete user.updatedAt
    delete user.password
    user.isLogged = true

    
    yield setUserService(user)
    yield put(loadSuccess(user))
  } catch (error) {
    console.log(error)
    yield put(loadFailure());
  }
}