import { Effect, put } from 'redux-saga/effects';
import { 

} from '@core/services/apis'

import { 

  } from './actions';

import { getAccessToken } from '@core/services/storage'

export function* getUserList(){
  try {
    const accessToken = yield getAccessToken()
    const result = yield getUsers(accessToken)
    yield put(successRequestList(result.data, "Usuários carregados com sucesso"))
  } catch (error) {
    console.log(error.response)
    yield put(failureRequestList("Falha ao obter lista de usuários"));
  }
}
