import { action } from 'typesafe-actions';
import { Task, TaskTypes } from './types';

export const add = (data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => action(TaskTypes.ADD, { data })
export const successAdd = (data: Task, response: string) => action(TaskTypes.SUCCESS_ADD, {response, data})
export const failureAdd = (response: string) => action(TaskTypes.FAILURE_ADD, {response})

export const get = (taskId: string) => action(TaskTypes.GET, { taskId })
export const successGet = (data: Task) => action(TaskTypes.SUCCESS_GET, { data })
export const failureGet = (response: string) => action(TaskTypes.FAILURE_GET, {response})


export const reset = () => action(TaskTypes.RESET)
export const successReset = () => action(TaskTypes.SUCCESS_RESET) 
export const failureReset = () => action(TaskTypes.FAILURE_RESET)