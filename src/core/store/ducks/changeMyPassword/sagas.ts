import { Effect, put } from 'redux-saga/effects';
import { loadSuccess, loadFailure } from './actions';

import { 
    getAccessToken, 
  } from '@core/services/storage'
import { changeMyPassword as changeMyPasswordService } from '@core/services/apis'

export function* changeMyPassword(action: Effect){
  try {
    const { password, newPassword } = action.payload
    const accessToken = yield getAccessToken()

    console.log(action.payload)
    const result = yield changeMyPasswordService({
      password,
      newPassword
    }, 
      accessToken
    )

    console.log(result.status)
    
    yield put(loadSuccess({
      response: "Troca da senha com sucesso"
    }))
  } catch (error) {
    console.log(error.response.status)
    yield put(loadFailure({
      response: "Ocorreu um erro ao alterar a senha, verifique a senha antiga digitada"
    }))
  }
}