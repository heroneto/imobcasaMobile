import { call, Effect, put, SagaReturnType } from 'redux-saga/effects'
import {
  userFormGetUsersRelated,
  userFormGetUsersNotRelated,
  UserFormRemove,
  UserFormAdd as userFormAddService
} from '@core/services/apis'

import {
  failureRequestList,
  successRequestList,
  successlistNotRelatedUsers,
  failurelistNotRelatedUsers,
  successRemove,
  failureRemove,
  successAdd,
   failureAdd
} from './actions'

import { getAccessToken } from "@core/services/storage"

type RequestUserFormRelatedServiceResponse = SagaReturnType<typeof userFormGetUsersRelated>

export function* requestUsers(action: Effect){
  try {
    const { formId } = action.payload
    const accessToken : string = yield getAccessToken()    
    const result : RequestUserFormRelatedServiceResponse = yield userFormGetUsersRelated(formId, accessToken)
    yield put(successRequestList(result.data))
  } catch (error) {
    console.log(error.response)
    yield put(failureRequestList("Falha ao obter usuários do formulário"))
  }
}

type RequestUserFormNotRelatedServiceResponse = SagaReturnType<typeof userFormGetUsersNotRelated>

export function* requestUsersNotRelated(action: Effect){
  try {
    const { formId } = action.payload
    const accessToken : string = yield getAccessToken()    
    const result : RequestUserFormNotRelatedServiceResponse = yield userFormGetUsersNotRelated(formId, accessToken)
    yield put(successlistNotRelatedUsers(result.data))
  } catch (error) {
    console.log(error.response)
    yield put(failurelistNotRelatedUsers("Falha ao obter usuários do formulário"))
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

type UserFormAddServiceResponse = SagaReturnType<typeof userFormAddService>


export function* addUserForm(action: Effect) {
  try {
    const { userId, formId } = action.payload
    const accessToken : string = yield getAccessToken()
    const result: UserFormAddServiceResponse = yield call(userFormAddService, userId, formId, accessToken)
    yield put(successAdd("Usuário adicionado com sucesso."))
  } catch (error) {
    console.log(error.response)
    yield put(failureAdd("Falha ao adicionar usuário no formulário."));
  }
}


