import { Effect, put, call, SagaReturnType } from 'redux-saga/effects';
import {
  login as loginService,
  getNewAccessToken 
} from '@core/services/apis'

import {
  setUser,
  setRefreshToken,
  setAccessToken,
  clearUser,
  getRefreshToken
} from "@core/services/storage"

import {
  failureLogin,
  successLogin,
  successLogout,
  failureLogout,
  successRenew,
  failureRenew
} from './actions';


type LoginServiceResponse = SagaReturnType<typeof loginService>

export function* login(action: Effect){
  try {
    const { username, password } = action.payload.data
    const result : LoginServiceResponse = yield call(loginService, username, password)
    const data = {
      response: "Login com sucesso",
      httpCode: result.status
    }
    const { tokens, ...user } = result.data
    yield setUser({
      ...user,
      isLogged: true
    })
    yield setAccessToken(tokens.accessToken)
    yield setRefreshToken(tokens.refreshToken)
    yield put(successLogin(data))
  } catch (error) {
    console.log(error.response)
    const data = {
      response: "Usuário ou senha incorretos, verifique os campos e tente novamente.",
      httpCode: error.response.status
    }
    yield put(failureLogin(data))
  }
}

export function* logout(){
  try {
    yield setAccessToken("")
    yield setRefreshToken("")
    yield clearUser()

    yield put(successLogout())
    
  } catch (error) {
    console.log(error)
    const data = {
      response: "Falha ao deslogar",
      httpCode: 0
    }
    yield put(failureLogout(data))
  }
}

function* check(){}


type RenewServiceResponse = SagaReturnType<typeof getNewAccessToken>

export function* renew(){
  try {
    const refreshToken = yield getRefreshToken()
    const result : RenewServiceResponse = yield call(getNewAccessToken, refreshToken)
    const { tokens, ...user } = result.data
    const data = {
      response: "Login com sucesso",
      httpCode: result.status
    }
    yield setUser({
      ...user,
      isLogged: true
    })
    yield setAccessToken(tokens.accessToken)
    yield setRefreshToken(tokens.refreshToken)
    yield put(successRenew(data))

  } catch (error) {
    console.log(error.response)
    const data = {
      response: "Falha ao renovar tokens",
      httpCode: error.response.status
    }
    yield put(failureRenew(data))
  }
}
