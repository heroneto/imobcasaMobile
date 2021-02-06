import { action } from 'typesafe-actions';
import { LoggedUser, LoggedUserTypes } from './types';

export const loadRequest = () => action(LoggedUserTypes.LOAD_REQUEST);

export const loadSuccess = (data: LoggedUser) => action(LoggedUserTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(LoggedUserTypes.LOAD_FAILURE);
