import { call, Effect, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { 
  createForm,
  getForm as getFormService
} from '@core/services/apis'

import { 
successCreate,
failureCreate,
successGet,
failureGet
  } from './actions';

import { FormsTypes as Types } from './types'

import { getAccessToken } from '@core/services/storage'


type CreateFormServiceResponse = SagaReturnType<typeof getFormService>

export function* createFormSagas(action: Effect){ 
  try {
    const accessToken = yield getAccessToken()
    const result : CreateFormServiceResponse = yield createForm(action.payload.data, accessToken)
    yield put(successCreate(result.data, "Formulário criado com sucesso"))
  } catch (error) {
    console.log(error.response)
    yield put(failureCreate("Falha ao cadastrar formulário"));
  }
}

type GetFormServiceResponse = SagaReturnType<typeof getFormService>

export function* getFormSaga(action: Effect){
  try {
    const accessToken = yield getAccessToken()
    const { id } = action.payload
    const result : GetFormServiceResponse = yield call(getFormService, id, accessToken)
    yield put(successGet(result.data))

  } catch (error) {
    console.log(error.response)
    yield put(failureGet("Falha ao obter formulário"));
  }
}


export function rootFormSagas() {
  return takeLatest(Types.CREATE, createFormSagas)
}