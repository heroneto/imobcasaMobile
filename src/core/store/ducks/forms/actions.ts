import { action } from 'typesafe-actions';
import { Form, FormsTypes } from './types';

export const requestUserList = () => action(FormsTypes.REQUEST_LIST);
export const successRequestList = (data: Form[], response: string) => action(FormsTypes.SUCCESS_REQUEST_LIST, { data, response });
export const failureRequestList = (response: string) => action(FormsTypes.FAILURE_REQUEST_LIST, { response });

export const select = (id: string) => action(FormsTypes.SELECT, { id });
export const successSelect = (selectedForm: Form) => action(FormsTypes.SUCCESS_SELECT, { selectedForm });
export const failureSelect = (response: string) => action(FormsTypes.FAILURE_SELECT, { response });

export const create = (data: Form) => action(FormsTypes.CREATE, { data });
export const successCreate = (selectedForm: Form, data: Form[], response : string) => action(FormsTypes.SUCCESS_CREATE, { selectedForm, data, response });
export const failureCreate = (response: string) => action(FormsTypes.FAILURE_CREATE, { response });
