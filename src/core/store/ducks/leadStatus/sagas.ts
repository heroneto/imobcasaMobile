import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import { 
    successList,
    failureList,
  } from './actions';

import { 
    getAccessToken,
  } from '@core/services/storage'
import { getLeadStatusList } from '@core/services/apis'


type GetLeadStatusListResponse = SagaReturnType<typeof getLeadStatusList>


export function* getLeadStatusListSagas() {
  try { 
    const accessToken : string = yield getAccessToken()
    const result : GetLeadStatusListResponse = yield getLeadStatusList(accessToken)
    yield put(successList(result.data))
  } catch (error) {
    console.log(error)
    yield put(failureList("Falha ao obter lista de status dos Leads"));
  }
}
