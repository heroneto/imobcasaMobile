import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import { 
    successList,
    failureList,
  } from './actions';

import { 
    getAccessToken,
  } from '@core/services/storage'
import { getLeadList } from '@core/services/apis'


type GetLeadListResponse = SagaReturnType<typeof getLeadList>


export function* getLeadListSagas() {
  try { 
    const accessToken : string = yield getAccessToken()
    const result : GetLeadListResponse = yield getLeadList(accessToken, 0, 10)
    yield put(successList(result.data))
  } catch (error) {
    console.log(error)
    yield put(failureList("Falha ao carregar usuário"));
  }
}
