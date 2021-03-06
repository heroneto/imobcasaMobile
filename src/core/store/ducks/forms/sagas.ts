import { call, Effect, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { 
  createForm,
  getForm as getFormService,
  getFormList as getFormListService,
  activeForm as activeFormService,
  inactiveForm as inactiveFormService
} from '@core/services/apis'

import { 
successCreate,
failureCreate,
successGet,
failureGet,
successRequestList,
failureRequestList,
successActive,
successInactivate,
failureActive,
failureInactivate
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

type GetFormListServiceResponse = SagaReturnType<typeof getFormListService>

export function* getFormListSaga(){
  try {
    const accessToken = yield getAccessToken()
    const result : GetFormListServiceResponse = yield call(getFormListService, accessToken)
    yield put(successRequestList(result.data, "Sucesso ao obter lista de formulários"))    
  } catch (error) {
    console.log(error.response)
    yield put(failureRequestList("Falha ao obter formulário"));
  }
}

type ActiveFormServiceResponse = SagaReturnType<typeof activeFormService>


export function* activeFormSaga(action: Effect){
  try {
    const { id } = action.payload
    const accessToken = yield getAccessToken()
    const result : ActiveFormServiceResponse = yield call(activeFormService, id, accessToken)
    yield put(successActive("Sucesso ao obter lista de formulários"))    
  } catch (error) {
    console.log(error.response)
    yield put(failureActive("Falha ao obter formulário"));
  }
}

type InactiveFormServiceResponse = SagaReturnType<typeof inactiveFormService>

export function* inactiveFormSaga(action: Effect){
  try {
    const { id } = action.payload
    const accessToken = yield getAccessToken()
    const result : InactiveFormServiceResponse = yield call(inactiveFormService, id, accessToken)
    yield put(successInactivate("Sucesso ao obter lista de formulários"))    
  } catch (error) {
    console.log(error.response)
    yield put(failureInactivate("Falha ao obter formulário"));
  }
}



export function rootFormSagas() {
  return takeLatest(Types.CREATE, createFormSagas)
}