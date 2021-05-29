import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import { 
    successList,
    failureList
  } from './actions';

import { 
  getAccessToken,
  } from '@core/services/storage'
import { getTaskTypesList } from '@core/services/apis'

type TaskTypesListResponse = SagaReturnType<typeof getTaskTypesList>

export function* getTaskTypesListSagas() {
  try { 
    const accessToken : string = yield getAccessToken()
    const result : TaskTypesListResponse = yield getTaskTypesList(accessToken)

    yield put(successList(result.data))
  } catch (error) {   
    if(error.response.status === 400 || error.response.status === 403){
      yield put(failureList(error.response.data));
    }else {
      yield put(failureList("Falha ao cadastrar tarefa"));
    }
    
  }
}
