import { action } from 'typesafe-actions';
import { SelectedUser, SelectedUserTypes } from './types';

export const loadRequest = () => action(SelectedUserTypes.LOAD_REQUEST );

export const loadSuccess = (data: SelectedUser, response: string) => action(SelectedUserTypes.LOAD_SUCCESS, { data, response });

export const loadFailure = (response: string) => action(SelectedUserTypes.LOAD_FAILURE, { response });

export const loadEditUser = (data: Omit<SelectedUser, "createdAt" | "updatedAt" >) => action(SelectedUserTypes.LOAD_EDIT_USER, { data });
