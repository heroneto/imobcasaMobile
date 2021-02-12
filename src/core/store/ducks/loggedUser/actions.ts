import { action } from 'typesafe-actions';
import { LoggedUser, LoggedUserTypes } from './types';

export const loadRequest = () => action(LoggedUserTypes.LOAD_REQUEST );

export const loadSuccess = (data: LoggedUser) => action(LoggedUserTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(LoggedUserTypes.LOAD_FAILURE);

export const loadEditUser = (data: Omit<LoggedUser, 'isLogged'>) => action(LoggedUserTypes.LOAD_EDIT_USER, { data });

export const loadChangePassword = (oldPassword: string, newPassword: string) => action(LoggedUserTypes.LOAD_CHANGE_PASSWORD, { oldPassword, newPassword });

export const loadLogout = () => action(LoggedUserTypes.LOAD_LOGOUT)