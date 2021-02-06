import { action } from 'typesafe-actions';
import { Tokens, TokenTypes } from './types';

export const loadRequest = (username: string, password: string) => action(TokenTypes.LOAD_REQUEST, { username, password });

export const loadSuccess = (data: Tokens) => action(TokenTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(TokenTypes.LOAD_FAILURE);

export const getTokensStorage = () => action(TokenTypes.LOAD_TOKENS_STORAGE);

export const refreshAccessToken = () => action(TokenTypes.LOAD_REFRESH_ACCESSTOKEN);