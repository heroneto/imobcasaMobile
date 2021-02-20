import { action } from 'typesafe-actions';
import { LoggedUser, LoggedUserTypes } from './types';

export const get = () => action(LoggedUserTypes.GET)
export const successGet = (data: LoggedUser, response: string) => action(LoggedUserTypes.SUCCESS_GET, {data, response})
export const failureGet = (response: string) => action(LoggedUserTypes.FAILURE_GET, {response})

export const changePassword = (password: string, newPassword: string) => action(LoggedUserTypes.CHANGE_PASSWORD, {password, newPassword})
export const successchangePassword = (httpCode: number, response: string) => action(LoggedUserTypes.SUCCESS_CHANGE_PASSWORD, {httpCode, response})
export const failurechangePassword = (httpCode: number, response: string) => action(LoggedUserTypes.FAILURE_CHANGE_PASSWORD, {httpCode, response})

export const edit = (data: Omit<LoggedUser, 'isLogged'>) => action(LoggedUserTypes.EDIT, {data})
export const successEdit = (data: LoggedUser, httpCode: number, response: string) => action(LoggedUserTypes.SUCCESS_EDIT, {data, httpCode, response})
export const failureEdit = (httpCode: number, response: string) => action(LoggedUserTypes.FAILURE_EDIT, {httpCode, response})