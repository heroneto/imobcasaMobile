import { Effect, put, SagaReturnType } from 'redux-saga/effects';
import { 
    successAdd,
    failureAdd,
    successGet,
    failureGet
  } from './actions';

import { 
  getAccessToken,
  } from '@core/services/storage'
import { addTask, getTask } from '@core/services/apis'

type TaskAddResponse = SagaReturnType<typeof addTask>

export function* addTaskSagas(action: Effect) {
  try { 
    const { data } = action.payload
    const accessToken : string = yield getAccessToken()
    const result : TaskAddResponse = yield addTask(accessToken, data)

    if(result.status === 200){
      yield put(successAdd(result.data, "Tarefa cadastrada com sucesso"))
    }    
  } catch (error) {   
    if(error.response.status === 400 || error.response.status === 403){
      yield put(failureAdd(error.response.data));
    }else {
      yield put(failureAdd("Falha ao cadastrar tarefa"));
    }
    
  }
}


type TaskDetailsResponse = SagaReturnType<typeof getTask>

export function* getTaskSagas(action: Effect) {
  try { 
    const { taskId } = action.payload
    const accessToken : string = yield getAccessToken()
    const result : TaskDetailsResponse = yield getTask(accessToken, taskId)

    if(result.status === 200){
      yield put(successGet(result.data))
    }    
  } catch (error) {   
    if(error.response.status === 400 || error.response.status === 403){
      yield put(failureGet(error.response.data));
    }else {
      yield put(failureGet("Falha ao cadastrar tarefa"));
    }
    
  }
}
