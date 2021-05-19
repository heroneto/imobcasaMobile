import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import {
  successGetLeadDetails,
  failureGetLeadDetails,
  successEditLead,
  failureEditLead
} from './actions';

import {
  getAccessToken,
} from '@core/services/storage'
import { getLeadDetails, leadEdit } from '@core/services/apis'


type getLeadDetailsResponse = SagaReturnType<typeof getLeadDetails>


export function* getLeadDetailsRequest(action: Effect) {
  try {
    const { id } = action.payload
    const accessToken: string = yield getAccessToken()
    const result: getLeadDetailsResponse = yield getLeadDetails(accessToken, id)
    yield put(successGetLeadDetails(result.data))
  } catch (error) {
    console.log(error)
    yield put(failureGetLeadDetails("Falha ao carregar usuário"));
  }
}



type editLeadDetailsResponse = SagaReturnType<typeof leadEdit>


export function* editLeadDetailsRequest(action: Effect) {
  try {
    const { data } = action.payload
    const accessToken: string = yield getAccessToken()
    const result: editLeadDetailsResponse = yield leadEdit(accessToken, data)
    yield put(successEditLead("Lead editado com sucesso"))
  } catch (error) {
    console.log(error.response.data)
    yield put(failureEditLead("Falha ao editar usuário"));
  }
}
