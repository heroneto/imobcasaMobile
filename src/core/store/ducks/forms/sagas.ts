import { Effect, put, takeLatest } from 'redux-saga/effects';
import { 
createForm
} from '@core/services/apis'

import { 
successCreate,
failureCreate
  } from './actions';

import { FormsTypes as Types } from './types'

import { getAccessToken } from '@core/services/storage'

export function* createFormSagas(action: Effect){ 
  try {
    const accessToken = yield getAccessToken()
    const result = yield createForm(action.payload.data, accessToken)
    yield put(successCreate(result.data, "Formulário criado com sucesso"))
  } catch (error) {
    console.log(error.response)
    yield put(failureCreate("Falha ao cadastrar formulário"));
  }
}



export function rootFormSagas() {
  return takeLatest(Types.CREATE, createFormSagas)
}