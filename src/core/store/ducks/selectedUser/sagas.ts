import { Effect, put } from 'redux-saga/effects';
import { loadSuccess, loadFailure } from './actions';

import {
  setSelectedUser as setSelectedUserService,
  getSelectedUser as getSelectedUserService,
  getAccessToken,
} from '@core/services/storage'
import { editSelectedUser } from '@core/services/apis'

export function* getUserStorage() {
  try {
    const data = yield getSelectedUserService()
    const user = JSON.parse(data)
    yield put(loadSuccess(user, "Usuário carregado com sucesso"))
  } catch (error) {
    console.log(error)
    yield put(loadFailure("Falha ao obter usuário"));
  }
}


export function* editUser(action: Effect) {
  try {
    const { data } = action.payload
    const accessToken = yield getAccessToken()
    const result = yield editSelectedUser(data, accessToken)

    const dataToStore = result.data
    delete dataToStore.password

    yield setSelectedUserService(dataToStore)
    yield put(loadSuccess(dataToStore, "Usuário atualizado com sucesso"))

  } catch (error) {
    console.log(error)
    yield put(loadFailure("Falha ao atualizar usuário"));
  }
}