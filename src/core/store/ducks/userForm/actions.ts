import { action } from 'typesafe-actions';
import { UserForm, UserFormTypes, User } from './types';

export const requestList = (formId: string) => action(UserFormTypes.REQUEST_LIST, { formId });
export const successRequestList = (data: UserForm[]) => action(UserFormTypes.SUCCESS_REQUEST_LIST, { data });
export const failureRequestList = (response: string) => action(UserFormTypes.FAILURE_REQUEST_LIST, { response });


export const listNotRelatedUsers = (formId: string) => action(UserFormTypes.LIST_NOT_RELATED_USERS, { formId });
export const successlistNotRelatedUsers = (data: User[]) => action(UserFormTypes.SUCCESS_LIST_NOT_RELATED_USERS, { data });
export const failurelistNotRelatedUsers = (response: string) => action(UserFormTypes.FAILURE_LIST_NOT_RELATED_USERS, { response });

export const add = (formId: string, userId: string) => action(UserFormTypes.ADD, { formId, userId });
export const successAdd = (response: string) => action(UserFormTypes.SUCCESS_ADD, { response });
export const failureAdd = (response: string) => action(UserFormTypes.FAILURE_ADD, { response });

export const remove = (formId: string, userId: string) => action(UserFormTypes.REMOVE, { formId, userId });
export const successRemove = (response: string) => action(UserFormTypes.SUCCESS_REMOVE, { response });
export const failureRemove = (response: string) => action(UserFormTypes.FAILURE_REMOVE, { response });

export const resetStore = () => action(UserFormTypes.RESET_STORE);
export const successResetStore = () => action(UserFormTypes.SUCCESS_RESET_STORE);
export const failureResetStore = () => action(UserFormTypes.FAILURE_RESET_STORE);