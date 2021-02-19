import { action } from 'typesafe-actions';
import { AuthTypes, Auth } from './types';

export const login = (username: string, password: string) => action(AuthTypes.LOGIN, { data: { username, password} });
export const successLogin = (data: Auth) => action(AuthTypes.SUCCESS_LOGIN, { data });
export const failureLogin = (data: Auth) => action(AuthTypes.FAILURE_LOGIN, { data });

export const logout = () => action(AuthTypes.LOGOUT);
export const successLogout = () => action(AuthTypes.SUCCESS_LOGOUT);
export const failureLogout = (data: Auth) => action(AuthTypes.FAILURE_LOGOUT, { data });


export const renew = () => action(AuthTypes.RENEW);
export const successRenew = (data: Auth) => action(AuthTypes.SUCCESS_RENEW, { data });
export const failureRenew = (data: Auth) => action(AuthTypes.FAILURE_RENEW, { data });

export const resetStore = () => action(AuthTypes.RESET_STORE)