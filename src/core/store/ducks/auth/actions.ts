import { action } from 'typesafe-actions';
import { AuthTypes, Auth } from './types';

export const login = (username: string, password: string) => action(AuthTypes.LOGIN, { username, password });
export const successRequestList = (data: Auth) => action(AuthTypes.SUCCESS_LOGIN, { data });
export const failureRequestList = (data: Auth) => action(AuthTypes.FAILURE_LOGIN, { data });

export const logout = () => action(AuthTypes.LOGOUT);
export const successLogout = (data: Auth) => action(AuthTypes.SUCCESS_LOGOUT, { data });
export const failureLogout = (data: Auth) => action(AuthTypes.FAILURE_LOGOUT, { data });


export const check = () => action(AuthTypes.CHECK);
export const successCheck = (data: Auth) => action(AuthTypes.SUCCESS_CHECK, { data });
export const failureCheck = (data: Auth) => action(AuthTypes.FAILURE_CHECK, { data });


export const renew = () => action(AuthTypes.RENEW);
export const successRenew = (data: Auth) => action(AuthTypes.SUCCESS_RENEW, { data });
export const failureRenew = (data: Auth) => action(AuthTypes.FAILURE_RENEW, { data });