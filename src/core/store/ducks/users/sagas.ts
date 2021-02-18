import { Effect, put } from 'redux-saga/effects';
import { 
  getUsers, 
  getUser, 
  editSelectedUser, 
  resetUserPassword as resetUserPasswordService,
  createUser as createUserService,
  deleteUser as deleteUserService
} from '@core/services/apis'

import { 
    successRequestList, 
    failureRequestList, 
    successSelect, 
    failureSelect, 
    successEdit, 
    failureEdit,
    failureResetPassword,
    sucessResetPassword,
    successCreate,
    failureCreate,
    successDelete,
    failureDelete
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

export function* selectUser(action: Effect){
  try {
    const { id } = action.payload
    // Call API
    const accessToken = yield getAccessToken()
    const result = yield getUser(accessToken, id)
    yield put(successSelect(result.data))
  } catch (error) {
    console.log(error.response)
    yield put(failureSelect("Falha ao carregar usuário"));
  }
}

export function* editUser(action: Effect){
  try {
    const accessToken = yield getAccessToken()
    const result  = yield editSelectedUser(action.payload.data, accessToken)
    const resultUsers = yield getUsers(accessToken)
    yield put(successEdit(result.data, resultUsers.data, "Usuário editado com sucesso"))
    
  } catch (error) {
    console.log(error.response)
    yield put(failureEdit("Falha ao editar usuário"));
  }

}

export function* resetUserPassword(action: Effect){
  try {
    const { password, id } = action.payload
    const accessToken = yield getAccessToken()
    const result  = yield resetUserPasswordService(password, id, accessToken)
    yield put(sucessResetPassword("Senha trocada com sucesso"))
    
  } catch (error) {
    console.log(error.response)
    yield put(failureResetPassword("Falha ao trocar senha do usuário"));
  }

}

export function* createUser(action:Effect){
  try {
    const accessToken = yield getAccessToken()
    const result  = yield createUserService(action.payload.data, accessToken)
    const resultUsers = yield getUsers(accessToken)

    yield put(successCreate(result.data, resultUsers.data, "Usuário cadastrado com sucesso"))
    
  } catch (error) {
    console.log(error.response)
    yield put(failureCreate("Falha ao cadastrar usuário"));
  }
}


export function* deleteUser(action:Effect){
  try {
    const { id } = action.payload
    const accessToken = yield getAccessToken()
    yield deleteUserService(accessToken, id)
    const resultUsers = yield getUsers(accessToken)

    yield put(successDelete(resultUsers.data, "Usuário deletado com sucesso"))
    
  } catch (error) {
    console.log(error.response)
    yield put(failureDelete("Falha ao deletar usuário"));
  }

}