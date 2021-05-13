import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import { 
    successGetLeadDetails,
    failureGetLeadDetails,
  } from './actions';

import { 
    getAccessToken,
  } from '@core/services/storage'
import { getLeadDetails } from '@core/services/apis'


type getLeadDetailsResponse = SagaReturnType<typeof getLeadDetails>


export function* getLeadDetailsRequest(action: Effect) {
  try { 
    const { id } = action.payload
    const accessToken : string = yield getAccessToken()
    const result : getLeadDetailsResponse = yield getLeadDetails(accessToken, id)
    yield put(successGetLeadDetails(result.data))
  } catch (error) {
    console.log(error)
    yield put(failureGetLeadDetails("Falha ao carregar usuário"));
  }
}
