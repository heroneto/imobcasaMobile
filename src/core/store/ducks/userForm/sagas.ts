import { call, Effect, put, SagaReturnType } from 'redux-saga/effects'
import {
  userFormGetUsers,
  UserFormRemove
} from '@core/services/apis'

import {
  failureRequestList,
  successRequestList,
  successRemove,
  failureRemove
} from './actions'

import { getAccessToken } from "@core/services/storage"

type RequestUserFormServiceResponse = SagaReturnType<typeof userFormGetUsers>

export function* requestUsers(action: Effect){
  try {
    const { formId } = action.payload
    const accessToken : string = yield getAccessToken()    
    const result : RequestUserFormServiceResponse = yield userFormGetUsers(formId, accessToken)
    yield put(successRequestList(result.data))
  } catch (error) {
    console.log(error.response)
    yield put(failureRequestList("Falha ao obter usuários do formulário"))
  }
}

type RemoveUserFormServiceResponse = SagaReturnType<typeof UserFormRemove>


export function* removeUserForm(action: Effect){
  try {
    const { formId, userId } = action.payload
    const accessToken : string = yield getAccessToken()    
    const result : RemoveUserFormServiceResponse = yield UserFormRemove(userId, formId, accessToken)
    if(result.data > 0){
      yield put(successRemove("Usuários removido com sucesso"))
    }else {
      yield put(failureRemove("Nenhum usuário removido"))
    }
    
  } catch (error) {
    console.log(error.response)
    yield put(failureRemove("Falha ao remover usuário"))
  }
}