import { action } from 'typesafe-actions';
import { Auth, AuthTypes } from './types';

export const loadRequest = (username: string, password: string) => action(AuthTypes.LOAD_REQUEST, { username, password });

export const loadSuccess = (data: Auth) => action(AuthTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(AuthTypes.LOAD_FAILURE);

export const getTokensStorage = () => action(AuthTypes.LOAD_TOKENS_STORAGE);

export const refreshAccessToken = () => action(AuthTypes.LOAD_REFRESH_ACCESSTOKEN);