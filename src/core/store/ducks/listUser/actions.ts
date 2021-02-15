import { action } from 'typesafe-actions';
import { ListUser, ListUserTypes } from './types';

export const loadRequest = () => action(ListUserTypes.LOAD_REQUEST);

export const loadSuccess = (data: ListUser) => action(ListUserTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ListUserTypes.LOAD_FAILURE);
