import { action } from 'typesafe-actions';
import { ChangeMyPassword, ChangeMyPasswordTypes } from './types';

export const loadRequest = (password: string, newPassword: string) => action(ChangeMyPasswordTypes.LOAD_REQUEST, {password, newPassword} );

export const loadSuccess = (data: ChangeMyPassword) => action(ChangeMyPasswordTypes.LOAD_SUCCESS, { data });

export const loadFailure = (data: ChangeMyPassword) => action(ChangeMyPasswordTypes.LOAD_FAILURE, { data });

export const loadResetStore = () => action(ChangeMyPasswordTypes.LOAD_RESET_STORE)