import { action } from 'typesafe-actions';
import { Data, FacebookFormsTypes, FacebookForm } from './types';

export const listFacebookForms = () => action(FacebookFormsTypes.LIST);
export const successlistFacebookForms = (data: Data, response : string) => action(FacebookFormsTypes.SUCCESS_LIST, { data, response });
export const failurelistFacebookForms = (response: string) => action(FacebookFormsTypes.FAILURE_LIST, { response });

export const loadMoreFacebookForms = (after: string) => action(FacebookFormsTypes.LOAD_MORE, { after });
export const successLoadMoreFacebookForms = (data: Data, response : string) => action(FacebookFormsTypes.SUCCESS_LOAD_MORE, { data, response });
export const failureLoadMoreFacebookForms = (response: string) => action(FacebookFormsTypes.FAILURE_LOAD_MORE, { response });
