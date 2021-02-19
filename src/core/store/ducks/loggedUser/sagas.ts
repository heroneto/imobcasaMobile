import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import { 
    loadSuccess, 
    loadFailure,
    successGet,
    failureGet,
    successEdit,
    failureEdit
  } from './actions';

import { 
    setUser as setUserService, 
    getUser as getUserService, 
    getAccessToken, 
    setAccessToken, 
    setRefreshToken 
  } from '@core/services/storage'
import { editLoggedUser, changeMyPassword as changeMyPasswordService } from '@core/services/apis'

export function* getUserStorage() {
  try {
    const data = yield getUserService()
    const user = JSON.parse(data)
    yield put(successGet(user, "Usuário carregado com sucesso"))
  } catch (error) {
    console.log(error)
    yield put(failureGet("Falha ao carregar usuário"));
  }
}

type EditUserReturnType = SagaReturnType<typeof editLoggedUser>

export function* editUser(action: Effect) {
  try {
    const { data } = action.payload
    data.active = true

    const accessToken = yield getAccessToken()
    const result : EditUserReturnType = yield editLoggedUser(data, accessToken)
    const { createdAt, updatedAt, password, ...user } = result.data

    const editedUser = {
      ...user,
      isLogged: true
    }
    yield setUserService(editedUser)
    yield put(successEdit(editedUser, result.status,"Usuário editado com sucesso"))
  } catch (error) {
    console.log(error)
    yield put(failureEdit(error.response.status, "Falha ao editar usuário"));
  }
}

export function* logout(){
  try {
    const data = {
      email: "",
      fullName: "",
      id: "",
      isLogged: false,
      username: "",
      admin: false,
      active: false,
    }
    yield setUserService(data)
    yield setAccessToken("")
    yield setRefreshToken("")
    yield put(loadSuccess(data, ""))

  } catch (error) {
    console.log(error)
    yield put(loadFailure("Falha ao deslogar"))
  }
}



export function* changeMyPassword(action: Effect){
  try {
    const user = yield getUserService()
    const { password, newPassword } = action.payload
    const accessToken = yield getAccessToken()
    yield changeMyPasswordService({
      password,
      newPassword
    }, 
      accessToken
    )
    yield put(loadSuccess(user, "Troca da senha com sucesso"))
  } catch (error) {
    console.log(error.response.status)
    yield put(loadFailure("Ocorreu um erro ao alterar a senha, verifique a senha antiga digitada"))
  }
}