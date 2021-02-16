import { action } from 'typesafe-actions';
import { User, ListUserTypes } from './types';

export const requestUserList = () => action(ListUserTypes.REQUEST_LIST);
export const successRequestList = (data: User[], response: string) => action(ListUserTypes.SUCCESS_REQUEST_LIST, { data, response });
export const failureRequestList = (response: string) => action(ListUserTypes.FAILURE_REQUEST_LIST, { response });

export const select = (id: string) => action(ListUserTypes.SELECT, { id });
export const successSelect = (selectedUser: User) => action(ListUserTypes.SUCCESS_SELECT, { selectedUser });
export const failureSelect = (response: string) => action(ListUserTypes.FAILURE_SELECT, { response });

export const edit = (data: Omit<User, "createdAt" | "updatedAt">) => action(ListUserTypes.EDIT, { data });
export const successEdit = (selectedUser: User, data: User[], response : string) => action(ListUserTypes.SUCCESS_EDIT, { selectedUser, data, response });
export const failureEdit = (response: string) => action(ListUserTypes.FAILURE_EDIT, { response });

export const resetPassword = (id: string, password: string) => action(ListUserTypes.RESET_PASSWORD, { id, password });
export const sucessResetPassword = (response: string) => action(ListUserTypes.SUCCESS_RESET_PASSWORD, { response });
export const failureResetPassword = (response: string) => action(ListUserTypes.FAILURE_RESET_PASSWORD, { response });

