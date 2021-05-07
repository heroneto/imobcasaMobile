import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import { 
    successList,
    failureList,
    successAdd,
    failureAdd
  } from './actions';

import { 
    getAccessToken,
  } from '@core/services/storage'
import { getLeadList, leadAdd } from '@core/services/apis'


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


type LeadAddResponse = SagaReturnType<typeof leadAdd>

export function* addLeadSagas(action: Effect) {
  try { 
    const { data } = action.payload
    const accessToken : string = yield getAccessToken()
    const result : LeadAddResponse = yield leadAdd(accessToken, data)

    if(result.status === 200){
      yield put(successAdd("Lead cadastrado com sucesso"))
    }    
  } catch (error) {   
    if(error.response.status === 400 || error.response.status === 409){
      yield put(failureAdd(error.response.data));
    }else {
      yield put(failureAdd("Falha ao cadastrar Lead"));
    }
    
  }
}
