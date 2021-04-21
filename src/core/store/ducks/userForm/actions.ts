import { action } from 'typesafe-actions';
import { UserForm, UserFormTypes } from './types';

export const requestList = (formId: string) => action(UserFormTypes.REQUEST_LIST, { formId });
export const successRequestList = (data: UserForm[]) => action(UserFormTypes.SUCCESS_REQUEST_LIST, { data });
export const failureRequestList = (response: string) => action(UserFormTypes.FAILURE_REQUEST_LIST, { response });

export const remove = (formId: string, userId: string) => action(UserFormTypes.REMOVE, { formId, userId });
export const successRemove = (response: string) => action(UserFormTypes.SUCCESS_REMOVE, { response });
export const failureRemove = (response: string) => action(UserFormTypes.FAILURE_REMOVE, { response });

export const resetStore = () => action(UserFormTypes.RESET_STORE);
export const successResetStore = () => action(UserFormTypes.SUCCESS_RESET_STORE);
export const failureResetStore = () => action(UserFormTypes.FAILURE_RESET_STORE);