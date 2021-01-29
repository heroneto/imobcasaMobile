import { action } from 'typesafe-actions';
import { Token, TokenTypes } from './types';

export const loadRequest = (username: string, password: string) => action(TokenTypes.LOAD_REQUEST);

export const loadSuccess = (data: Token) => action(TokenTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(TokenTypes.LOAD_FAILURE);


