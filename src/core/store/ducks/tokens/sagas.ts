import { Effect, put } from 'redux-saga/effects';
import { login, getNewAccessToken } from '@core/services/apis'

import { loadSuccess, loadFailure } from './actions';

import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken, setUser } from '@core/services/storage'

export function* authenticate(action: Effect) {
  try {
    const { username, password } = action.payload
    const response = yield login(username, password)
    const { tokens, fullName, email, userId: id, admin, active } = response.data
    const { accessToken, refreshToken } = tokens
    yield setAccessToken(accessToken)
    yield setRefreshToken(refreshToken)

    const userData = {
      fullName,
      email,
      id,
      isLogged: true,
      admin,
      username,
      active
    }

    yield setUser(userData)
    yield put(loadSuccess({ 
        accessToken, 
        refreshToken
      })
    );
  } catch (err) {
    console.log(err.response.status)
    console.log(err.response.data)

    const userData = {
      fullName: "",
      email: "",
      id: "",
      isLogged: false,
      admin: false,
      username: "",
      active: false
    }
    yield setUser(userData)
    yield setAccessToken("")
    yield setRefreshToken("")
    yield put(loadFailure());
  }
}

export function* getTokensStorage(){
  try {
    const refreshToken = yield getRefreshToken()
    const accessToken = yield getAccessToken()
    yield put(loadSuccess({
      refreshToken: refreshToken,
      accessToken: accessToken
    }))
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* refreshAccessToken(){
  try{
    const refreshToken = yield getRefreshToken()
    if(refreshToken){
      const result = yield getNewAccessToken(refreshToken)
      const { tokens, fullName, email, userId: id, username, admin, active } = result.data
      const userData = {
        fullName,
        email,
        id,
        isLogged: true,
        username,
        admin, 
        active
      }
      yield setUser(userData)
  
      const { accessToken } = tokens
      yield setAccessToken(accessToken)
      yield put(loadSuccess({ 
          accessToken,
          refreshToken
        })
      )
    }else {
      const userData = {
        fullName: "",
        email: "",
        id: "",
        isLogged: false,
        username: "",
        admin: false,
        active: false,
      }
      yield setUser(userData)
      yield put(loadSuccess({ 
        accessToken: "",
        refreshToken: "",
      })
    )
    }

  }catch(err){
    yield put(loadFailure());
  }
}
