import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import { 
    successList,
    failureList,
  } from './actions';

import { 
    getAccessToken,
  } from '@core/services/storage'
import { getLeadSourceList } from '@core/services/apis'


type GetLeadSourceListResponse = SagaReturnType<typeof getLeadSourceList>


export function* getLeadSourcesSagas() {
  try { 
    const accessToken : string = yield getAccessToken()
    const result : GetLeadSourceListResponse = yield getLeadSourceList(accessToken)
    yield put(successList(result.data))
  } catch (error) {
    console.log(error)
    yield put(failureList("Falha ao obter lista de status dos Leads"));
  }
}
