import { action } from 'typesafe-actions';
import { User, UsersTypes, CreateUserProps } from './types';

export const requestUserList = () => action(UsersTypes.REQUEST_LIST);
export const successRequestList = (data: User[], response: string) => action(UsersTypes.SUCCESS_REQUEST_LIST, { data, response });
export const failureRequestList = (response: string) => action(UsersTypes.FAILURE_REQUEST_LIST, { response });

export const select = (id: string) => action(UsersTypes.SELECT, { id });
export const successSelect = (selectedUser: User) => action(UsersTypes.SUCCESS_SELECT, { selectedUser });
export const failureSelect = (response: string) => action(UsersTypes.FAILURE_SELECT, { response });

export const edit = (data: Omit<User, "createdAt" | "updatedAt">) => action(UsersTypes.EDIT, { data });
export const successEdit = (selectedUser: User, data: User[], response : string) => action(UsersTypes.SUCCESS_EDIT, { selectedUser, data, response });
export const failureEdit = (response: string) => action(UsersTypes.FAILURE_EDIT, { response });

export const resetPassword = (id: string, password: string) => action(UsersTypes.RESET_PASSWORD, { id, password });
export const sucessResetPassword = (response: string) => action(UsersTypes.SUCCESS_RESET_PASSWORD, { response });
export const failureResetPassword = (response: string) => action(UsersTypes.FAILURE_RESET_PASSWORD, { response });

export const create = (data: CreateUserProps) => action(UsersTypes.CREATE, { data });
export const successCreate = (selectedUser: User, data: User[], response : string) => action(UsersTypes.SUCCESS_CREATE, { selectedUser, data, response });
export const failureCreate = (response: string) => action(UsersTypes.FAILURE_CREATE, { response });

export const deleteUser = (id: string) => action(UsersTypes.DELETE, { id });
export const successDelete = (data: User[], response : string) => action(UsersTypes.SUCCESS_DELETE, { data, response });
export const failureDelete = (response: string) => action(UsersTypes.FAILURE_DELETE, { response });
