import { action } from 'typesafe-actions';
import { TaskTypes, TaskTypesTypes } from './types';

export const list = () => action(TaskTypesTypes.LIST)
export const successList = (data: TaskTypes[]) => action(TaskTypesTypes.SUCCESS_LIST, { data })
export const failureList = (response: string) => action(TaskTypesTypes.FAILURE_LIST, {response})

export const reset = () => action(TaskTypesTypes.RESET)
export const successReset = () => action(TaskTypesTypes.SUCCESS_RESET) 
export const failureReset = () => action(TaskTypesTypes.FAILURE_RESET)