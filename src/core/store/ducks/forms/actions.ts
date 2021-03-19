import { action } from 'typesafe-actions';
import { Form, FormsTypes } from './types';

export const requestList = () => action(FormsTypes.REQUEST_LIST);
export const successRequestList = (data: Form[], response: string) => action(FormsTypes.SUCCESS_REQUEST_LIST, { data, response });
export const failureRequestList = (response: string) => action(FormsTypes.FAILURE_REQUEST_LIST, { response });

export const get = (id: string) => action(FormsTypes.GET, { id });
export const successGet = (form: Form) => action(FormsTypes.SUCCESS_GET, { form });
export const failureGet = (response: string) => action(FormsTypes.FAILURE_GET, { response });

export const create = (data: Omit<Form, "createdAt" | "updatedAt" | "id">) => action(FormsTypes.CREATE, { data });
export const successCreate = (form:Form, response : string) => action(FormsTypes.SUCCESS_CREATE, { form, response });
export const failureCreate = (response: string) => action(FormsTypes.FAILURE_CREATE, { response });

export const active = (id: string) => action(FormsTypes.ENABLE, { id });
export const successActive = (response : string) => action(FormsTypes.SUCCESS_ENABLE, { response });
export const failureActive = (response: string) => action(FormsTypes.FAILURE_ENABLE, { response });


export const inactivate = (id: string) => action(FormsTypes.DISABLE, { id });
export const successInactivate = (response : string) => action(FormsTypes.SUCCESS_DISABLE, { response });
export const failureInactivate = (response: string) => action(FormsTypes.FAILURE_DISABLE, { response });


export const addUser = (formId: string, userId: string) => action(FormsTypes.ADD_USER, { formId, userId  });
export const successAddUser = (response : string) => action(FormsTypes.SUCCESS_ADD_USER, { response });
export const failureAddUser = (response: string) => action(FormsTypes.FAILURE_ADD_USER, { response });


export const removeUser = (formId: string, userId: string) => action(FormsTypes.REMOVE_USER, { formId, userId });
export const successRemoveUser = (response : string) => action(FormsTypes.SUCCESS_REMOVE_USER, { response });
export const failureRemoveUser = (response: string) => action(FormsTypes.FAILURE_REMOVE_USER, { response });