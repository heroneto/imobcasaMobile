import { action } from 'typesafe-actions';
import { LoggedUser, LoggedUserTypes } from './types';

export const loadRequest = () => action(LoggedUserTypes.LOAD_REQUEST );

export const loadSuccess = (data: LoggedUser, response: string) => action(LoggedUserTypes.LOAD_SUCCESS, { data, response });

export const loadFailure = (response: string) => action(LoggedUserTypes.LOAD_FAILURE, { response });

export const loadEditUser = (data: Omit<LoggedUser, 'isLogged'>) => action(LoggedUserTypes.LOAD_EDIT_USER, { data });

export const loadLogout = () => action(LoggedUserTypes.LOAD_LOGOUT)

export const loadChangePassword = (password: string, newPassword: string) => action(LoggedUserTypes.LOAD_CHANGE_PASSWORD, {password, newPassword} );
