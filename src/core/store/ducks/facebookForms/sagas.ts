import { Effect, put } from 'redux-saga/effects';
import { 
  getFacebookFormList,
  getMoreFacebookFormList
} from '@core/services/apis'

import { 
  failurelistFacebookForms,
  successlistFacebookForms,
  successLoadMoreFacebookForms,
  failureLoadMoreFacebookForms
  } from './actions';

import { getAccessToken } from '@core/services/storage'

export function* listForms(){
  try {
    const accessToken = yield getAccessToken()
    const result = yield getFacebookFormList(accessToken)
    yield put(successlistFacebookForms(result.data, "Lista carregada com sucesso"))
  } catch (error) {
    console.log(error.response)
    yield put(failurelistFacebookForms("Falha ao obter lista de formulários"));
  }
}

export function* listMoreForms(action: Effect){
  try {
    const accessToken = yield getAccessToken()
    const result = yield getMoreFacebookFormList(accessToken, action.payload.after)
    yield put(successLoadMoreFacebookForms(result.data, "Lista carregada com sucesso"))
  } catch (error) {
    console.log(error.response)
    yield put(failureLoadMoreFacebookForms("Falha ao obter lista de formulários"));
  }
}